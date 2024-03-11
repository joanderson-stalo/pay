import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { ThemeColor } from "@/config/color";
import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerStep, ContextStep, ContextStepContainer, Line, TitleStep } from "./styled";
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
import { useTariff } from "@/context/useTariff";

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

export function EditRate() {
  const { register, formState: { errors }, watch, setValue, handleSubmit } = useForm();
  const { dataUser } = useLogin();
  const navigate = useNavigate();
  const [fetchedOptionsLA, setFetchedOptionsLA] =useState<{ value: string; label: string; }[]>([]);
  const [fetchedOptionsEC, setFetchedOptionsEC] = useState<{ value: string; label: string; }[]>([]);
  const { tariffId } = useTariff()

  const [loading, setLoading] = useState(false);
  const allFieldsFilled = watch('serialTerminal') && watch('tipo') && watch('observação') && watch('valor') && watch('dataReferência') && watch('dataCobrança') && watch('estabelecimento') && watch('licenciadoAutorizado');

  const fetchDataLA = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api-pagueassim.stalopay.com.br/seller/indexla', {
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
    } catch (error: any) {
      const err = error as AxiosError<ApiResponse>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um erro';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage)
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEC = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api-pagueassim.stalopay.com.br/seller/indexec', {
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
      const errorMessage = err.response?.data?.message || 'Ocorreu um erro';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage)
    } finally {
      setLoading(false);
    }
  };

  const fetchTariffDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get( `https://api-pagueassim.stalopay.com.br/tariffs/show/${tariffId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const { tariff } = response.data;

      setValue('serialTerminal', tariff.serial_terminal);
      setValue('observação', tariff.comment);
      const tariffAmount = parseFloat(tariff.amount);
      const formattedAmount = tariffAmount.toFixed(2);
      setValue('valor', formattedAmount);
      

      setValue('estabelecimento', tariff.seller_id);
      setValue('tipo', tariff.type);
      setValue('dataReferência', tariff.reference_date);
      setValue('dataCobrança', tariff.billing_date);

      setValue('licenciadoAutorizado', tariff.responsible_seller_id);

    } catch (error: any) {
      const err = error as AxiosError<ApiResponse>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um erro';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([fetchDataLA(), fetchDataEC()]);
        if (isMounted) {
          fetchTariffDetails();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const formData: FormData = data as FormData;
  
    const operationType = ["Crédito", "credito", "Credito"].includes(formData.tipo) ? "credit" : formData.tipo;
    const payload = 
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
   
   
    };
  
    try {
      setLoading(true);
      console.log(payload)
      const response = await axios.put(`https://api-pagueassim.stalopay.com.br/tariffs/update/${tariffId}`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'A tarifa foi atualizada com sucesso.',
      }).then(() => {
        navigate('/tariffs'); 
      });
    } catch (error: any) {
      const err = error as AxiosError<ApiResponse>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um erro';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage)
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/tariffs');
  };
  
  const estabelecimentoValue = watch('estabelecimento') as string | undefined;
  
  const licenciadoValue = watch('licenciadoAutorizado') as string | undefined;

  return (
    <>
      {loading && <Loading />}
      <ContainerStep>
        <form onSubmit={handleSubmit(onSubmit)}>
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Atualizar Tarifa</TitleStep>
            <Line />
            <ContainerForm >
              <ContainerInput>
                <CustomSelect
             {...register("estabelecimento")}
             optionsData={{ options: fetchedOptionsEC }}
             placeholder="Clique para ver a lista"
             label="Estabelecimento"
             value={fetchedOptionsEC.find(option => option.value === estabelecimentoValue)} 
             onChange={(selectedOption: { value: string }) => {
               setValue('estabelecimento', selectedOption.value)
             }}
                />
            <CustomSelect
  {...register("licenciadoAutorizado")}
  optionsData={{ options: fetchedOptionsLA }}
  placeholder="Clique para ver a lista"
  label="Licenciado"
  value={fetchedOptionsLA.find(option => option.value === licenciadoValue)} 
  onChange={(selectedOption: { value: string }) => {
    setValue('licenciadoAutorizado', selectedOption.value)
  }}
/>
              </ContainerInput>

              <ContainerInput>
                <CustomInput 
                  label='Serial Terminal'
                  {...register('serialTerminal')}
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                />
                <CustomInput 
                  label='Tipo'
                  {...register('tipo')}
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                />
              </ContainerInput>

              <ContainerInput>
                <CustomInput 
                  label='Valor'
                  placeholder="R$"
                  type="number"
                  {...register('valor')}
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                />
                <CustomInput 
                  label='Observação'
                  {...register('observação')}
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                />
              </ContainerInput>

              <ContainerInput>
                <CustomInput 
                  label='Data Referência'
                  {...register('dataReferência')}
                  type="date"
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                />
                <CustomInput 
                  label='Data Cobrança'
                  {...register('dataCobrança')}
                  type="date"
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                />
              </ContainerInput>
            </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar type="button" onClick={handleCancel }>Cancelar</ButtonVoltar>
            <ButtonAvançar type="submit" disabled={!allFieldsFilled} >Salvar</ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
        </form>
      </ContainerStep>
    </>
  );
}