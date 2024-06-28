import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { baseURL } from "@/config/color";
import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerStep, ContextStep, ContextStepContainer, FileInputLabel, HiddenFileInput, Line, StyledUploadIcon, TitleStep } from "./styled";
import { CustomInput } from "@/components/Input/input";
import { CustomSelect } from "@/components/Select/select";
import { useLogin } from "@/context/user.login";
import axios from "axios";
import { optionsDataSituation, optionsDataYesOrNo } from "./option";
import { useTenantData } from "@/context";

export function EditStock() {
  const { register, formState: { errors }, watch, setValue } = useForm();
  const { dataUser } = useLogin();
  const [fetchedOptionsFN, setFetchedOptionsFN] = useState([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const allFieldsFilled = watch('serial') && watch('modelo') && watch('fornecedor') && watch('situacao') && watch('funcionamento') && watch('carregador') && watch('chip') && watch('comentarios');




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


  const tenantData = useTenantData();

  return (
    <>
      <ContainerStep>
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Adicionar POS</TitleStep>
            <Line />
            <ContainerForm>
              <ContainerInput>
                <CustomInput {...register('serial')} label="Serial" colorInputDefault={tenantData.primary_color_identity} colorInputSuccess={tenantData.secondary_color_identity} hasError={!!errors.serial}/>
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
                <CustomSelect {...register("carregador")} optionsData={optionsDataYesOrNo} placeholder="Clique para ver a lista" label="Carregador"    onChange={(selectedOption: { value: string }) => {
    setValue('carregador', selectedOption.value)
  }}
/>
              </ContainerInput>
              <ContainerInput>
                <CustomSelect {...register("chip")} optionsData={optionsDataYesOrNo} placeholder="Clique para ver a lista" label="Chip"   onChange={(selectedOption: { value: string }) => {
    setValue('chip', selectedOption.value)
  }}
/>
                <CustomInput {...register('comentarios')} label="Comentários" colorInputDefault={tenantData.primary_color_identity} colorInputSuccess={tenantData.secondary_color_identity} hasError={!!errors.comentarios}/>
              </ContainerInput>
              <ContainerInput>
                <HiddenFileInput id="fileInput" type="file" onChange={onFileInputChange}/>
                <FileInputLabel htmlFor="fileInput"><StyledUploadIcon /> Enviar foto</FileInputLabel>
              </ContainerInput>
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar>Cancelar</ButtonVoltar>
            <ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled}>Salvar</ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}
