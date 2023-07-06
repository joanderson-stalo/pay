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
  const [adicionar, setAdcionar] = useState(false)
  const [adicionarOutro, setAdcionarOutro] = useState(false)
  const {
    register,
    setValue,
    formState: { errors },
    watch
  } = useFormContext()

  const allFieldsFilled =
    !!watch('licenciado') &&
    !!watch('Fornecedor') &&
    !!watch('PlanoComercial')

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
                <CustomSelect
                  {...register('Fornecedor')}
                  label="Fornecedor"
                  placeholder="oi"
                  hasError={!!errors.Fornecedor}
                  optionsData={optionsData}
                  onChange={(selectedOption: { value: string }) => {
                    setValue('Fornecedor', selectedOption.value);
                  }}
                />
              </WInput>

              <WInput>
                <CustomSelect
                  {...register('PlanoComercial')}
                  label="Plano Comercial"
                  optionsData={optionsData}
                  placeholder="oi"
                  hasError={!!errors.PlanoComercial}
                  onChange={(selectedOption: { value: string }) => {
                    setValue('PlanoComercial', selectedOption.value);
                  }}
                />
              </WInput>

              {!adicionar && (
                <ButtonAdd onClick={() => setAdcionar(true)}>
                  Adicionar outro
                </ButtonAdd>
              )}
            </ContainerInput>

            {adicionar && (
              <ContainerInput>
                <WInput>
                  <CustomSelect
                    {...register('Fornecedor')}
                    label="Fornecedor"
                    placeholder="oi"
                    hasError={!!errors.Fornecedor}
                    optionsData={optionsData}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('Fornecedor', selectedOption.value);
                    }}
                  />
                </WInput>

                <WInput>
                  <CustomSelect
                    {...register('PlanoComercial')}
                    label="Plano Comercial"
                    optionsData={optionsData}
                    placeholder="oi"
                    hasError={!!errors.PlanoComercial}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('PlanoComercial', selectedOption.value);
                    }}
                  />
                </WInput>
                {!adicionarOutro && (
                  <>
                    <ButtonRemover onClick={() => setAdcionar(false)}>
                      Remover
                    </ButtonRemover>
                    <ButtonAdd  onClick={() => setAdcionarOutro(true)}>Adicionar outro</ButtonAdd>
                  </>
                )}
              </ContainerInput>
            )}


            {adicionarOutro && (
              <ContainerInput>
                <WInput>
                  <CustomSelect
                    {...register('Fornecedor')}
                    label="Fornecedor"
                    placeholder="oi"
                    hasError={!!errors.Fornecedor}
                    optionsData={optionsData}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('Fornecedor', selectedOption.value);
                    }}
                  />
                </WInput>

                <WInput>
                  <CustomSelect
                    {...register('PlanoComercial')}
                    label="Plano Comercial"
                    optionsData={optionsData}
                    placeholder="oi"
                    hasError={!!errors.PlanoComercial}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('PlanoComercial', selectedOption.value);
                    }}
                  />
                </WInput>
                {adicionarOutro && (
                  <>
                    <ButtonRemover onClick={() => setAdcionarOutro(false)}>
                      Remover
                    </ButtonRemover>
                    <ButtonAdd  onClick={() => setAdcionarOutro(true)}>Adicionar outro</ButtonAdd>
                  </>
                )}
              </ContainerInput>
            )}
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
