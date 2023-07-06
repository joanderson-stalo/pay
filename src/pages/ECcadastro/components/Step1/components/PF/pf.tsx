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

interface IStep1 {
  Avançar: () => void
  BPJ: () => void
  BPF: () => void
}

export function PF({ Avançar, BPF, BPJ }: IStep1) {
  const {
    register,
    setValue,
    formState: { errors, isValid: formIsValid },
    trigger,
    watch
  } = useFormContext()

  const allFieldsFilled =
    !!watch('NomeFantasiaEstabelecimento') &&
    !!watch('DataCriacaoEstabelecimento') &&
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

  return (
    <S.ContainerStep>
      <S.ContextStepContainer>
        <S.ContextStep>
          <S.ContainerDados>
            <S.TitleStep>Dados do Estabelecimento</S.TitleStep>
            <S.ContainerPJPF>
            <S.ButtonPJ active={false} onClick={BPJ}>PJ</S.ButtonPJ>
            <S.ButtonPF active onClick={BPF}>PF</S.ButtonPF>
            </S.ContainerPJPF>
          </S.ContainerDados>
          <S.Line />
          <S.ContainerForm>
            <S.ContainerInput>
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
            </S.ContainerInput>
            <S.ContainerInput>
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
            <S.ContainerInput2>
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
            </S.ContainerInput2>
          </S.ContainerForm>
        </S.ContextStep>
        <S.ButtonAvançar disabled={!allFieldsFilled} onClick={handleAvancar}>
          Avançar
        </S.ButtonAvançar>
      </S.ContextStepContainer>
    </S.ContainerStep>
  )
}
