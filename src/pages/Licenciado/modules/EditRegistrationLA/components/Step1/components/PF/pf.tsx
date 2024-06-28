import { baseURL } from '@/config/color';
import { useFormContext } from 'react-hook-form';
import * as S from './styled';
import { CustomInput } from '@/components/Input/input';
import { LabelCustomInputMask } from '@/components/CustomInputMask';
import { validateCNPJ, validateCPF } from 'validations-br';
import { validateDataCriacao } from '@/utils/dataValid';
import { validateTelefone } from '@/utils/telefoneValid';
import { validateEmail } from '@/utils/validateEmail';
import { CustomSelect } from '@/components/Select/select';
import { optionsData } from './option';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useLogin } from '@/context/user.login';
import { useLicensed } from '@/context/useLicensed';
import { Loading } from '@/components/Loading/loading';
import Swal from 'sweetalert2';
import { SellerData } from '../../../interface';
import { useTenantData } from '@/context';

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

  const fetchSellerData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseURL}seller/show/${licensedId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser?.token}`,
          },
        }
      );
      setValue('EmailEstabelecimento', response.data.seller.email);
      const nascimentoSocio = new Date(response.data.seller.owner_birthday).toLocaleDateString('pt-BR');
      setValue('NascimentoSocio', nascimentoSocio);
      setValue('CPFEstabelecimento', response.data.seller.owner_cpf);
      setValue('TelefoneEstabelecimento', response.data.seller.phone);
      setValue('NomeSocioEstabelecimento', response.data.seller.owner_name);
      setSellerData(response.data.seller);
    } catch (error) {
      console.error('Erro ao buscar dados do vendedor', error);
    } finally {
      setLoading(false);
    }
  }, [licensedId, dataUser?.token, setValue]);

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
          handleLicenseddetail();
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
                  {...register('CPFEstabelecimento', { validate: validateCPF })}
                  label="CPF"
                  mask="999.999.999-99"
                  placeholder="---.---.---.--"
                  hasError={!!errors.CPFEstabelecimento}
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
              <S.ContainerInput>
                <CustomInput
                  {...register('NomeSocioEstabelecimento')}
                  label="Nome Completo"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.NomeSocioEstabelecimento}
                />

                <LabelCustomInputMask
                  {...register('TelefoneEstabelecimento', {
                    validate: validateTelefone
                  })}
                  label="Telefone/Celular"
                  mask="(99) 99999-9999"
                  placeholder="(--) ----.----"
                  hasError={!!errors.TelefoneEstabelecimento}
                />
              </S.ContainerInput>
              <S.ContainerInput>
                <CustomInput
                  {...register('EmailEstabelecimento', {
                    validate: validateEmail
                  })}
                  label="E-mail"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.EmailEstabelecimento}
                />
              </S.ContainerInput>
            </S.ContainerForm>
          </S.ContextStep>
          <S.ContainerButton>
            <S.ButtonVoltar type='button' onClick={handleLicenseddetail} >Cancelar</S.ButtonVoltar>
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
