import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Custom imports
import { ThemeColor } from '@/config/color';
import { CustomInput } from '@/components/Input/input';
import { CustomSelect } from '@/components/Select/select';
import { optionsData, yesOrNo } from '../../optionsData';
import { validationSchema } from './schema';
import { UserData } from '../../interface';
import InputMask from 'react-input-mask';

import master from './card/master.svg'
import elo from './card/elo.svg'
import visa from './card/visa.svg'
import diners from './card/diners.svg'
import hyper from './card/hyper.svg'


import {
  ButtonAvançar,
  ButtonGroup,
  ButtonVoltar,
  ContainerButton,
  ContainerForm,
  ContainerInput,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  Line,
  StyledTable,
  TableAndButtonsContainer,
  TitleStep,
} from './styled';
import { LabelCustomInputMask } from '@/components/CustomInputMask';

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


  const titulo = watch('Titulo');
  const descricao = watch('Descricao');
  const tipoDePlano = watch('TipoDePlano');
  const antecipacao = watch('Antecipacao');
  const taxaAntecipacao = watch('TaxaAntecipacao');


  const cardLogos: Record<string, string> = {
    'Master': master,
    'Visa': visa,
    'Elo': elo,
    'Diners': diners,
    'Hyper': hyper
  };




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

const isAllFieldsFilled = titulo && descricao && tipoDePlano && antecipacao && taxaAntecipacao && isTableValuesFilled;



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
                  <CustomInput
                    label="Breve Descrição"
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    {...register('Descricao')}
                    hasError={!!errors.Descricao}
                  />
                </ContainerInput>
                <ContainerInput>
                  <CustomSelect
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
              <ContainerForm>
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
              </ContainerForm>
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
  );
}
