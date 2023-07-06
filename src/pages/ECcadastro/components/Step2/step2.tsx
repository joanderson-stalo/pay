import React, { useEffect } from "react";
import axios from "axios";
import { useFormContext } from 'react-hook-form';
import { ThemeColor } from "@/config/color";
import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerInput2, ContainerStep, ContextStep, ContextStepContainer, Line, TitleStep } from "./styled";
import { CustomInput } from "@/components/Input/input";
import { LabelCustomInputMask } from "@/components/CustomInputMask";

interface IStep2 {
  Avançar: () => void;
  Voltar: () => void;
}


export function Step2({ Avançar, Voltar }: IStep2) {
  const { register, formState: { errors }, setValue, watch } = useFormContext();

  const allFieldsFilled = !!watch('CEP') && !!watch('Endereco') && !!watch('Numero') && !!watch('Bairro') && !!watch('Cidade') && !!watch('Estado');

  const searchAddressByCEP = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data) {
        const { logradouro, complemento, bairro, localidade, uf } = response.data;
        setValue('Endereco', logradouro || '');
        setValue('Complemento', complemento || '');
        setValue('Bairro', bairro || '');
        setValue('Cidade', localidade || '');
        setValue('Estado', uf || '');
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };

  useEffect(() => {
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

  return (
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
                mask="99.999.999"
                placeholder={'--.---.---'}
                hasError={!!errors.CEP}
                />
              <CustomInput
                {...register('Endereco')}
                label='Endereço'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                hasError={!!errors.Endereco}
              />
            </ContainerInput>
            <ContainerInput>
              <CustomInput
                {...register('Numero')}
                label='Número'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}

                hasError={!!errors.Numero}
              />
              <CustomInput
                {...register('Complemento')}
                label='Complemento'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}

                hasError={!!errors.Complemento}
              />
            </ContainerInput>
            <ContainerInput>
              <CustomInput
                {...register('Bairro')}
                label='Bairro'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}

                hasError={!!errors.Bairro}
              />
              <CustomInput
                {...register('Cidade')}
                label='Cidade'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                disabled
                hasError={!!errors.Cidade}
              />
            </ContainerInput>
            <ContainerInput2>
              <CustomInput
                {...register('Estado')}
                label='Estado'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
                disabled
                hasError={!!errors.Estado}
              />
            </ContainerInput2>
          </ContainerForm>
        </ContextStep>
        <ContainerButton>
          <ButtonVoltar onClick={Voltar}>Voltar</ButtonVoltar>
          <ButtonAvançar disabled={!allFieldsFilled} onClick={Avançar}>Avançar</ButtonAvançar>
        </ContainerButton>
      </ContextStepContainer>
    </ContainerStep>
  )
}
