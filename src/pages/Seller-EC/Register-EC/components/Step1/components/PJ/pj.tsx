
import { useFormContext } from 'react-hook-form'
import {
  ButtonAvançar,
  ButtonPF,
  ButtonPJ,
  ButtonVoltar,
  ContainerButton,
  ContainerDados,
  ContainerForm,
  ContainerInput,
  ContainerInput2,
  ContainerPJPF,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  Line,
  TitleStep
} from './styled'
import { CustomInput } from '@/components/Input/input'
import { LabelCustomInputMask } from '@/components/CustomInputMask'
import { validateCNPJ, validateCPF } from 'validations-br'
import { validateDataCriacao } from '@/utils/dataValid'
import { validateTelefone } from '@/utils/telefoneValid'
import { validateEmail } from '@/utils/validateEmail'
import { CustomSelect } from '@/components/Select/select'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loading } from '@/components/Loading/loading'
import { optionsCnae } from '@/json/cnae'
import { useTenantData } from '@/context'

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

  const handleEstabelecimentos = () => {
    navigate('/sellers-ec')
  }

  const cnpjValue = watch('CNPJEstabelecimento');
  const cpfValue = watch('CPFEstabelecimento');




  const fetchCompanyDataByCNPJ = async (cnpj: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://ws.hubdodesenvolvedor.com.br/v2/cnpj/?cnpj=${cnpj}&token=119905575VQLhxBIJgu216485880`);
      const { result } = response.data;
      if (result) {
        const { abertura, nome, fantasia } = result;
        if (abertura) setValue('DataCriacaoEstabelecimento', abertura);
        if (nome) setValue('RazaoSocialEstabelecimento', nome);
        if (fantasia) setValue('NomeFantasiaEstabelecimento', fantasia);
      }
    } catch (error) {

    } finally {
      setIsLoading(false);
    }
  };

  const fetchPersonDataByCPF = async (cpf: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://ws.hubdodesenvolvedor.com.br/v2/cpf/?cpf=${cpf}&token=119905575VQLhxBIJgu216485880`);
      const { result } = response.data;
      if (result) {
        const { nome_da_pf, data_nascimento } = result;
        if (nome_da_pf) setValue('NomeSocioEstabelecimento', nome_da_pf);
        if (data_nascimento) setValue('NascimentoSocio', data_nascimento);
      }
    } catch (error) {
    
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    if (validateCNPJ(cnpjValue)) {
      fetchCompanyDataByCNPJ(cnpjValue);
    }
  }, [cnpjValue]);

  useEffect(() => {
    if (validateCPF(cpfValue)) {
      fetchPersonDataByCPF(cpfValue.replace(/\D/g, ''));
    }
  }, [cpfValue]);

  const areaAtuacaoValue = watch('AreaAtuacaoEstabelecimento');

  const tenantData = useTenantData();

  return (
   <>
    {isLoading && <Loading />}

     <ContainerStep>
      <ContextStepContainer>
        <ContextStep>
          <ContainerDados>
            <TitleStep>Dados do Estabelecimento</TitleStep>
            <ContainerPJPF>
            <ButtonPJ active onClick={BPJ}>PJ</ButtonPJ>
            <ButtonPF active={false} onClick={BPF}>PF</ButtonPF>
            </ContainerPJPF>
          </ContainerDados>
          <Line />

          <ContainerForm>
            <ContainerInput>
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
                {...register('CPFEstabelecimento', { validate: validateCPF })}
                label="CPF Sócio"
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
          <ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={ handleEstabelecimentos} >Cancelar</ButtonVoltar>
          <ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={Avançar}>Avançar</ButtonAvançar>
        </ContainerButton>

      </ContextStepContainer>
    </ContainerStep>
   </>
  )
}
