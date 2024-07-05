import React, { useEffect, useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import {
  ButtonAvançar,
  ButtonVoltar,
  ContainerButton,
  ContainerForm,
  ContainerInput,
  ContainerInput2,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  Line,
  TitleStep,
  WInput
} from './styled';
import { Loading } from '@/components/Loading/loading';
import { CustomSelect } from '@/components/Select/select';
import { useLogin } from '@/context/user.login';
import { useFormContext } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useEstablishment } from '@/context/useEstablishment';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '@/service/api';
import { useTenantData } from '@/context';
import { TranslateErrorMessage } from '@/utils/translateErrorMessage';
import { toast } from 'react-toastify';

interface IStep3 {
  Avançar: () => void;
  Voltar: () => void;
}

interface IOption {
  value: string;
  label: string;
}

export function Step3({ Avançar, Voltar }: IStep3) {
  const [fetchedOptions, setFetchedOptions] = useState<IOption[]>([]);
  const [acquires, setAcquires] = useState<IOption[]>([]);
  const [planOptions, setPlanOptions] = useState<IOption[]>([]);
  const [acquire, setAcquire] = useState<string | null>(null);
  const { establishmentId } = useEstablishment();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { dataUser } = useLogin();

  const {
    register,
    setValue,
    formState: { errors },
    watch
  } = useFormContext();

  const allFieldsFilled = !!watch('licenciado');

  const fetchAcquires = useCallback(async () => {
    try {
      const response = await axios.get(`${baseURL}acquire/index`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data;
      if (data && data.acquires) {
        setAcquires(data.acquires.map((acquire: { id: any; acquire_label: any }) => ({
          value: acquire.id,
          label: acquire.acquire_label,
        })));
      }
    } catch (error) {

    }
  }, [dataUser?.token]);

  const fetchSellers = useCallback(async () => {
    try {
      const response = await axios.get(`${baseURL}seller/list/la`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data;
      if (data && data.sellers) {
        setFetchedOptions(data.sellers.map((seller: { trading_name: any; type: any; id: any, document: any }) => ({
          value: seller.id,
          label: `${seller.trading_name}-${seller.document}`
        })));
      }
    } catch (error) {
      console.error('Erro ao buscar vendedores', error);
    }
  }, [dataUser?.token]);

  const loadSellerDataFromSession = useCallback(() => {
    const sellerDataString = sessionStorage.getItem('dados-edit-ec');
    if (sellerDataString) {
      const sellerData = JSON.parse(sellerDataString);

      setValue('Fornecedor', sellerData.acquires[0]?.id || '');
      setAcquire(sellerData.acquires[0]?.id || null);
      setValue('licenciado', sellerData.seller_la.id_la);
      setValue('licenciado', sellerData.seller_la.id_la);
      setValue('PlanoComercial', sellerData.acquires[0]?.plan_id || '');
    }
  }, [setValue]);

  const fetchPlans = useCallback(async () => {
    if (!acquire) return;
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}plan/commercial/3`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const plansData = response.data.plans.map((plan: { id: any; name: any; }) => ({
        value: plan.id,
        label: plan.name,
      }));
      setPlanOptions(plansData);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }, [dataUser?.token, acquire]);

  useEffect(() => {
    fetchAcquires();
    fetchSellers();
    loadSellerDataFromSession();
  }, [fetchAcquires, fetchSellers, loadSellerDataFromSession]);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  const handleSalvar = async () => {
    try {
      setLoading(true);
      const updatedData = {
        id_seller_origin: watch('licenciado'),
        id_seller_destiny: establishmentId
      };

      await axios.put(`${baseURL}update-seller-network`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      });

      setLoading(false);

      Swal.fire({
        icon: 'success',
        title: 'Licenciado atualizado com sucesso!',
        showConfirmButton: true,
        confirmButtonText: 'Continuar',
        showCancelButton: true,
        cancelButtonText: 'OK',
        showCloseButton: true,
        closeButtonAriaLabel: 'Fechar modal'
      }).then((result) => {
        if (result.isConfirmed) {
          Avançar();
        } else {
          handleEC();
        }
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Erro ao atualizar dados',
        text: 'Ocorreu um erro ao tentar atualizar os dados do licenciado. Por favor, tente novamente mais tarde.',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleUpdatePlan = async () => {
    try {
      setLoading(true);
      const payload = {
        seller_id: establishmentId,
        acquire_id: acquire,
        plan_id: watch('PlanoComercial')
      };

      const response = await axios.put(`${baseURL}plan/update-ec/`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Plano atualizado com sucesso!',
          showConfirmButton: true,
          confirmButtonText: 'Continuar'
        });
      } else {
        throw new Error('Falha ao atualizar plano');
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally {
      setLoading(false);
    }
  };

  const licenciadoValue = watch('licenciado');
  const selectedOption = fetchedOptions.find(option => option.value === licenciadoValue);

  const fornecedor = watch('Fornecedor');
  const selectedAcquire = acquires.find(acquire => acquire.value === fornecedor);

  const planoComercialValue = watch('PlanoComercial');
  const selectedPlan = planOptions.find(plan => plan.value === planoComercialValue);

  const handleEC = () => {
    navigate('/sellers-ec');
  }

  const tenantData = useTenantData();

  return (
    <>
      {loading && <Loading />}
      <ContainerStep>
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Comercial</TitleStep>
            <Line />
            <ContainerForm>
              <ContainerInput2>
                <CustomSelect
                  placeholder='-'
                  {...register('licenciado')}
                  value={selectedOption || { value: '', label: '' }}
                  label="Licenciado Autorizado"
                  optionsData={{ options: fetchedOptions }}
                  hasError={!!errors.licenciado}
                  onChange={(selectedOption: { value: string }) => {
                    setValue('licenciado', selectedOption.value)
                  }} />
                <button>Pesquise pelo nome do Licenciado</button>
              </ContainerInput2>

              <ContainerInput>
                <WInput>
                  <CustomSelect
                    {...register('Fornecedor')}
                    label="Fornecedor"
                    placeholder=""
                    value={selectedAcquire}
                    hasError={!!errors.Fornecedor}
                    optionsData={{ options: acquires }}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('Fornecedor', selectedOption.value)
                    }} />
                </WInput>
                <WInput>
                  <CustomSelect
                    {...register('PlanoComercial')}
                    label="Plano Comercial"
                    value={selectedPlan || { value: '', label: '' }}
                    optionsData={{ options: planOptions }}
                    placeholder=""
                    hasError={!!errors.PlanoComercial}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('PlanoComercial', selectedOption.value);
                    }}
                  />
                </WInput>
              </ContainerInput>
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={Voltar}>Voltar</ButtonVoltar>
            <ButtonAvançar
              primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={handleUpdatePlan}>
              Salvar
            </ButtonAvançar>
            <ButtonAvançar
              primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={Avançar}>
              Avançar
            </ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}
