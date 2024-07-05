import { baseURL } from '@/service/api';
import { useFormContext } from 'react-hook-form';
import * as S from './styled';
import { CustomInput } from '@/components/Input/input';
import { LabelCustomInputMask } from '@/components/CustomInputMask';
import { validateDataCriacao } from '@/utils/dataValid';
import { validateTelefone } from '@/utils/telefoneValid';
import { validateEmail } from '@/utils/validateEmail';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { useLogin } from '@/context/user.login';
import { useLicensed } from '@/context/useLicensed';
import { Loading } from '@/components/Loading/loading';
import Swal from 'sweetalert2';
import { SellerData } from '../../../interface';
import { useTenantData } from '@/context';
import { TranslateErrorMessage } from '@/utils/translateErrorMessage';
import { toast } from 'react-toastify';


interface IStep1 {
  Avançar: () => void;
}

export function PF({ Avançar }: IStep1) {
  const navigate = useNavigate();
  const { dataUser } = useLogin();
  const { licensedId } = useLicensed();
  const [loading, setLoading] = useState(true);
  const [sellerData, setSellerData] = useState<SellerData | null>(null);
  const {
    register,
    setValue,
    formState: { errors, isValid: formIsValid },
    trigger,
    watch
  } = useFormContext();

  const allFieldsFilled =
    !!watch('NascimentoSocio') &&
    !!watch('CPFEstabelecimento') &&
    !!watch('NomeSocioEstabelecimento') &&
    !!watch('EmailEstabelecimento') &&
    !!watch('TelefoneEstabelecimento');

  const handleAvancar = async () => {
    Avançar();
  };

  const fetchSellerData = useCallback(() => {
    const sellerDataString = sessionStorage.getItem('dados-edit-la');
    if (sellerDataString) {
      const sellerData = JSON.parse(sellerDataString);
      setValue('EmailEstabelecimento', sellerData.email);
      const nascimentoSocio = new Date(sellerData.owner_birthday).toLocaleDateString('pt-BR');
      setValue('NascimentoSocio', nascimentoSocio);
      setValue('CPFEstabelecimento', sellerData.owner_cpf);
      setValue('TelefoneEstabelecimento',sellerData.phone);
      setValue('NomeSocioEstabelecimento', sellerData.owner_name);
      setSellerData(sellerData);
    }
    setLoading(false);
  }, [setValue]);

  useEffect(() => {
    fetchSellerData();
  }, [fetchSellerData]);

  if (loading) {
    return <Loading />;
  }

  const handleSalvar = async () => {
    try {
      setLoading(true);

      const formatDate = (dateString: string) => {
        const [day, month, year] = dateString.split('/');
        return `${year}-${month}-${day}`;
      };

      const updatedData = {
        owner_birthday: formatDate(watch('NascimentoSocio')),
        owner_cpf: watch('CPFEstabelecimento'),
        owner_name: watch('NomeSocioEstabelecimento'),
        email: watch('EmailEstabelecimento'),
        phone: watch('TelefoneEstabelecimento'),
        document: watch('CPFEstabelecimento'),
        type_document: sellerData?.type_document
      };

      await axios.put(`${baseURL}seller/update/${licensedId}`, updatedData, {
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

  const handleLicenseddetail = () => {
    navigate('/sellers-la');
  };

  const tenantData = useTenantData();
  return (
    <>
      <S.ContainerStep>
        <S.ContextStepContainer>
          <S.ContextStep>
            <S.ContainerDados>
              <S.TitleStep>Dados do Licenciado</S.TitleStep>
            </S.ContainerDados>
            <S.Line />
            <S.ContainerForm>
              <S.ContainerInput>
                <LabelCustomInputMask
                  {...register('CPFEstabelecimento')}
                  label="CPF"
                  mask="999.999.999-99"
                  placeholder="---.---.---.--"
                  hasError={!!errors.CPFEstabelecimento}
                />

<CustomInput
                  {...register('NomeSocioEstabelecimento')}
                  label="Nome Completo"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.NomeSocioEstabelecimento}
                />

                <LabelCustomInputMask
                  {...register('NascimentoSocio', {
                    validate: validateDataCriacao
                  })}
                  label="Data de Nascimento"
                  mask="99/99/9999"
                  placeholder="dd/mm/aaaa"
                  hasError={!!errors.NascimentoSocio}
                />
              </S.ContainerInput>


              <S.ContainerInput2>


                <LabelCustomInputMask
                  {...register('TelefoneEstabelecimento', {
                    validate: validateTelefone
                  })}
                  label="Telefone/Celular"
                  mask="(99) 99999-9999"
                  placeholder="(--) ----.----"
                  hasError={!!errors.TelefoneEstabelecimento}
                />
                 <CustomInput
                  {...register('EmailEstabelecimento', {
                    validate: validateEmail
                  })}
                  label="E-mail"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.EmailEstabelecimento}
                />
              </S.ContainerInput2>

            </S.ContainerForm>
          </S.ContextStep>
          <S.ContainerButton>
            <S.ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='button' onClick={handleLicenseddetail} >Cancelar</S.ButtonVoltar>
            <S.ButtonAvançar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='button' disabled={!allFieldsFilled} onClick={handleSalvar}>Salvar</S.ButtonAvançar>
            <S.ButtonAvançar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='button' disabled={!allFieldsFilled} onClick={handleAvancar}>
              Avançar
            </S.ButtonAvançar>
          </S.ContainerButton>
        </S.ContextStepContainer>
      </S.ContainerStep>
    </>
  );
}
