import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormContext } from 'react-hook-form';

import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerInput2, ContainerStep, ContextStep, ContextStepContainer, Line, TitleStep } from "./styled";
import { CustomInput } from "@/components/Input/input";
import { LabelCustomInputMask } from "@/components/CustomInputMask";
import { Loading } from "@/components/Loading/loading";
import { useTenantData } from "@/context";

interface IStep2 {
  Avançar: () => void;
  Voltar: () => void;
}


export function Step2({ Avançar, Voltar }: IStep2) {
  const { register, formState: { errors }, setValue, watch } = useFormContext();
  const [dados, setDados] = useState(false);

  const allFieldsFilled = !!watch('CEP') && !!watch('Endereco') && !!watch('Numero') && !!watch('Bairro') && !!watch('Cidade') && !!watch('Estado');

  const searchAddressByCEP = async (cep: string) => {
    setDados(true);
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data) {
        const { logradouro, complemento, bairro, localidade, uf } = response.data;
        setValue('Endereco', logradouro || '');
        setValue('Bairro', bairro || '');
        setValue('Cidade', localidade || '');
        setValue('Estado', uf || '');
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    } finally {
      setDados(false);
    }
  };

  useEffect(() => {
    setDados(false);
    register('CEP');

    const handleChangeCEP = (event: React.ChangeEvent<HTMLInputElement>) => {
      const cep = event.target.value.replace(/\D/g, '');
      if (cep.length === 8) {
        searchAddressByCEP(cep);
      }
    };

    const cepInput = document.getElementById('cep') as HTMLInputElement;
    cepInput.addEventListener('change', handleChangeCEP as any);

    return () => {
      cepInput.removeEventListener('change', handleChangeCEP as any);
    };
  }, [register, setValue]);

  const tenantData = useTenantData();


  return (
    <>
    {dados && <Loading />}
        <ContainerStep>
      <ContextStepContainer>
        <ContextStep>
          <TitleStep>Endereço</TitleStep>
          <Line />
          <ContainerForm>
            <ContainerInput>
              <LabelCustomInputMask
               id="cep"
                {...register('CEP')}
                label='CEP'
                mask="99999-999"
                placeholder={'--.---.---'}
                hasError={!!errors.CEP}
                />
              <CustomInput
                {...register('Endereco')}
                label='Endereço'
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}
                hasError={!!errors.Endereco}
              />

<CustomInput
                {...register('Numero')}
                label='Número'
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}

                hasError={!!errors.Numero}
              />


            </ContainerInput>

            <ContainerInput>
            <CustomInput
                {...register('Complemento')}
                label='Complemento'
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}

                hasError={!!errors.Complemento}
              />
              <CustomInput
                {...register('Bairro')}
                label='Bairro'
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}

                hasError={!!errors.Bairro}
              />
              <CustomInput
                {...register('Cidade')}
                label='Cidade'
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}
                disabled
                hasError={!!errors.Cidade}
              />
            </ContainerInput>
            <ContainerInput2>
              <CustomInput
                {...register('Estado')}
                label='Estado'
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}
                disabled
                hasError={!!errors.Estado}
              />
            </ContainerInput2>
          </ContainerForm>
        </ContextStep>
        <ContainerButton>
          <ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={Voltar}>Voltar</ButtonVoltar>
          <ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled} onClick={Avançar}>Avançar</ButtonAvançar>
        </ContainerButton>
      </ContextStepContainer>
    </ContainerStep>
    </>
  )
}
