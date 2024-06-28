import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { baseURL } from "@/config/color";
import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerInput2, ContainerStep, ContextStep, ContextStepContainer, Form, Line, TitleStep } from "./styled";
import { CustomInput } from "@/components/Input/input";
import { Loading } from "@/components/Loading/loading";
import { CustomSelect } from "@/components/Select/select";
import { useLogin } from "@/context/user.login";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/pages/LAcadastro/LAcadastro";
import { toast } from "react-toastify";
import { TranslateErrorMessage } from "@/utils/translateErrorMessage";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { useTenantData } from "@/context";

interface FormData {
  tipo: string;
  estabelecimento: string;
  licenciadoAutorizado: string;
  valor: string;
  serialTerminal: string;
  observação: string;
  dataReferência: string;
  dataCobrança: string;
}

export function AddRateManual() {
  const { register, formState: { errors }, watch, setValue, handleSubmit } = useForm();
  const { dataUser } = useLogin();
  const navigate = useNavigate();
  const [fetchedOptionsLA, setFetchedOptionsLA] = useState([]);
  const [fetchedOptionsEC, setFetchedOptionsEC] = useState([]);
  const [loading, setLoading] = useState(false);
  const tenantData = useTenantData();
  const allFieldsFilled = watch('serialTerminal') && watch('tipo') && watch('observação') && watch('valor') && watch('dataReferência') && watch('dataCobrança') && watch('estabelecimento') && watch('licenciadoAutorizado');

  const fetchDataLA = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}seller/indexla`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data;
      if (data && data.sellers) {
        const options = data.sellers.map((seller: { id: any; trading_name: any; type: any; document: any; }) => ({
          value: seller.id,
          label: `${seller.trading_name}-${seller.type}-${seller.document}`
        }));
        setFetchedOptionsLA(options);
      }
    } catch (error: any) {
      const err = error as AxiosError<ApiResponse>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage)
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEC = async () => {
    setLoading(true);
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

    } catch (error: any) {
      const err = error as AxiosError<ApiResponse>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage)
    } finally {
      setLoading(false);
    }
  };


  const setInitialDates = () => {
    const lastDayOfLastMonth = new Date(new Date().setDate(0)).toISOString().split('T')[0];
    const fifteenthOfNextMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15).toISOString().split('T')[0];

    setValue('dataReferência', lastDayOfLastMonth);
    setValue('dataCobrança', fifteenthOfNextMonth);
  };

  useEffect(() => {
    fetchDataLA();
    fetchDataEC();
    setInitialDates();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const formData: FormData = data as FormData;

    const operationType = ["Crédito", "credito", "Credito"].includes(formData.tipo) ? "credit" : formData.tipo;
    const payload = {
      tariffs: [
        {
          seller_id: formData.estabelecimento,
          responsible_seller_id: formData.licenciadoAutorizado,
          acquire_id: 3,
          amount: parseFloat(formData.valor.replace(',', '.')),
          serial_terminal: formData.serialTerminal,
          payable_by: "LA",
          status: "Ativo",
          operation_type: operationType,
          comment: formData.observação,
          description: formData.observação,
          type: formData.tipo,
          reference_date: formData['dataReferência'],
          billing_date: formData['dataCobrança']
        }
      ]
    };

    try {
      setLoading(true);
      const response = await axios.post(`${baseURL}tariffs/create`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'A tarifa foi adicionada com sucesso.',
      }).then(() => {
        navigate('/tariffs');
      });
    } catch (error: any) {
      const err = error as AxiosError<ApiResponse>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage)
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/tariffs');
  };


  return (
    <>
      {loading && <Loading />}
      <ContainerStep>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Adicionar Tarifa</TitleStep>
            <Line />
            <ContainerForm >
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



<CustomInput
                  label='Data Referência'
                  {...register('dataReferência')}
                  type="date"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                />

              </ContainerInput>

              <ContainerInput>

              <CustomInput
                  label='Serial Terminal'
                  {...register('serialTerminal')}
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                />
                <CustomInput
                  label='Tipo'
                  {...register('tipo')}
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                />

<CustomInput
                  label='Data Cobrança'
                  {...register('dataCobrança')}
                  type="date"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                />
              </ContainerInput>

              <ContainerInput2>
                <CustomInput
                  label='Valor'
                  placeholder="R$"
                  type="number"
                  {...register('valor')}
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                />

              </ContainerInput2>

              <CustomInput
                  label='Observação'
                  {...register('observação')}
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                />
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type="button" onClick={handleCancel }>Cancelar</ButtonVoltar>
            <ButtonAvançar  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}  type="submit" disabled={!allFieldsFilled} >Salvar</ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
        </Form>
      </ContainerStep>
    </>
  );
}
