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
import Swal from 'sweetalert2';
import { useEstablishment } from '@/context/useEstablishment';
import { useNavigate } from 'react-router-dom';
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
  const [selectedAcquires, setSelectedAcquires] = useState<string[]>([]);
  const { establishmentId } = useEstablishment();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
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
    // && inputs.every((_, index) => !!watch(`Fornecedor${index}`) && !!watch(`PlanoComercial${index}`));

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

  const renderInputs = () => {
    return inputs.map((_, index) => {
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
              optionsData={optionsData}
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
    });
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
    const fetchSellerData = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(
          `${baseURL}seller/show/${establishmentId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${dataUser?.token}`,
            },
          }
        );
  
        const sellerData = response.data;
        setValue('licenciado', sellerData.seller.seller_la.id_la);
      
      } catch (error) {
        console.error('Erro ao obter dados do vendedor:', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchSellerData();
  }, [establishmentId, dataUser?.token, setValue]);


  const handleSalvar = async () => {
    try {
      setLoading(true);
      const updatedData = {
        id_seller_origin: watch('licenciado'),
        id_seller_destiny: establishmentId
      };
  
      await axios.put(`${baseURL}update-seller-network`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      });
  
      setLoading(false);
  
      Swal.fire({
        icon: 'success',
        title: 'Licenciado atualizado com sucesso!',
        showConfirmButton: true,
        confirmButtonText: 'Continuar',
        showCancelButton: true,
        cancelButtonText: 'OK',
        showCloseButton: true,
        closeButtonAriaLabel: 'Fechar modal'
        
      }).then((result) => {
        if (result.isConfirmed) {
          Avançar();
        } else {
          handleEC();
        }
      });
    } catch (error) {
      console.error('Erro ao atualizar dados:', error);
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Erro ao atualizar dados',
        text: 'Ocorreu um erro ao tentar atualizar os dados do licenciado. Por favor, tente novamente mais tarde.',
        confirmButtonText: 'OK'
      });
    }
  };

  const licenciadoValue = watch('licenciado');
  const selectedOption = fetchedOptions.find(option => option.value === licenciadoValue);

  const handleEC = () => {
    navigate('/sellers-ec')
  }


  return (
    <>
      {loading && <Loading />}
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
                 }} />
                <button>Pesquise pelo nome do Licenciado</button>
              </ContainerInput2>
              {/* {renderInputs()} */}
            
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar onClick={Voltar}>Voltar</ButtonVoltar>
            <ButtonAvançar disabled={!allFieldsFilled} onClick={handleSalvar}>
              Salvar
            </ButtonAvançar>
            <ButtonAvançar disabled={!allFieldsFilled} onClick={Avançar}>
              Avançar
            </ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}
