import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  ButtonAvançar,
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
import { Loading } from '@/components/Loading/loading'
import { CustomSelect } from '@/components/Select/select'
import { useLogin } from '@/context/user.login'
import { useFormContext } from 'react-hook-form'
import { LabelCustomInputMask } from '@/components/CustomInputMask'
import { baseURL } from '@/service/api'
import { useTenantData } from '@/context'

interface IStep3 {
  Avançar: () => void
  Voltar: () => void
}

interface IOption {
  value: string
  label: string
}

export function Step3({ Avançar, Voltar }: IStep3) {
  const [dados, setDados] = useState(false)
  const [fetchedOptions, setFetchedOptions] = useState<IOption[]>([]);


  const { dataUser } = useLogin()

  const {
    register,
    setValue,
    formState: { errors },
    watch
  } = useFormContext()

  const allFieldsFilled = !!watch('licenciado')

  useEffect(() => {
    setDados(true);
    axios.get(`${baseURL}seller/indexla`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dataUser?.token}`
      }
    })
      .then(response => {

        const data = response.data;

        if (data && data.sellers) {
          const options = data.sellers.map((seller: { trading_name: any; type: any; id: any, document: any }, index: number) => ({
            value: seller.id,
            label: `${seller.trading_name}-${seller.type}-${seller.document}`
          }));

          setFetchedOptions(options);
        }
        setDados(false);
      })
      .catch(error => {

      });
  }, []);

  const licenciadoValue = watch('licenciado');
  const selectedOption = fetchedOptions.find(option => option.value === licenciadoValue);

  const tenantData = useTenantData();


  return (
    <>
      {dados && <Loading />}
      <ContainerStep>
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Comercial</TitleStep>
            <Line />
            <ContainerForm>
              <ContainerInput2>
                <CustomSelect
                  placeholder='-'
                  {...register('licenciado')}
                  value={selectedOption || {value: '', label: ''}}

                  label="Licenciado Autorizado"
                  optionsData={{ options: fetchedOptions }}
                  hasError={!!errors.licenciado}
                  onChange={(selectedOption: { value: string }) => {
                    setValue('licenciado', selectedOption.value)
                  }}
                />
                <button>Pesquise pelo nome do Licenciado</button>
              </ContainerInput2>

              <ContainerInput>
                <WInput>

                    <LabelCustomInputMask
    placeholder="Regra Markup %"
    label="Regra Markup"
    mask='99,99 %'
    {...register('RegraMarkup')}
    hasError={!!errors.TaxaAntecipacao}
  />
                </WInput>

              </ContainerInput>

            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={Voltar}>Voltar</ButtonVoltar>
            <ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={Avançar}>
              Avançar
            </ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  )
}
