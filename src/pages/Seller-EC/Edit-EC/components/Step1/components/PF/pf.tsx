import { baseURL } from '@/service/api'
import { useFormContext } from 'react-hook-form'
import * as S from './styled'
import { CustomInput } from '@/components/Input/input'
import { LabelCustomInputMask } from '@/components/CustomInputMask'
import { validateDataCriacao } from '@/utils/dataValid'
import { validateTelefone } from '@/utils/telefoneValid'
import { validateEmail } from '@/utils/validateEmail'
import { CustomSelect } from '@/components/Select/select'
import { useCallback, useEffect, useState } from 'react'
import { optionsCnae } from '@/json/cnae'
import axios, { AxiosError } from 'axios'
import { useLogin } from '@/context/user.login'
import { useEstablishment } from '@/context/useEstablishment'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useTenantData } from '@/context'
import { TranslateErrorMessage } from '@/utils/translateErrorMessage'
import { toast } from 'react-toastify'

interface IStep1 {
  Avançar: () => void

}

export function PF({ Avançar}: IStep1) {
  const {
    register,
    setValue,
    formState: { errors, isValid: formIsValid },
    trigger,
    watch
  } = useFormContext()

  const { dataUser } = useLogin();
  const { establishmentId } = useEstablishment();
  const [loading, setLoading] = useState(true);
  const [typeDocument, setTypeDocument] = useState<string>('');
  const navigate = useNavigate();

  const allFieldsFilled =
    !!watch('NomeFantasiaEstabelecimento') &&
    !!watch('NascimentoSocio') &&
    !!watch('CPFEstabelecimento') &&
    !!watch('NomeSocioEstabelecimento') &&
    !!watch('EmailEstabelecimento') &&
    !!watch('AreaAtuacaoEstabelecimento') &&
    !!watch('TelefoneEstabelecimento')

  const handleAvancar = async () => {
    Avançar();
  }

  const loadSellerDataFromSession = useCallback(() => {
    const sellerDataString = sessionStorage.getItem('dados-edit-ec');
    if (sellerDataString) {
      const sellerData = JSON.parse(sellerDataString);

      setValue('EmailEstabelecimento', sellerData.email);
      setValue('NomeFantasiaEstabelecimento', sellerData.trading_name);
      const nascimentoSocio = new Date(sellerData.owner_birthday).toLocaleDateString('pt-BR');
      setValue('NascimentoSocio', nascimentoSocio);
      setValue('CPFEstabelecimento', sellerData.owner_cpf);
      setValue('TelefoneEstabelecimento', sellerData.phone);
      setValue('NomeSocioEstabelecimento', sellerData.owner_name);
      setValue('AreaAtuacaoEstabelecimento', sellerData.mcc);
      setTypeDocument(sellerData.type_document);
    }
  }, [setValue]);

  useEffect(() => {
    loadSellerDataFromSession();
  }, [loadSellerDataFromSession]);


  const handleSalvar = async () => {
    try {
      setLoading(true);

      const formatDate = (dateString: { split: (arg0: string) => [any, any, any] }) => {
        const [day, month, year] = dateString.split('/');
        return `${year}-${month}-${day}`;
      };

      const updatedData = {
        mcc: areaAtuacaoValue,

        trading_name: watch('NomeFantasiaEstabelecimento'),
      company_name: watch('RazaoSocialEstabelecimento'),
        owner_birthday: formatDate(watch('NascimentoSocio')),
        owner_cpf: watch('CPFEstabelecimento'),
        owner_name: watch('NomeSocioEstabelecimento'),
        email: watch('EmailEstabelecimento'),
        phone: watch('TelefoneEstabelecimento'),
        document: watch('CPFEstabelecimento'),
        type_document: typeDocument
      };

      await axios.put(`${baseURL}seller/update/${establishmentId}`, updatedData, {
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
          handleEC();
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



  const handleEC = () => {
    navigate('/sellers-ec')
  }


  const tenantData = useTenantData();
  const areaAtuacaoValue = watch('AreaAtuacaoEstabelecimento');
  return (
    <S.ContainerStep>
      <S.ContextStepContainer>
        <S.ContextStep>
          <S.ContainerDados>
            <S.TitleStep>Dados do Estabelecimento</S.TitleStep>

          </S.ContainerDados>
          <S.Line />
          <S.ContainerForm>
            <S.ContainerInput>
              <CustomInput
                {...register('NomeFantasiaEstabelecimento')}
                label="Nome Fantasia"
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}
                hasError={!!errors.NomeFantasiaEstabelecimento}
              />
               <LabelCustomInputMask
                {...register('CPFEstabelecimento')}
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



            <S.ContainerInput2>
              <CustomSelect
                optionsData={optionsCnae}
                value={optionsCnae.options.find(option => option.value === areaAtuacaoValue)}
                              {...register('AreaAtuacaoEstabelecimento')}
                              placeholder="Digite aqui ou clique para ver a lista"
                              label="Área de Atuação"
                              onChange={(selectedOption: { value: string }) => {
                                setValue('AreaAtuacaoEstabelecimento', selectedOption.value)
                              }}
                              hasError={!!errors.AreaAtuacaoEstabelecimento}
                            />
              <button>Pesquise pelo CNAE ou Nome</button>
            </S.ContainerInput2>
          </S.ContainerForm>
        </S.ContextStep>
        <S.ContainerButton>
        <S.ButtonVoltar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='button' onClick={handleEC} >Cancelar</S.ButtonVoltar>
          <S.ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
  type='button' disabled={!allFieldsFilled} onClick={handleSalvar}>Salvar</S.ButtonAvançar>
        <S.ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
 type='button' disabled={!allFieldsFilled} onClick={handleAvancar}>
          Avançar
        </S.ButtonAvançar>
        </S.ContainerButton>
      </S.ContextStepContainer>
    </S.ContainerStep>
  )
}
