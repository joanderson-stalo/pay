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
import { useTenantData } from '@/context';

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
  const [inputs, setInputs] = useState<{}[]>(JSON.parse(sessionStorage.getItem('inputs') || '[{}]'));
  const [commercialPlans, setCommercialPlans] = useState<IOption[]>([]);
  const [selectedAcquires, setSelectedAcquires] = useState<string[]>(JSON.parse(sessionStorage.getItem('selectedAcquires') || '[]'));
  const [selectedPlans, setSelectedPlans] = useState<string[]>(JSON.parse(sessionStorage.getItem('selectedPlans') || '[]'));

  const { dataUser } = useLogin();
  const { register, setValue, unregister, formState: { errors }, watch } = useFormContext();
  const tenantData = useTenantData();

  const allFieldsFilled = !!watch('licenciado') && inputs.every((_, index) => !!watch(`Fornecedor${index}`) && !!watch(`PlanoComercial${index}`));

  const handleAcquireChange = (selectedOption: { value: string }, index: number) => {
    setValue(`Fornecedor${index}`, selectedOption.value);
    const updatedAcquires = [...selectedAcquires];
    updatedAcquires[index] = selectedOption.value;
    setSelectedAcquires(updatedAcquires);
    sessionStorage.setItem('selectedAcquires', JSON.stringify(updatedAcquires));
  };

  const handlePlanChange = (selectedOption: { value: string }, index: number) => {
    setValue(`PlanoComercial${index}`, selectedOption.value);
    const updatedPlans = [...selectedPlans];
    updatedPlans[index] = selectedOption.value;
    setSelectedPlans(updatedPlans);
    sessionStorage.setItem('selectedPlans', JSON.stringify(updatedPlans));
  };

  const addInput = () => {
    if (inputs.length < acquires.length) {
      const newInputs = [...inputs, {}];
      setInputs(newInputs);
      setSelectedAcquires(prev => [...prev, ""]);
      setSelectedPlans(prev => [...prev, ""]);
      sessionStorage.setItem('inputs', JSON.stringify(newInputs));
      sessionStorage.setItem('selectedAcquires', JSON.stringify([...selectedAcquires, ""]));
      sessionStorage.setItem('selectedPlans', JSON.stringify([...selectedPlans, ""]));
    }
  };

  const removeInput = (indexToRemove: number) => {
    setInputs(prevInputs => {
      const newInputs = [...prevInputs];
      newInputs.splice(indexToRemove, 1);

      const updatedAcquires = [...selectedAcquires];
      const updatedPlans = [...selectedPlans];
      updatedAcquires.splice(indexToRemove, 1);
      updatedPlans.splice(indexToRemove, 1);
      setSelectedAcquires(updatedAcquires);
      setSelectedPlans(updatedPlans);

      sessionStorage.setItem('inputs', JSON.stringify(newInputs));
      sessionStorage.setItem('selectedAcquires', JSON.stringify(updatedAcquires));
      sessionStorage.setItem('selectedPlans', JSON.stringify(updatedPlans));

      const removedFields = [`Fornecedor${indexToRemove}`, `PlanoComercial${indexToRemove}`];
      removedFields.forEach(field => unregister(field));

      return newInputs;
    });
  };

  const renderInputs = (index: number) => {
    const fornecedorValue = watch(`Fornecedor${index}`) || '';
    const planoComercialValue = watch(`PlanoComercial${index}`) || '';

    const selectedFornecedor = acquires.find(option => option.value === fornecedorValue);
    const selectedPlanoComercial = commercialPlans.find(option => option.value === planoComercialValue);

    const availableAcquires = acquires.filter(
      option => !selectedAcquires.includes(option.value) || option.value === fornecedorValue
    );

    const availablePlans = commercialPlans.filter(
      plan => !selectedPlans.includes(plan.value) || plan.value === planoComercialValue
    );

    const removeButton = index !== 0 && (
      <ButtonRemover onClick={() => removeInput(index)}>Remover</ButtonRemover>
    );

    const isLastInput = index === inputs.length - 1;
    const addButton = isLastInput && inputs.length < acquires.length && (
      <ButtonAdd primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={addInput}>Adicionar outro</ButtonAdd>
    );

    return (
      <ContainerInput key={index}>
        <WInput>
          <CustomSelect
            {...register(`Fornecedor${index}`)}
            label="Fornecedor"
            value={selectedFornecedor || { value: '', label: '' }}
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
            value={selectedPlanoComercial || { value: '', label: '' }}
            optionsData={{ options: availablePlans }}
            placeholder=""
            hasError={!!errors[`PlanoComercial${index}`]}
            onChange={(selectedOption: { value: string }) => handlePlanChange(selectedOption, index)}
          />
        </WInput>

        {removeButton}
        {addButton}
      </ContainerInput>
    );
  };

  const renderAllInputs = () => inputs.map((_, index) => renderInputs(index));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDados(true);

        const acquireData = JSON.parse(sessionStorage.getItem('acquireData') || 'null');
        if (acquireData) {
          setAcquires(acquireData);
        } else {
          const acquireResponse = await axios.get(`${baseURL}acquire/index`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${dataUser?.token}`
            }
          });

          const data = acquireResponse.data;
          if (data && data.acquires) {
            const options = data.acquires.map((acquire: { id: any; acquire_label: any }) => ({
              value: acquire.id,
              label: acquire.acquire_label,
            }));
            setAcquires(options);
            sessionStorage.setItem('acquireData', JSON.stringify(options));
          }
        }

        const sellerData = JSON.parse(sessionStorage.getItem('sellerData') || 'null');
        if (sellerData) {
          setFetchedOptions(sellerData);
        } else {
          const sellerResponse = await axios.get(`${baseURL}seller/indexla`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${dataUser?.token}`
            }
          });

          const data = sellerResponse.data;
          if (data && data.sellers) {
            const options = data.sellers.map((seller: { trading_name: any; type: any; id: any, document: any }) => ({
              value: seller.id,
              label: `${seller.trading_name}-${seller.type}-${seller.document}`
            }));
            setFetchedOptions(options);
            sessionStorage.setItem('sellerData', JSON.stringify(options));
          }
        }

        const planData = JSON.parse(sessionStorage.getItem('planData') || 'null');
        if (planData) {
          setCommercialPlans(planData);
        } else {
          const planResponse = await axios.get(`${baseURL}plan/commercial/3`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${dataUser?.token}`
            }
          });

          const data = planResponse.data;
          if (data && data.plans) {
            const options = data.plans.map((plan: { id: any; name: any }) => ({
              value: plan.id,
              label: plan.name
            }));
            setCommercialPlans(options);
            sessionStorage.setItem('planData', JSON.stringify(options));
          }
        }

        setDados(false);
      } catch (error) {

        setDados(false);
      }
    };

    fetchData();
  }, [dataUser]);

  useEffect(() => {
    const inputsFromSession = JSON.parse(sessionStorage.getItem('inputs') || '[{}]');
    setInputs(inputsFromSession);

    const selectedAcquiresFromSession = JSON.parse(sessionStorage.getItem('selectedAcquires') || '[]');
    setSelectedAcquires(selectedAcquiresFromSession);

    const selectedPlansFromSession = JSON.parse(sessionStorage.getItem('selectedPlans') || '[]');
    setSelectedPlans(selectedPlansFromSession);
  }, []);

  useEffect(() => {
    inputs.forEach((_, index) => {
      const fornecedor = selectedAcquires[index];
      const planoComercial = selectedPlans[index];
      if (fornecedor) {
        setValue(`Fornecedor${index}`, fornecedor);
      }
      if (planoComercial) {
        setValue(`PlanoComercial${index}`, planoComercial);
      }
    });
  }, [inputs, selectedAcquires, selectedPlans, setValue]);

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
                  value={selectedOption || { value: '', label: '' }}
                  optionsData={{ options: fetchedOptions }}
                  hasError={!!errors.licenciado}
                  onChange={(selectedOption: { value: string }) => setValue('licenciado', selectedOption.value)}
                />
                <button>Pesquise pelo nome do Licenciado</button>
              </ContainerInput2>

              {renderAllInputs()}
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={Voltar}>Voltar</ButtonVoltar>
            <ButtonAvançar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={Avançar}>
              Avançar
            </ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}
