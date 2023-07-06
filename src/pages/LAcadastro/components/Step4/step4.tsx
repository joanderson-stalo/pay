import { ThemeColor } from '@/config/color'
import * as S from './styled'
import { CustomInput } from '@/components/Input/input'
import { useFormContext } from 'react-hook-form'
import { CustomSelect } from '@/components/Select/select'
import { optionsData } from '../Step1/option'
import { LabelCustomInputMask } from '@/components/CustomInputMask'

interface IStep5 {
  Avançar: () => void
  Voltar: () => void
}

export function Step4({ Avançar, Voltar }: IStep5) {
  const {
    register,
    setValue,
    formState: { errors },
    watch
  } = useFormContext()

  const allFieldsFilled =
    !!watch('Banco') &&
    !!watch('TipoDeConta') &&
    !!watch('Agência') &&
    !!watch('Conta') &&
    !!watch('CpfCnpj')

  const cpfOuCnpjValue = watch('CpfCnpj')

  const mask =
    cpfOuCnpjValue && cpfOuCnpjValue.length > 14
      ? '99.999.999/9999-99'
      : '999.999.999-99'

  return (
    <>
      <S.ContainerStep>
        <S.ContextStepContainer>
          <S.ContextStep>
            <S.TitleStep>Dados Bancários - F1</S.TitleStep>
            <S.Line />
            <S.ContainerForm>
              <S.ContainerInput>
                <S.Banco>
                  <CustomSelect
                    {...register('Banco', { required: true })}
                    label="Banco"
                    optionsData={optionsData}
                    placeholder={'oi'}
                    hasError={!!errors.Banco}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('Banco', selectedOption.value);
                    }}
                  />
                </S.Banco>

                <S.TipoConta>
                  <CustomSelect
                    {...register('TipoDeConta', { required: true })}
                    label="Tipo de Conta"
                    optionsData={optionsData}
                    placeholder={'oi'}
                    hasError={!!errors['Tipo de Conta']}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('TipoDeConta', selectedOption.value);
                    }}
                  />
                </S.TipoConta>
              </S.ContainerInput>
              <S.ContainerInput>
                <S.Agencia>
                  <CustomInput
                    {...register('Agência', { required: true })}
                    label="Agência"
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    placeholder={'oi'}
                    hasError={!!errors.Agência}
                    hasSuccess={false}
                  />
                </S.Agencia>
                <S.Conta>
                  <CustomInput
                    {...register('Conta', { required: true })}
                    label="Conta"
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    placeholder={'oi'}
                    hasError={!!errors.Conta}
                    hasSuccess={false}
                  />
                </S.Conta>
              </S.ContainerInput>
              <S.ContainerInput2>
                <LabelCustomInputMask
                  key={mask}
                  {...register('CpfCnpj', { required: true })}
                  label="CPF ou CNPJ"
                  mask={mask}
                  placeholder="--.---.---/---.--"
                  hasError={!!errors['CPF ou CNPJ']}
                />
              </S.ContainerInput2>
            </S.ContainerForm>
          </S.ContextStep>
          <S.ContainerButton>
            <S.ButtonVoltar onClick={Voltar}>Voltar</S.ButtonVoltar>
            <S.ButtonAvançar disabled={!allFieldsFilled} onClick={Avançar}>
              Finalizar{' '}
            </S.ButtonAvançar>
          </S.ContainerButton>
        </S.ContextStepContainer>
      </S.ContainerStep>
    </>
  )
}
