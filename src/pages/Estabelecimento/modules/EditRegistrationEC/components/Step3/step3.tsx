import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
import { baseURL } from '@/config/color';
import { useTenantData } from '@/context';
import { optionsData } from './optionsData';

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
  const [acquire, setAcquire] = useState()
  const { establishmentId } = useEstablishment();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const { dataUser } = useLogin();

  const {
    register,
    setValue,
    formState: { errors },
    watch
  } = useFormContext();

  const allFieldsFilled = !!watch('licenciado');


  useEffect(() => {
    const fetchData = async () => {
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
        console.error('Houve um erro ao buscar os dados dos adquirentes:', error);
      }
    };

    fetchData();
  }, [dataUser?.token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}seller/indexla`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${dataUser?.token}`
          }
        });
        const data = response.data;
        if (data && data.sellers) {
          setFetchedOptions(data.sellers.map((seller: { trading_name: any; type: any; id: any, cnpj_cpf: any }) => ({
            value: seller.id,
            label: `${seller.trading_name}-${seller.type}-${seller.cnpj_cpf}`
          })));
        }
      } catch (error) {
        console.error('Houve um erro ao buscar os dados dos vendedores:', error);
      }
    };

    fetchData();
  }, [dataUser?.token]);

  useEffect(() => {
    const fetchSellerData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseURL}seller/show/${establishmentId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${dataUser?.token}`,
            },
          }
        );

        const sellerData = response.data;
        setValue('Fornecedor',response.data.seller.acquires[0].id)
        setAcquire(response.data.seller.acquires[0].id)
        setValue('licenciado', sellerData.seller.seller_la.id_la);

      } catch (error) {
        console.error('Erro ao obter dados do vendedor:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSellerData();
  }, [establishmentId, dataUser?.token, setValue]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseURL}plan/commercial/${acquire}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${dataUser?.token}`
          }
        });
        const plansData = response.data.plans.map((plan: { id: any; name: any; }) => ({
          value: plan.id,
          label: `${plan.name}`
        }));
        setPlanOptions(plansData);
      } catch (error) {
        console.error('Erro ao buscar os dados dos planos comerciais:', error);
      } finally {
        setLoading(false);
      }
    };

    if (dataUser?.token && acquire) {
      fetchPlans();
    }
  }, [dataUser?.token, acquire]);

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
      console.error('Erro ao atualizar dados:', error);
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
      console.error('Erro ao atualizar o plano:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro ao atualizar plano',
        text: 'Ocorreu um erro ao tentar atualizar o plano. Por favor, tente novamente mais tarde.',
        confirmButtonText: 'OK'
      });
    } finally {
      setLoading(false);
    }
  };


  const licenciadoValue = watch('licenciado');
  const selectedOption = fetchedOptions.find(option => option.value === licenciadoValue);

  const fornecedor = watch('Fornecedor');
  const selectedAcquire = acquires.find(acquire => acquire.value === fornecedor);

  const handleEC = () => {
    navigate('/sellers-ec')
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
                  value={selectedOption || {value: '', label: ''}}
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
                    {...register(`Fornecedor`)}
                    label="Fornecedor"
                    placeholder=""
                    value={selectedAcquire}
                    hasError={!!errors[`Fornecedor`]}
                    optionsData={{ options: acquires }}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('Fornecedor', selectedOption.value)
                    }} />
                </WInput>
                <WInput>
                  <CustomSelect
                    {...register(`PlanoComercial`)}
                    label="Plano Comercial"
                    optionsData={{ options: planOptions }}
                    placeholder=""
                    hasError={!!errors[`PlanoComercial`]}
                    onChange={(selectedOption: { value: string }) => {
                      setValue(`PlanoComercial`, selectedOption.value);
                    }}
                  />
                </WInput>
              </ContainerInput>


            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={Voltar}>Voltar</ButtonVoltar>
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
