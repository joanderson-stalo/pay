import { ThemeColor } from '@/config/color'
import { useFormContext } from 'react-hook-form'
import * as S from './styled'
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

export function PF({ Avançar, BPF, BPJ }: IStep1) {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors, isValid: formIsValid },
    trigger,
    watch
  } = useFormContext()

  const allFieldsFilled =
    !!watch('NomeFantasiaEstabelecimento') &&
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


  const handleLicenseddetail = () => {
    navigate('/licenseddetail')
  }

  return (
    <S.ContainerStep>
      <S.ContextStepContainer>
        <S.ContextStep>
          <S.ContainerDados>
            <S.TitleStep>Dados do Licenciado</S.TitleStep>
            <S.ContainerPJPF>
            <S.ButtonPJ active={false} onClick={BPJ}>PJ</S.ButtonPJ>
            <S.ButtonPF active onClick={BPF}>PF</S.ButtonPF>
            </S.ContainerPJPF>
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
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
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
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.EmailEstabelecimento}
              />

            </S.ContainerInput>

          </S.ContainerForm>
        </S.ContextStep>
        <S.ContainerButton>
        <S.ButtonVoltar >Cancelar</S.ButtonVoltar>
          <S.ButtonAvançar disabled={!allFieldsFilled} onClick={Avançar}>Salvar</S.ButtonAvançar>
        <S.ButtonAvançar disabled={!allFieldsFilled} onClick={handleAvancar}>
          Avançar
        </S.ButtonAvançar>
        </S.ContainerButton>
      </S.ContextStepContainer>
    </S.ContainerStep>
  )
}
