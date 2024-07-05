import { baseURL } from '@/config/color'
import { useFormContext } from 'react-hook-form'
import {
  ButtonAvançar,
  ButtonVoltar,
  ContainerButton,
  ContainerDados,
  ContainerForm,
  ContainerInput,
  ContainerInput2,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  Line,
  TitleStep
} from './styled'
import { CustomInput } from '@/components/Input/input'
import { LabelCustomInputMask } from '@/components/CustomInputMask'
import { validateDataCriacao } from '@/utils/dataValid'
import { validateEmail } from '@/utils/validateEmail'
import { CustomSelect } from '@/components/Select/select'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import axios, { AxiosError } from 'axios'
import { useLogin } from '@/context/user.login'
import { useLicensed } from '@/context/useLicensed'
import { Loading } from '@/components/Loading/loading'
import { optionsCnae } from '@/json/cnae'
import { SellerData } from '../../../interface'
import Swal from 'sweetalert2'
import { useTenantData } from '@/context'
import { TranslateErrorMessage } from '@/utils/translateErrorMessage'
import { toast } from 'react-toastify'

interface IStep1 {
  Avançar: () => void
}

export function PJ({ Avançar }: IStep1) {
  const {
    register,
    setValue,
    formState: { errors, isValid: formIsValid },
    trigger,
    watch
  } = useFormContext()

  const navigate = useNavigate()
  const { dataUser } = useLogin();
  const { licensedId } = useLicensed();
  const tenantData = useTenantData();
  const [loading, setLoading] = useState(false);
  const [sellerData, setSellerData] = useState<SellerData | null>(null);
  const allFieldsFilled =
    !!watch('CNPJEstabelecimento') &&
    !!watch('RazaoSocialEstabelecimento') &&
    !!watch('NomeFantasiaEstabelecimento') &&
    !!watch('DataCriacaoEstabelecimento') &&
    !!watch('NascimentoSocio') &&
    !!watch('CPFEstabelecimento') &&
    !!watch('NomeSocioEstabelecimento') &&
    !!watch('EmailEstabelecimento') &&
    !!watch('AreaAtuacaoEstabelecimento') &&
    !!watch('TelefoneEstabelecimento')

  const handleAvancar = async () => {
    Avançar()
  }

  const handleLicenseddetail = () => {
    navigate('/sellers-la')
  }


  const areaAtuacaoValue = watch('AreaAtuacaoEstabelecimento');

  const handleSalvar = async () => {
    try {
      setLoading(true);

      const formatDate = (dateString: string) => {
        const [day, month, year] = dateString.split('/');
        return `${year}-${month}-${day}`;
      };

      const updatedData = {
        mcc: areaAtuacaoValue,
        company_name: watch('RazaoSocialEstabelecimento'),
        trading_name: watch('NomeFantasiaEstabelecimento'),
        opening_date: formatDate(watch('DataCriacaoEstabelecimento')),
        owner_birthday: formatDate(watch('NascimentoSocio')),
        owner_cpf: watch('CPFEstabelecimento'),
        owner_name: watch('NomeSocioEstabelecimento'),
        email: watch('EmailEstabelecimento'),
        phone: watch('TelefoneEstabelecimento'),
        document: watch('CNPJEstabelecimento'),
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
    }
  };


  const loadSellerDataFromSession = useCallback(() => {
    const sellerDataString = sessionStorage.getItem('dados-edit-la');
    if (sellerDataString) {
      const sellerData = JSON.parse(sellerDataString);
      setValue('EmailEstabelecimento', sellerData.email);
      setValue('CNPJEstabelecimento', sellerData.document);
      setValue('RazaoSocialEstabelecimento', sellerData.company_name);
      setValue('NomeFantasiaEstabelecimento', sellerData.trading_name);
      const dataCriacao = new Date(sellerData.opening_date).toLocaleDateString('pt-BR');
      setValue('DataCriacaoEstabelecimento', dataCriacao);
      const nascimentoSocio = new Date(sellerData.owner_birthday).toLocaleDateString('pt-BR');
      setValue('NascimentoSocio', nascimentoSocio);
      setValue('CPFEstabelecimento', sellerData.owner_cpf);
      setValue('TelefoneEstabelecimento', sellerData.phone);
      setValue('NomeSocioEstabelecimento', sellerData.owner_name);
      setValue('AreaAtuacaoEstabelecimento', sellerData.mcc);
    }
  }, [setValue]);

  useEffect(() => {
    loadSellerDataFromSession();
  }, [loadSellerDataFromSession]);

  if(loading){
    <Loading />
  }

  return (
    <>
      <ContainerStep>
        <ContextStepContainer>
          <ContextStep>
            <ContainerDados>
              <TitleStep>Dados do Licenciado</TitleStep>
            </ContainerDados>
            <Line />
            <ContainerForm>
              <ContainerInput>
                <LabelCustomInputMask
                  {...register('CNPJEstabelecimento')}
                  mask="99.999.999/9999-99"
                  placeholder="--.---.---/---.--"
                  hasError={!!errors.CNPJEstabelecimento}
                  label="CNPJ"
                />
                <CustomInput
                  {...register('RazaoSocialEstabelecimento')}
                  label="Razão Social"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.RazaoSocialEstabelecimento}
                />
                <LabelCustomInputMask
                  {...register('DataCriacaoEstabelecimento', {
                    validate: validateDataCriacao
                  })}
                  label="Data de Criação"
                  mask="99/99/9999"
                  placeholder="dd/mm/aaaa"
                  hasError={!!errors.DataCriacaoEstabelecimento}
                />
              </ContainerInput>

              <ContainerInput>
                <CustomInput
                  {...register('NomeFantasiaEstabelecimento')}
                  label="Nome Fantasia"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.NomeFantasiaEstabelecimento}
                />
                <LabelCustomInputMask
                  {...register('CPFEstabelecimento')}
                  label="CPF do Sócio"
                  mask="999.999.999-99"
                  placeholder="---.---.---.--"
                  hasError={!!errors.CPFEstabelecimento}
                />
                <LabelCustomInputMask
                  {...register('NascimentoSocio', {
                    validate: validateDataCriacao
                  })}
                  label="Nascimento Sócio"
                  mask="99/99/9999"
                  placeholder="dd/mm/aaaa"
                  hasError={!!errors.NascimentoSocio}
                />
              </ContainerInput>
              <ContainerInput>
                <CustomInput
                  {...register('NomeSocioEstabelecimento')}
                  label="Nome Completo do Sócio"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.NomeSocioEstabelecimento}
                />
                <LabelCustomInputMask
                  {...register('TelefoneEstabelecimento')}
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
              </ContainerInput>
              <ContainerInput2>
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
              </ContainerInput2>
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={handleLicenseddetail}>Cancelar</ButtonVoltar>
            <ButtonAvançar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={handleSalvar}>Salvar</ButtonAvançar>
            <ButtonAvançar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={handleAvancar}>
              Avançar
            </ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  )
}
