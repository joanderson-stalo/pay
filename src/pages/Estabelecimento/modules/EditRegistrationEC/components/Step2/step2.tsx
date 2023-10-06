import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { ThemeColor } from "@/config/color";
import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerInput2, ContainerStep, ContextStep, ContextStepContainer, Line, TitleStep } from "./styled";
import { CustomInput } from "@/components/Input/input";
import { LabelCustomInputMask } from "@/components/CustomInputMask";
import { Loading } from "@/components/Loading/loading";


export function Step2() {
  const { register, formState: { errors }, setValue, watch } = useForm({
    mode: 'onChange'
  });
  const [dados, setDados] = useState(false);

  const allFieldsFilled = !!watch('CEP') && !!watch('Endereco') && !!watch('Numero') && !!watch('Bairro') && !!watch('Cidade') && !!watch('Estado');

  const searchAddressByCEP = async (cep: string) => {
    setDados(true);
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
          <ButtonAvançar disabled={!allFieldsFilled} >Salvar</ButtonAvançar>
        </ContainerButton>
      </ContextStepContainer>
    </ContainerStep>
    </>
  )
}
