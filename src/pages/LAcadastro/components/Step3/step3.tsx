import { ThemeColor } from '@/config/color'
import {
  ButtonAdd,
  ButtonAvançar,
  ButtonRemover,
  ButtonVoltar,
  ContainerButton,
  ContainerForm,
  ContainerInput,
  ContainerInput2,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  Line,
  TitleStep,
  WInput
} from './styled'
import { CustomInput } from '@/components/Input/input'
import { useState } from 'react'
import * as Yup from 'yup'
import { useForm, useFormContext } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CustomSelect } from '@/components/Select/select'
import { optionsData } from '../Step1/option'

interface IStep3 {
  Avançar: () => void
  Voltar: () => void
}

export function Step3({ Avançar, Voltar }: IStep3) {
  const {
    register,
    setValue,
    formState: { errors },
    watch
  } = useFormContext()

  const allFieldsFilled =
    !!watch('licenciado') &&
    !!watch('RegraMarkup') 

  return (
    <ContainerStep>
      <ContextStepContainer>
        <ContextStep>
          <TitleStep>Comercial</TitleStep>
          <Line />
          <ContainerForm>
            <ContainerInput2>
              <CustomSelect
                {...register('licenciado')}
                label="Licenciado Autorizado"
                placeholder=''
                optionsData={optionsData}
                hasError={!!errors.licenciado}
                onChange={(selectedOption: { value: string }) => {
                  setValue('licenciado', selectedOption.value);
                }}
              />
              <button>Pesquise pelo nome do Licenciado</button>
            </ContainerInput2>
            <ContainerInput>
              <WInput>
                <CustomInput
                  {...register('RegraMarkup')}
                  label="Regra Markup"
                  placeholder=""
                  hasError={!!errors.Fornecedor}
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                />
              </WInput>

            </ContainerInput>





          </ContainerForm>
        </ContextStep>
        <ContainerButton>
          <ButtonVoltar onClick={Voltar}>Voltar</ButtonVoltar>
          <ButtonAvançar disabled={!allFieldsFilled} onClick={Avançar}>
            Avançar
          </ButtonAvançar>
        </ContainerButton>
      </ContextStepContainer>
    </ContainerStep>
  )
}
