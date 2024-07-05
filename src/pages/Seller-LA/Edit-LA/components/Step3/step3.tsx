import { useCallback, useEffect, useState } from 'react';
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
import { LabelCustomInputMask } from '@/components/CustomInputMask';
import { SellerData } from '../interface';
import { useLicensed } from '@/context/useLicensed';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '@/service/api';
import { useTenantData } from '@/context';
import { toast } from 'react-toastify';
import { TranslateErrorMessage } from '@/utils/translateErrorMessage';

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
  const [loading, setLoading] = useState(true);
  const [sellerData, setSellerData] = useState<SellerData | null>(null);
  const { licensedId } = useLicensed();
  const navigate = useNavigate();
  const { dataUser } = useLogin();

  const {
    register,
    setValue,
    formState: { errors },
    watch
  } = useFormContext();

  const allFieldsFilled = !!watch('licenciado');

  const fetchSellers = useCallback(async () => {
    if (!licensedId) return;

    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}seller/list/la`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      const data = response.data;
      if (data && data.sellers) {
        const numericLicensedId = Number(licensedId);
        const options = data.sellers
          .filter((seller: { id: string }) => Number(seller.id) !== numericLicensedId)
          .map((seller: { id: any; trading_name: any; type: any; document: any }) => ({
            value: seller.id,
            label: `${seller.trading_name}-${seller.document}`
          }));

        setFetchedOptions(options);
      } else {
        setFetchedOptions([]);
      }
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }, [dataUser?.token, licensedId]);

  useEffect(() => {
    fetchSellers();
  }, [fetchSellers]);




  const loadSellerDataFromSession = useCallback(() => {
    const sellerDataString = sessionStorage.getItem('dados-edit-la');
    if (sellerDataString) {
      const sellerData = JSON.parse(sellerDataString);
      setValue('licenciado', sellerData.seller_la.id_la);
      const markup = parseFloat(sellerData.markup.replace(',', '.'));
      const formattedMarkup = markup.toFixed(2).replace('.', ',');
      setValue('RegraMarkup', formattedMarkup);
      setSellerData(sellerData);
    }
  }, [setValue]);


  useEffect(() => {
    loadSellerDataFromSession();
  }, [loadSellerDataFromSession]);

  const handleSalvar = async () => {
    try {
      setLoading(true);

      const markupValue = watch('RegraMarkup')
        .replace(',', '.')
        .replace(/ %/, '');

      const updatedData = {
        markup_seller_destiny: markupValue,
        id_seller_origin: watch('licenciado'),
        id_seller_destiny: licensedId
      };

      await axios.put(`${baseURL}update-seller-network`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      });
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
          handleLicenseddetail();
        }
      });
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally{
      setLoading(false)
    }
  };

  const licenciadoValue = watch('licenciado');
  const selectedOption = fetchedOptions.find(option => option.value === licenciadoValue);

  const handleLicenseddetail = () => {
    navigate('/sellers-la');
  };
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
                    setValue('licenciado', selectedOption.value);
                  }}
                />
                <button>Pesquise pelo nome do Licenciado</button>
              </ContainerInput2>

              <ContainerInput>
                <WInput>
                  <LabelCustomInputMask
                    placeholder="Regra Markup %"
                    label="Regra Markup"
                    mask='99,99 %'
                    {...register('RegraMarkup')}
                    hasError={!!errors.TaxaAntecipacao}
                  />
                </WInput>
              </ContainerInput>

            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={Voltar}>Voltar</ButtonVoltar>
            <ButtonAvançar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={handleSalvar}>Salvar</ButtonAvançar>
            <ButtonAvançar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={Avançar}>Avançar</ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}
