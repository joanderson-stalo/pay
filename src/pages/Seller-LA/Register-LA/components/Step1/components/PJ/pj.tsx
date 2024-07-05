
import { useFormContext } from 'react-hook-form'
import * as S from './styled'
import { CustomInput } from '@/components/Input/input'
import { LabelCustomInputMask } from '@/components/CustomInputMask'
import { validateCNPJ, validateCPF } from 'validations-br'
import { validateDataCriacao } from '@/utils/dataValid'
import { validateTelefone } from '@/utils/telefoneValid'
import { validateEmail } from '@/utils/validateEmail'
import { CustomSelect } from '@/components/Select/select'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { Loading } from '@/components/Loading/loading'
import { optionsCnae } from '@/json/cnae'
import { useTenantData } from '@/context'
import { TranslateErrorMessage } from '@/utils/translateErrorMessage'
import { toast } from 'react-toastify'

interface IStep1 {
  Avançar: () => void
  BPJ: () => void
  BPF: () => void
}

export function PJ({ Avançar, BPF, BPJ }: IStep1) {
  const {
    register,
    setValue,
    formState: { errors, isValid: formIsValid },
    trigger,
    watch
  } = useFormContext()

  const [isLoading, setIsLoading] = useState(false)

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
    const result = await trigger()
    if (
      result &&
      !errors.CNPJEstabelecimento &&
      !errors.CPFEstabelecimento &&
      allFieldsFilled &&
      formIsValid
    ) {
      Avançar()
    }
  }

  const navigate = useNavigate()

  const handleLicenciado = () => {
    navigate('/sellers-la')
  }



  const cnpjValue = watch('CNPJEstabelecimento');
  const cpfValue = watch('CPFEstabelecimento');




  const fetchCompanyDataByCNPJ = async (cnpj: string) => {
    try {
      setIsLoading(true)
      const response = await axios.get(`https://ws.hubdodesenvolvedor.com.br/v2/cnpj/?cnpj=${cnpj}&token=YOUR_TOKEN`);
      const { result } = response.data;
      const { abertura, nome, fantasia } = result;

      setValue('DataCriacaoEstabelecimento', abertura);
      setValue('RazaoSocialEstabelecimento', nome);
      setValue('NomeFantasiaEstabelecimento', fantasia);

    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally {
      setIsLoading(false)
    }
  };

  const fetchPersonDataByCPF = async (cpf: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://ws.hubdodesenvolvedor.com.br/v2/cpf/?cpf=${cpf}&token=119905575VQLhxBIJgu216485880`);

      const { result } = response.data;
      const { nome_da_pf, data_nascimento } = result;

      setValue('NomeSocioEstabelecimento', nome_da_pf);
      setValue('NascimentoSocio', data_nascimento);

    } catch (error) {

    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    const shouldFetchCNPJData = validateCNPJ(cnpjValue)

    if (shouldFetchCNPJData) {
      fetchCompanyDataByCNPJ(cnpjValue);
    }
  }, [cnpjValue]);

  useEffect(() => {

    const cleanedCPF = (cpfValue || '').replace(/\D/g, '');
    const shouldFetchCPFData = validateCPF(cleanedCPF) && !watch('NomeSocioEstabelecimento');

    if (shouldFetchCPFData) {
      fetchPersonDataByCPF(cleanedCPF);
    }
  }, [cpfValue, watch('NomeSocioEstabelecimento')]);




  const areaAtuacaoValue = watch('AreaAtuacaoEstabelecimento');

  const tenantData = useTenantData();


  return (


    <>

    {isLoading && <Loading />}



      <S.ContainerStep>
      <S.ContextStepContainer>
        <S.ContextStep>
          <S.ContainerDados>
            <S.TitleStep>Dados do Licenciado</S.TitleStep>
            <S.ContainerPJPF>
              <S.ButtonPJ active onClick={BPJ}>PJ</S.ButtonPJ>
              <S.ButtonPF active={false} onClick={BPF}>PF</S.ButtonPF>
            </S.ContainerPJPF>
          </S.ContainerDados>
          <S.Line />

          <S.ContainerForm>
            <S.ContainerInput>
              <LabelCustomInputMask
                {...register('CNPJEstabelecimento', { validate: validateCNPJ })}
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
            </S.ContainerInput>


            <S.ContainerInput>
              <CustomInput
                {...register('NomeFantasiaEstabelecimento')}
                label="Nome Fantasia"
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}
                hasError={!!errors.NomeFantasiaEstabelecimento}
              />

<LabelCustomInputMask
                {...register('CPFEstabelecimento', { validate: validateCPF })}
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

            </S.ContainerInput>

            <S.ContainerInput>




              <CustomInput
                {...register('NomeSocioEstabelecimento')}
                label="Nome completo do Sócio"
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
          <S.ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={handleLicenciado}>Cancelar</S.ButtonVoltar>
          <S.ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={handleAvancar}>Avançar</S.ButtonAvançar>
        </S.ContainerButton>
      </S.ContextStepContainer>
    </S.ContainerStep>



    </>

  )
}
