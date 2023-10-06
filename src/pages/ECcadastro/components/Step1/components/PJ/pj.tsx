import { ThemeColor } from '@/config/color'
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
import { optionsData } from './option'
import { useNavigate } from 'react-router-dom'

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
    navigate('/estabelecimentos')
  }

  return (
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
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.RazaoSocialEstabelecimento}
              />
            </ContainerInput>
            <ContainerInput>
              <CustomInput
                {...register('NomeFantasiaEstabelecimento')}
                label="Nome Fantasia"
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.NomeFantasiaEstabelecimento}
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

              <LabelCustomInputMask
                {...register('CPFEstabelecimento', { validate: validateCPF })}
                label="CPF"
                mask="999.999.999-99"
                placeholder="---.---.---.--"
                hasError={!!errors.CPFEstabelecimento}
              />
              <CustomInput
                {...register('NomeSocioEstabelecimento')}
                label="Nome Completo do Sócio"
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.NomeSocioEstabelecimento}
              />
            </ContainerInput>
            <ContainerInput>
            <LabelCustomInputMask
                {...register('NascimentoSocio', {
                  validate: validateDataCriacao
                })}
                label="Nascimento Sócio"
                mask="99/99/9999"
                placeholder="dd/mm/aaaa"
                hasError={!!errors.NascimentoSocio}
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
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.EmailEstabelecimento}
              />
            </ContainerInput>
            <ContainerInput2>
              <CustomSelect
                optionsData={optionsData}
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
          <ButtonVoltar onClick={ handleEstabelecimentos} >Cancelar</ButtonVoltar>
          <ButtonAvançar disabled={!allFieldsFilled} onClick={Avançar}>Avançar</ButtonAvançar>
        </ContainerButton>
      </ContextStepContainer>
    </ContainerStep>
  )
}
