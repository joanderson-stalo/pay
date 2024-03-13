import  { useCallback, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ThemeColor, baseURL } from '@/config/color';
import { CustomInput } from '@/components/Input/input';
import { CustomSelect } from '@/components/Select/select';
import { optionsData, yesOrNo } from '../../optionsData';
import { validationSchema } from './schema';
import { UserData } from '../../interface';
import InputMask from 'react-input-mask';

import master from '@/assets/Card/master.svg'
import elo from '@/assets/Card/elos.svg'
import visa from '@/assets/Card/visas.svg'
import diners from '@/assets/Card/dinerss.svg'
import hyper from '@/assets/Card/hypers.svg'


import {
  ButtonAvançar,
  ButtonBlack,
  ButtonGroup,
  ButtonVoltar,
  ContainerButton,
  ContainerButtonBlack,
  ContainerForm,
  ContainerForm2,
  ContainerInput,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  Line,
  StyledTable,
  TableAndButtonsContainer,
  Title,
  TitleStep,
} from './styled';
import { LabelCustomInputMask } from '@/components/CustomInputMask';
import { CaretLeft } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLogin } from '@/context/user.login';

interface ICreateUser {
  Voltar: () => void;
  onSubmitData: (data: UserData) => void;
}

export function CreatePlans({ Voltar, onSubmitData }: ICreateUser) {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { register, handleSubmit, setValue, watch, formState: { errors } } = methods;

  const [showTaxaAntecipacao, setShowTaxaAntecipacao] = useState(false);
  const [fetchedOptionsFN, setFetchedOptionsFN] = useState([]);
  const { dataUser } = useLogin();


  const titulo = watch('Titulo');
  const fornecedor = watch('Fornecedor');
  const tipoDePlano = watch('TipoDePlano');
  const antecipacao = watch('Antecipacao');
  const taxaAntecipacao = watch('TaxaAntecipacao');
  const planoBase = watch('PlanoBase');


  const cardLogos: Record<string, string> = {
    'Master': master,
    'Visa': visa,
    'Elo': elo,
    'Diners': diners,
    'Hyper': hyper
  };

  const fetchDataFN = useCallback(async () => {
    try {
      const response = await axios.get(`${baseURL}acquire/index`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data;
      const options = data.acquires.map((acquire: { acquire_label: any; id: { toString: () => any; }; }) => ({
        label: acquire.acquire_label,
        value: acquire.id.toString() 
      }));
      setFetchedOptionsFN(options);
    } catch (error) {
      console.error('Houve um erro ao buscar os dados:', error);
    }
  }, [dataUser?.token]); 

  useEffect(() => {
    fetchDataFN();
  }, [fetchDataFN]);


  const onSubmit = (data: UserData) => {
    if (!isTableValuesFilled) {
      alert('Preencha todos os valores da tabela antes de enviar o formulário.');
      return;
    }
    const processedData = {
      ...data,
      tableValues,
    };
    onSubmitData(processedData);
  };


  const [selectedTableType, setSelectedTableType] = useState<string>("Padrão");
  const tableTypes = ["Padrão", "Master", "Visa", "Elo", "Hyper", "Diners"];

  const initialTableValues: Record<string, Record<string, { MDR: string, Total: string }>> = {};

  tableTypes.forEach(tableType => {
    initialTableValues[tableType] = {};
    ["Débito", "Crédito à vista", "Parcelado 2x", "Parcelado 3x", "Parcelado 4x", "Parcelado 5x", "Parcelado 6x", "Parcelado 7x", "Parcelado 8x", "Parcelado 9x", "Parcelado 10x"].forEach(forma => {
      initialTableValues[tableType][forma] = { MDR: '', Total: '' };
    });
  });

  const [tableValues, setTableValues] = useState<Record<string, Record<string, { MDR: string, Total: string }>>>(initialTableValues);


  const formatToPercentage = (value: string | number): string => {
    const numericValue = parseFloat(String(value));

    if (numericValue >= 0 && numericValue <= 100) {
      return `${numericValue.toFixed(2)}%`;
    }
    return '';
  }


  const handleInputChange = (tableType: string, forma: string, key: 'MDR' | 'Total', value: string) => {
    const formattedValue = formatToPercentage(value);

    const newValues = {
      ...tableValues,
      [tableType]: {
        ...tableValues[tableType],
        [forma]: {
          ...tableValues[tableType]?.[forma],
          [key]: formattedValue,
        },
      },
    };

    if (tableType === "Padrão") {
      tableTypes.forEach(type => {
        newValues[type] = {
          ...newValues[type],
          [forma]: {
            ...newValues[type]?.[forma],
            [key]: formattedValue,
          },
        };
      });
    }

    setTableValues(newValues);
  };



  const isTableValuesFilled = Object.keys(tableValues).every((tableType) =>
  Object.keys(tableValues[tableType]).every((forma) =>
    tableValues[tableType][forma].MDR && tableValues[tableType][forma].Total
  )
);

const isAllFieldsFilled = titulo && planoBase && fornecedor && tipoDePlano && antecipacao && taxaAntecipacao && isTableValuesFilled;

const navigate = useNavigate()

const handlePlans = () => {
  navigate('/plans')
}






  const renderTable = (tableType: string) => {
    return (
      <StyledTable>
        <thead>
          <tr>
            <th>Forma de Pagamento</th>
            <th>MDR</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            ["Débito", "Crédito à vista", "Parcelado 2x", "Parcelado 3x", "Parcelado 4x", "Parcelado 5x", "Parcelado 6x", "Parcelado 7x", "Parcelado 8x", "Parcelado 9x", "Parcelado 10x"].map(forma => (
              <tr key={forma}>
                <td>{forma}</td>
                <td>
                <InputMask
  mask="99,99 %"
  placeholder="%"
  value={tableValues[tableType]?.[forma]?.MDR || ''}
  onChange={e => handleInputChange(tableType, forma, 'MDR', e.target.value)}
/>

</td>
<td>
<InputMask
  mask="99,99 %"
  placeholder="%"
  value={tableValues[tableType]?.[forma]?.Total || ''}
  onChange={e => handleInputChange(tableType, forma, 'Total', e.target.value)}
/>

</td>

              </tr>
            ))
          }
        </tbody>
      </StyledTable>
    );
  };

  return (
 <>
   <ContainerButtonBlack>
    <ButtonBlack><CaretLeft size={18} />Voltar</ButtonBlack>
    <Title>Adicionar Plano</Title>
    </ContainerButtonBlack>
    <FormProvider {...methods}>
  
    

      <form onSubmit={handleSubmit(onSubmit)}>
        <ContainerStep>

          <ContextStepContainer>
            
            <ContextStep>
              <TitleStep>Dados do Plano</TitleStep>
              <Line />
              <ContainerForm>
                <ContainerInput>
                  <CustomInput
                    label="Título"
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    {...register('Titulo')}
                    hasError={!!errors.Titulo}
                  />
                              <CustomSelect {...register("Fornecedor")} optionsData={{ options: fetchedOptionsFN }} placeholder="Clique" label="Fornecedor"   onChange={(selectedOption: { value: string }) => {
    setValue('Fornecedor', selectedOption.value)
  }}
/>
<CustomSelect {...register("PlanoBase")} optionsData={{ options: fetchedOptionsFN }} placeholder="Clique " label="Plano Base"   onChange={(selectedOption: { value: string }) => {
    setValue('PlanoBase', selectedOption.value)
  }}
/>
                </ContainerInput>
                <ContainerInput>
                  <CustomSelect
                    placeholder='Clique'
                    label="Tipo de Plano"
                    optionsData={optionsData}
                    {...register('TipoDePlano')}
                    onChange={(selectedOption: { value: string, label: string }) => {
                      setValue('TipoDePlano', selectedOption);
                    }}
                  />
               <CustomSelect
  label="Com antecipação?"
  placeholder=''
  optionsData={yesOrNo}
  {...register('Antecipacao')}
  onChange={(selectedOption: { value: string, label: string }) => {
    setValue('Antecipacao', selectedOption);
    setShowTaxaAntecipacao(selectedOption.value === '1');
  }}
/>
{showTaxaAntecipacao && (
  <LabelCustomInputMask
    placeholder=''
    label="Taxa antecipação"
    mask='99,99 %'
    {...register('TaxaAntecipacao')}
    hasError={!!errors.TaxaAntecipacao}
  />
)}

                </ContainerInput>
              </ContainerForm>
            </ContextStep>
          </ContextStepContainer>
        </ContainerStep>

        <ContainerStep>
          
          <ContextStepContainer>
            <ContextStep>
              <TitleStep>Taxas do Plano</TitleStep>
              <Line />
              <ContainerForm2>
                <TableAndButtonsContainer>
                <ButtonGroup>
  {tableTypes.map(type => (
    <button
      key={type}
      type='button'
      onClick={() => setSelectedTableType(type)}
      className={selectedTableType === type ? 'selected' : 'not-selected'}
    >
      {cardLogos[type] ? <img src={cardLogos[type]} alt={type} /> : type}
    </button>
  ))}
</ButtonGroup>




                  {renderTable(selectedTableType)}
                </TableAndButtonsContainer>
              </ContainerForm2>
            </ContextStep>
            <ContainerButton>
              <ButtonVoltar onClick={Voltar}>Cancelar</ButtonVoltar>
              <ButtonAvançar type="submit" disabled={!isAllFieldsFilled}>
                Salvar
              </ButtonAvançar>
            </ContainerButton>
          </ContextStepContainer>
        </ContainerStep>
      </form>
    </FormProvider>
 </>
  );
}
