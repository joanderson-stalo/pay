import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
} from './styled';
import { Loading } from '@/components/Loading/loading';
import { CustomSelect } from '@/components/Select/select';
import { optionsData } from './optionsData';
import { useLogin } from '@/context/user.login';
import { useFormContext } from 'react-hook-form';
import { CustomInput } from '@/components/Input/input';
import { ThemeColor } from '@/config/color';

interface IStep3 {
  Avançar: () => void;
  Voltar: () => void;
}

interface IOption {
  value: string;
  label: string;
}

export function Step3({ Avançar, Voltar }: IStep3) {
  const [dados, setDados] = useState(false);
  const [fetchedOptions, setFetchedOptions] = useState([]);
  const [acquires, setAcquires] = useState<IOption[]>([]);
  const [inputs, setInputs] = useState<{}[]>([{}]);
  const [selectedAcquires, setSelectedAcquires] = useState<string[]>([]);

  const { dataUser } = useLogin();

  const {
    register,
    setValue,
    unregister,
    formState: { errors },
    watch
  } = useFormContext();

  const allFieldsFilled =
    !!watch('licenciado')



    useEffect(() => {
      const fetchData = async () => {
        try {
          setDados(true);

          const response = await axios.get('https://api-pagueassim.stalopay.com.br/sellers/WL&LA?simplify=true', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${dataUser?.token}`
            }
          });

          const data = response.data;

          if (data && data.Sellers) {
            const options = data.Sellers.map((seller: { company_name: any; document: any; id: any }, index: number) => ({
              value: seller.id,
              label: `${seller.company_name}-${seller.document}`
            }));

            setFetchedOptions(options);
          }
        } catch (error) {
          console.error('Houve um erro ao buscar os dados:', error);
        } finally {
          setDados(false);
        }
      };

      fetchData();
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
                  {...register('licenciado')}
                  label="Licenciado Autorizado"
                  optionsData={{ options: fetchedOptions }}
                  hasError={!!errors.licenciado}
                  onChange={(selectedOption: { value: string }) => {
                    setValue('licenciado', selectedOption.value);
                  }} />
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
    </>
  );
}
