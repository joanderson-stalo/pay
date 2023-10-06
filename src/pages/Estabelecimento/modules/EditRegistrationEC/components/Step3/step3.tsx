import { useEffect, useState } from 'react'
import axios from 'axios'
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
import { Loading } from '@/components/Loading/loading'
import { CustomSelect } from '@/components/Select/select'
import { optionsData } from './optionsData'
import { useLogin } from '@/context/user.login'
import { CustomInput } from '@/components/Input/input'
import { ThemeColor } from '@/config/color'
import { useForm } from 'react-hook-form'



export function Step3() {
  const [dados, setDados] = useState(false)
  const [fetchedOptions, setFetchedOptions] = useState([])

  const { dataUser } = useLogin()

  const {
    register,
    setValue,
    formState: { errors },
    watch,
    handleSubmit
  } = useForm({
    mode: 'onChange'
  });

  const allFieldsFilled = !!watch('licenciado') && !!watch('RegraMarkup');


  useEffect(() => {
    setDados(true);
    axios.get('https://api-pagueassim.stalopay.com.br/seller/indexla', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dataUser?.token}`
      }
    })
      .then(response => {

        const data = response.data;

        if (data && data.sellers) {
          console.log(data.sellers.trading_name)
          const options = data.sellers.map((seller: { trading_name: any; type: any; id: any, cnpj_cpf: any }, index: number) => ({
            value: seller.id,
            label: `${seller.trading_name}-${seller.type}-${seller.cnpj_cpf}`
          }));

          setFetchedOptions(options);
        }
        setDados(false);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados:', error);
      });
  }, []);

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
                  <CustomInput
                    {...register('RegraMarkup')}
                    label="Regra Markup"
                    placeholder="Regra Markup %"
                    hasError={!!errors.Fornecedor}
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                  />
                </WInput>
              </ContainerInput>
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonAvançar disabled={!allFieldsFilled}>
              Salvar
            </ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  )
}
