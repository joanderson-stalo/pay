import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { baseURL } from "@/config/color";
import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerStep, ContextStep, ContextStepContainer, Line, TitleStep } from "./styled";
import { CustomInput } from "@/components/Input/input";
import { LabelCustomInputMask } from "@/components/CustomInputMask";
import { Loading } from "@/components/Loading/loading";
import { CustomSelect } from "@/components/Select/select";
import { useLogin } from "@/context/user.login";
import axios from "axios";
import { useTenantData } from "@/context";

export function AddRequest() {
  const { register, formState: { errors }, watch, setValue } = useForm();
  const { dataUser } = useLogin();
  const [fetchedOptionsLA, setFetchedOptionsLA] = useState([]);
  const [fetchedOptionsEC, setFetchedOptionsEC] = useState([]);
  const allFieldsFilled = watch('serial') && watch('data') && watch('descrição') && watch('valor') && watch('estabelecimento') && watch('licenciadoAutorizado') && watch('tipo') && watch('status');

  const fetchDataLA = async () => {
    try {
      const response = await axios.get(`${baseURL}seller/indexla`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data;
      if (data && data.sellers) {
        const options = data.sellers.map((seller: { id: any; trading_name: any; type: any; cnpj_cpf: any; }) => ({
          value: seller.id,
          label: `${seller.trading_name}-${seller.type}-${seller.cnpj_cpf}`
        }));
        setFetchedOptionsLA(options);
      }
    } catch (error) {
      console.error('Houve um erro ao buscar os dados:', error);
    }
  };


  const fetchDataEC = async () => {
    try {
      const response = await axios.get(`${baseURL}seller/indexec`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data.sellers;
      if (data) {
        const options = data.map((seller: { id: any; company_name: any; }) => ({
          value: seller.id,
          label: seller.company_name
        }));
        setFetchedOptionsEC(options);
      }

    } catch (error) {
      console.error('Houve um erro ao buscar os dados:', error);
    }
  };

  useEffect(() => {
    fetchDataLA();
    fetchDataEC()
  }, []);

  const tenantData = useTenantData();

  return (
    <>
      <ContainerStep>
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Solicitação de Tarifa</TitleStep>
            <Line />
            <ContainerForm>
              <ContainerInput>
                <CustomSelect
                  {...register("estabelecimento")}
                  optionsData={{ options: fetchedOptionsEC }}
                  placeholder="Clique para ver a lista"
                  label="Estabelecimento"
                  onChange={(selectedOption: { value: string; }) => {
                    setValue('estabelecimento', selectedOption.value);
                  }}
                />
                <CustomSelect
                  {...register("licenciadoAutorizado")}
                  optionsData={{ options: fetchedOptionsLA }}
                  placeholder="Clique para ver a lista"
                  label="Licenciado"
                  onChange={(selectedOption: { value: string; }) => {
                    setValue('licenciadoAutorizado', selectedOption.value);
                  }}
                />
              </ContainerInput>
              <ContainerInput>
                <CustomInput
                  {...register('descrição')}
                  label="Descrição"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.descrição}
                />
                <LabelCustomInputMask
                  {...register('valor')}
                  label="Valor"
                  mask="99,99 %"
                  placeholder="%"
                  hasError={!!errors.valor}
                />
              </ContainerInput>
              <ContainerInput>
                <CustomInput
                  {...register('serial')}
                  label="Serial"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.serial}
                />
                <CustomSelect
                  {...register("tipo")}
                  optionsData={{ options: fetchedOptionsLA }}
                  placeholder="Clique para ver a lista"
                  label="Tipo"
                  onChange={(selectedOption: { value: string; }) => {
                    setValue('tipo', selectedOption.value);
                  }}
                />
              </ContainerInput>
              <ContainerInput>
                <CustomSelect
                  {...register("status")}
                  optionsData={{ options: fetchedOptionsLA }}
                  placeholder="Clique para ver a lista"
                  label="Status"
                  onChange={(selectedOption: { value: string; }) => {
                    setValue('status', selectedOption.value);
                  }}
                />
                <CustomInput
                  {...register('data')}
                  label="Data"
                  type="date"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  hasError={!!errors.data}
                />
              </ContainerInput>
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar>Cancelar</ButtonVoltar>
            <ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled}>Criar solicitação</ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}
