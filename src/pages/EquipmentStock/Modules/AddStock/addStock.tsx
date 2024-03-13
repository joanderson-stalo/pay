import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { ThemeColor, baseURL } from "@/config/color";
import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerStep, ContextStep, ContextStepContainer, FileInputLabel, HiddenFileInput, Line, StyledUploadIcon, TitleStep } from "./styled";
import { CustomInput } from "@/components/Input/input";
import { CustomSelect } from "@/components/Select/select";
import { useLogin } from "@/context/user.login";
import axios from "axios";
import { optionsDataSituation, optionsDataYesOrNo } from "./option";

export function AddStock() {
  const { register, formState: { errors }, watch, setValue } = useForm();
  const { dataUser } = useLogin();
  const [fetchedOptionsFN, setFetchedOptionsFN] = useState([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const allFieldsFilled = watch('serial') && watch('modelo') && watch('fornecedor') && watch('situacao') && watch('funcionamento') && watch('comentarios');




  const fetchDataFN = async () => {
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
  };

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  useEffect(() => {
    fetchDataFN();
  }, []);




  return (
    <>
      <ContainerStep>
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Adicionar POS</TitleStep>
            <Line />
            <ContainerForm>
              <ContainerInput>
                <CustomInput {...register('serial')} label="Serial" colorInputDefault={ThemeColor.primaria} colorInputSuccess={ThemeColor.secundaria} hasError={!!errors.serial}/>
                <CustomSelect {...register("modelo")} optionsData={optionsDataYesOrNo} placeholder="Clique para ver a lista" label="Modelo"   onChange={(selectedOption: { value: string }) => {
    setValue('modelo', selectedOption.value)
  }}
/>
                <CustomSelect {...register("fornecedor")} optionsData={{ options: fetchedOptionsFN }} placeholder="Clique para ver a lista" label="Fornecedor"   onChange={(selectedOption: { value: string }) => {
    setValue('fornecedor', selectedOption.value)
  }}
/>
              </ContainerInput>
              <ContainerInput>
                <CustomSelect {...register("situacao")} optionsData={optionsDataSituation} placeholder="Clique para ver a lista" label="Situação"   onChange={(selectedOption: { value: string }) => {
    setValue('situacao', selectedOption.value)
  }}
/>
                <CustomSelect {...register("funcionamento")} optionsData={optionsDataSituation} placeholder="Clique para ver a lista" label="Funcionamento"   onChange={(selectedOption: { value: string }) => {
    setValue('funcionamento', selectedOption.value)
  }}
/>

              </ContainerInput>
              <ContainerInput>

                <CustomInput {...register('comentarios')} label="Comentários" colorInputDefault={ThemeColor.primaria} colorInputSuccess={ThemeColor.secundaria} hasError={!!errors.comentarios}/>
              </ContainerInput>
              <ContainerInput>
                <HiddenFileInput id="fileInput" type="file" onChange={onFileInputChange}/>
                <FileInputLabel htmlFor="fileInput"><StyledUploadIcon /> Enviar foto</FileInputLabel>
              </ContainerInput>
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar>Cancelar</ButtonVoltar>
            <ButtonAvançar disabled={!allFieldsFilled}>Salvar</ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}
