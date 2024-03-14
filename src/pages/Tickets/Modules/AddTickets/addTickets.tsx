import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { baseURL } from "@/config/color";
import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerStep, ContextStep, ContextStepContainer, CustomTextArea, FileInputLabel, HiddenFileInput, Label, Line, StyledUploadIcon, TitleStep } from "./styled";
import { CustomInput } from "@/components/Input/input";
import { CustomSelect } from "@/components/Select/select";
import { useLogin } from "@/context/user.login";
import axios from "axios";
import { optionsDataSituation, optionsDataYesOrNo } from "./option";
import { useNavigate } from "react-router-dom";
import { useTenantData } from "@/context";

export function AddTickets() {
  const { register, formState: { errors }, watch, setValue } = useForm();
  const { dataUser } = useLogin();
  const [fetchedOptionsFN, setFetchedOptionsFN] = useState([]);
  const navigate = useNavigate()

  const allFieldsFilled = watch('titulo') && watch('solicitacao') && watch('link_problema') && watch('fornecedor') && watch('estabelecimento') && watch('licenciado') && watch('descricao');

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


  const handleBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    fetchDataFN();
  }, []);
  const tenantData = useTenantData();

  return (
    <>
      <ContainerStep>
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Criar ticket</TitleStep>
            <Line />
            <ContainerForm>
              <ContainerInput>
                <CustomInput {...register('titulo')} label="Título" colorInputDefault={tenantData.primary_color_identity} colorInputSuccess={tenantData.secondary_color_identity} hasError={!!errors.titulo}/>
                <CustomSelect {...register("solicitacao")} optionsData={optionsDataYesOrNo} placeholder="Clique para ver a lista" label="Tipo de solicitação"   onChange={(selectedOption: { value: string }) => {
                  setValue('solicitacao', selectedOption.value)
                }} />
                <CustomInput {...register('link_problema')} label="Link do problema" colorInputDefault={tenantData.primary_color_identity} colorInputSuccess={tenantData.secondary_color_identity} hasError={!!errors.link_problema}/>
              </ContainerInput>
              <ContainerInput>
                <CustomSelect {...register("fornecedor")} optionsData={{ options: fetchedOptionsFN }} placeholder="Clique para ver a lista" label="Fornecedor"   onChange={(selectedOption: { value: string }) => {
                  setValue('fornecedor', selectedOption.value)
                }} />
                <CustomSelect {...register("estabelecimento")} optionsData={optionsDataSituation} placeholder="Clique para ver a lista" label="Estabelecimento"   onChange={(selectedOption: { value: string }) => {
                  setValue('estabelecimento', selectedOption.value)
                }} />
                <CustomSelect {...register("licenciado")} optionsData={optionsDataYesOrNo} placeholder="Clique para ver a lista" label="Licenciado"    onChange={(selectedOption: { value: string }) => {
                  setValue('licenciado', selectedOption.value)
                }} />
              </ContainerInput>
            <div>
            <Label>Descrição do Problema</Label>
              <CustomTextArea
                  {...register('descricao')}
                  placeholder=""
                  hasError={!!errors.descricao}
                />
            </div>
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar onClick={handleBack}>Cancelar</ButtonVoltar>
            <ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled}>Criar ticket</ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}
