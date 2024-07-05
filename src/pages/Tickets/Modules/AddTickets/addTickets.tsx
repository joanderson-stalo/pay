import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useTenantData } from "@/context";
import { Loading } from "@/components/Loading/loading";
import { baseURL } from "@/service/api";
import { ButtonAvançar, ButtonVoltar, ContainerButton, ContainerForm, ContainerInput, ContainerPhoto, ContainerStep, ContextStep, ContextStepContainer, CustomTextArea, FileInputLabel, HiddenFileInput, Label, Line, StyledUploadIcon, TitleStep } from "./styled";
import { CustomInput } from "@/components/Input/input";
import { CustomSelect } from "@/components/Select/select";
import { useLogin } from "@/context/user.login";
import s3Client from "@/s3Config";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { TranslateErrorMessage } from "@/utils/translateErrorMessage";
import { toast } from "react-toastify";

export function AddTickets() {
  const { register, formState: { errors }, watch, setValue, getValues, reset } = useForm();
  const { dataUser } = useLogin();
  const [fetchedOptionsFN, setFetchedOptionsFN] = useState([]);
  const [ticketTypes, setTicketTypes] = useState([]);
  const [sellerEC, setSellerEC] = useState([]);
  const [sellerLA, setSellerLA] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const tenantData = useTenantData();
  const [files, setFiles] = useState<FileList | null>(null);
  const allFieldsFilled = watch('titulo') && watch('solicitacao') && watch('descricao');

  const fetchDataFN = async () => {
    setLoading(true);
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
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally{
      setLoading(false);
    }
  };

  const fetchTicketsTypes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}tickets/types`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const options = response.data.types.map((type: { type: any; }) => ({
        label: type.type,
        value: type.type
      }));
      setTicketTypes(options);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    }finally{
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
      const options = data.map((seller: { trading_name: any; id: { toString: () => any; }; }) => ({
        label: seller.trading_name,
        value: seller.id.toString()
      }));
      setSellerEC(options)
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    }finally{
      setLoading(false);
    }
  };

  const fetchDataLA = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}seller/list/la`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data.sellers;
      const options = data.map((seller: { trading_name: any; id: { toString: () => any; }; }) => ({
        label: seller.trading_name,
        value: seller.id.toString()
      }));
      setSellerLA(options)
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1)
  }


  const uploadFilesToS3 = async (files: FileList): Promise<string[]> => {
    const uploadedUrls: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const currentDate = await new Date();
      const formattedDate = await currentDate.toISOString().replace(/[-:.]/g, '');
      const fileNameWithTimestamp = await `${formattedDate}${file.name.replace(/\s/g, '-')}`;
      const params = {
        Bucket: 'stalopay',
        Key: `${tenantData.name}/ticket/${fileNameWithTimestamp}`,
        Body: file,
      };
      await s3Client.send(new PutObjectCommand(params));
      const imageUrl = `https://usc1.contabostorage.com/d6d39f0192924488b37d9be5d805e5e8:stalopay/${params.Key}`;
      uploadedUrls.push(imageUrl);
    }
    return uploadedUrls;
  };

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
      setFiles(files);
    }
  };

  const createTicket = async () => {
    setLoading(true);
    try {
      let imageUrls: string[] = [];
      if (files) {
        imageUrls = await uploadFilesToS3(files);
      }
      const ticketData = {
        title: getValues('titulo'),
        user_id: dataUser?.seller_id || null,
        seller_id: parseInt(getValues('estabelecimento')),
        la_id: parseFloat(getValues('licenciado')),
        type: getValues('solicitacao'),
        acquire_name: getValues('fornecedor'),
        url_page_error: getValues('link_problema'),
        first_message: getValues('descricao'),
        attachments: imageUrls
      };
      await axios.post(`${baseURL}tickets/create`, ticketData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      reset();
      toast.success('Ticket criado com sucesso');
      navigate(-1)
    } catch (error: any) {

  }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFN();
    fetchTicketsTypes();
    fetchDataEC();
    fetchDataLA();
  }, []);


  if(loading){
    return <Loading />
  }

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
                <CustomSelect {...register("solicitacao")} optionsData={{options: ticketTypes} } placeholder="Clique para ver a lista" label="Tipo de solicitação"   onChange={(selectedOption: { value: string }) => {
                  setValue('solicitacao', selectedOption.value)
                }} />
                <CustomInput {...register('link_problema')} label="URL da página" colorInputDefault={tenantData.primary_color_identity} colorInputSuccess={tenantData.secondary_color_identity} hasError={!!errors.link_problema}/>
              </ContainerInput>
              <ContainerInput>
                <CustomSelect {...register("estabelecimento")} optionsData={{options: sellerEC}} placeholder="Clique para ver a lista" label="Estabelecimento"   onChange={(selectedOption: { value: string }) => {
                  setValue('estabelecimento', selectedOption.value)
                }} />
                <CustomSelect {...register("licenciado")} optionsData={{options: sellerLA}} placeholder="Clique para ver a lista" label="Licenciado"    onChange={(selectedOption: { value: string }) => {
                  setValue('licenciado', selectedOption.value)
                }} />
                <CustomSelect {...register("fornecedor")} optionsData={{ options: fetchedOptionsFN }} placeholder="Selecionar" label="Fornecedor"   onChange={(selectedOption: { value: string }) => {
                  setValue('fornecedor', selectedOption.value)
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
              <ContainerPhoto>
                  <HiddenFileInput
                    id="fileInput"
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                  />
                  <FileInputLabel primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} htmlFor="fileInput">
                    <StyledUploadIcon primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} /> Enviar Arquivos
                  </FileInputLabel>
                </ContainerPhoto>
                <div style={{ display: "flex" }}>
  {files && Array.from(files).map((file, index) => (
    <div key={index} style={{ marginRight: "10px" }}>
      {file.type.startsWith("image/") ? (
        <img src={URL.createObjectURL(file)} alt={`Imagem ${index + 1}`} style={{ maxWidth: "100px", maxHeight: "100px" }} />
      ) : (
        <div>{file.name}</div>
      )}
    </div>
  ))}
</div>
     </ContainerForm>
          </ContextStep>
          <ContainerButton>
            <ButtonVoltar onClick={handleBack}>Cancelar</ButtonVoltar>
            <ButtonAvançar onClick={createTicket}  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={!allFieldsFilled}>Criar ticket</ButtonAvançar>
          </ContainerButton>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}
