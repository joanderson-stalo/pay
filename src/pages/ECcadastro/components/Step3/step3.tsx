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
import { useLogin } from '@/context/user.login';
import { useFormContext } from 'react-hook-form';
import { baseURL } from '@/config/color';

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
  const [fetchedOptions, setFetchedOptions] = useState<IOption[]>([]);
  const [acquires, setAcquires] = useState<IOption[]>([]);
  const [inputs, setInputs] = useState<{}[]>([{}]);
  const [commercialPlans, setCommercialPlans] = useState<IOption[]>([]);

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
    !!watch('licenciado') &&
    inputs.every((_, index) => !!watch(`Fornecedor${index}`) && !!watch(`PlanoComercial${index}`));

  const handleAcquireChange = (selectedOption: { value: string }, index: number) => {
    setValue(`Fornecedor${index}`, selectedOption.value);

    const updatedAcquires = [...selectedAcquires];
    updatedAcquires[index] = selectedOption.value;
    setSelectedAcquires(updatedAcquires);
  };

  const addInput = () => {
    if (inputs.length < acquires.length) {
      const newIndex = inputs.length;
      setInputs(prevInputs => [...prevInputs, {}]);

      setValue(`Fornecedor${newIndex}`, undefined);
      setValue(`PlanoComercial${newIndex}`, undefined);
    }
  };



  const removeInput = (indexToRemove: number) => {
    setInputs(prevInputs => {
      const newInputs = [...prevInputs];
      newInputs.splice(indexToRemove, 1);

      const updatedAcquires = [...selectedAcquires];
      updatedAcquires.splice(indexToRemove, 1);
      setSelectedAcquires(updatedAcquires);

      const removedFields = [`Fornecedor${indexToRemove}`, `PlanoComercial${indexToRemove}`];
      removedFields.forEach(field => {
        unregister(field);
      });;

      return newInputs;
    });
  };

  const renderInputs = (index: number) => {
    const fornecedorValue = watch(`Fornecedor${index}`);
    const selectedFornecedor = acquires.find(option => option.value === fornecedorValue);

    const planoComercialValue = watch(`PlanoComercial${index}`);
    const selectedPlanoComercial = commercialPlans.find(option => option.value === planoComercialValue);

    const availableAcquires = acquires.filter(
      option => !selectedAcquires.includes(option.value)
    );

    const removeButton = index !== 0 && (
      <ButtonRemover onClick={() => removeInput(index)}>Remover</ButtonRemover>
    );

    const isLastInput = index === inputs.length - 1;
    const addButton = isLastInput && inputs.length !== acquires.length && (
      <ButtonAdd onClick={addInput}>Adicionar outro</ButtonAdd>
    );

    return (
      <ContainerInput key={index}>
        <WInput>
          <CustomSelect
            {...register(`Fornecedor${index}`)}
            label="Fornecedor"
            value={selectedFornecedor || {value: '', label: ''}}
            placeholder=""
            hasError={!!errors[`Fornecedor${index}`]}
            optionsData={{ options: availableAcquires }}
            onChange={(selectedOption: { value: string }) => handleAcquireChange(selectedOption, index)}
          />
        </WInput>
        <WInput>
          <CustomSelect
            {...register(`PlanoComercial${index}`)}
            label="Plano Comercial"
            value={selectedPlanoComercial || {value: '', label: ''}}
            optionsData={{ options: commercialPlans }}
            placeholder=""
            hasError={!!errors[`PlanoComercial${index}`]}
            onChange={(selectedOption: { value: string }) => {
              setValue(`PlanoComercial${index}`, selectedOption.value);
            }}
          />
        </WInput>

        {removeButton}
        {addButton}
      </ContainerInput>
    );
  };

  const renderAllInputs = () => {
    return inputs.map((_, index) => renderInputs(index));
  };


  useEffect(() => {
    setDados(true);
    axios
      .get(`${baseURL}acquire/index`, {

        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      })
      .then((response) => {
        const numberOfAcquiresFields = Object.keys(watch()).filter(key => key.startsWith("Fornecedor")).length;

        if (numberOfAcquiresFields > 0) {
          setInputs(new Array(numberOfAcquiresFields).fill({}));
        }

        const data = response.data;
        if (data && data.acquires) {
          const options = data.acquires.map((acquire: { id: any; acquire_label: any }) => ({
            value: acquire.id,
            label: acquire.acquire_label,
          }));
          setAcquires(options);
        }
        setDados(false);
      })
      .catch((error) => {
        console.error('Houve um erro ao buscar os dados:', error);
        setDados(false);
      });
  }, []);

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


  useEffect(() => {
    if (selectedAcquires.length > 0) {
      const selectedAcquire = selectedAcquires[0];
      setDados(true);
      axios.get(`${baseURL}plan/commercial/${selectedAcquire}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      })
      .then(response => {
        const data = response.data;
        if (data && data.plans) {
          const options = data.plans.map((plan: { id: any; name: any; }) => ({
            value: plan.id,
            label: plan.name
          }));
          setCommercialPlans(options);
        }
        setDados(false);
      })
      .catch(error => {
        console.error(`Houve um erro ao buscar os dados para o fornecedor ${selectedAcquire}:`, error);
        setDados(false);
      });
    }
  }, [selectedAcquires]);
  
  
  
  

  const licenciadoValue = watch('licenciado');
  const selectedOption = fetchedOptions.find(option => option.value === licenciadoValue);





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
                  value={selectedOption || {value: '', label: ''}}
                  optionsData={{ options: fetchedOptions }}
                  hasError={!!errors.licenciado}
                  onChange={(selectedOption: { value: string }) => {
                    setValue('licenciado', selectedOption.value);
                  }} />
                <button>Pesquise pelo nome do Licenciado</button>
              </ContainerInput2>

              {renderAllInputs()}
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
