import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ThemeColor, baseURL } from '@/config/color';
import {
  ButtonAvançar,
  ButtonVoltar,
  ContainerButton,
  ContainerForm,
  ContainerInput,
  ContainerPhoto,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  FileInputLabel,
  HiddenFileInput,
  Line,
  StyledUploadIcon,
  TitleStep
} from './styled';
import { CustomInput } from '@/components/Input/input';
import { CustomSelect } from '@/components/Select/select';
import { LabelCustomInputMask } from '@/components/CustomInputMask';
import iconPhoto from '@assets/icons/iconPhoto.png';
import { validationSchema } from './schema';
import { UserData } from '../../interface';
import axios, { AxiosError } from 'axios';
import { useLogin } from '@/context/user.login';
import { sanitizeNumeric } from '@/utils/sanitizeNumeric';
import { useNavigate } from 'react-router-dom';
import s3Client from '@/s3Config';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { Loading } from '@/components/Loading/loading';
import { Modal } from '../Modal/modal';
import { TranslateErrorMessage } from '@/utils/translateErrorMessage';
import { toast } from 'react-toastify';
import { ApiResponse } from '@/pages/LAcadastro/LAcadastro';

interface SelectOption {
  value: string;
  label: string;
}

export function CreateUser() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [profiles, setProfiles] = useState<{ options: SelectOption[] }>({ options: [] });

  const methods = useForm<UserData>({
    resolver: yupResolver(validationSchema)
  });

  const { register, handleSubmit, setValue, watch, formState: { errors } } = methods;
  const nome = watch('Nome');
  const email = watch('Email');
  const telefone = watch('Telefone');
  const funcao = watch('Função');
  const { dataUser } = useLogin();
  const isAllFieldsFilled = nome && email && telefone && funcao;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFile(file);
    }
  };

  const extractKeyFromCurrentURL = () => {
    const url = window.location.hostname;
    const parts = url.split('.');
    return parts.length > 2 ? parts[0] : parts.join('.');
  };



  const uploadFileToS3 = async (file: File): Promise<string> => {
    const currentDate = await new Date();
    const formattedDate = await  currentDate.toISOString().replace(/[-:.]/g, '');
    const fileNameWithTimestamp = await `${formattedDate}${file.name.replace(/\s/g, '-')}`;
    const keyPrefix = await extractKeyFromCurrentURL();
    const params = {
      Bucket: 'stalopay',
      Key: `${keyPrefix}/user_photo/${fileNameWithTimestamp}`,
      Body: file,
    };

    await s3Client.send(new PutObjectCommand(params));
    return `https://usc1.contabostorage.com/d6d39f0192924488b37d9be5d805e5e8:stalopay/${params.Key}`;
  };

  const GetProfiles = async () => {
    try {
      const response = await axios.get(`${baseURL}profile/index`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      });

      const transformedProfiles: SelectOption[] = response.data.profiles.map((profile: { id: number; name: string; }) => ({
        value: profile.id.toString(),
        label: profile.name
      }));

      setProfiles({ options: transformedProfiles });
    } catch (error) {

    }
  };

  useEffect(() => {
    GetProfiles()
  },[])

  const handleVoltar = () => {
    navigate('/user-seller');
    localStorage.setItem('selectedItem', '0');
  };

  const handleFormData = async (data: UserData) => {
    setLoading(true);
    let imageUrl = null;
        if (file) {
          imageUrl = await uploadFileToS3(file);
        }
    const requestData = {
      name: data.Nome,
      email: data.Email,
      profile_id: Number(data.Função),
      seller_id: dataUser?.seller_id,
      document_id: imageUrl ? imageUrl : '12',
      phone_number: sanitizeNumeric(`${data.Telefone}`),
      status: 'ativo',
      link: `${window.location.origin}/reset-password`,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${dataUser?.token}`,
    };

    try {
      setLoading(true);
      const response = await axios.post(`${baseURL}user/store`, requestData, { headers });

      if (response) {
        setFormSuccess(true);
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

  const resetFormSuccess = () => {
    setFormSuccess(false);
    navigate('/userlist');
  };

  if (formSuccess) {
    return <Modal onClose={resetFormSuccess} visible />;
  }

  return (
    <>
    {loading && <Loading />}

       <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleFormData)}>
        <ContainerStep>
          <ContextStepContainer>
            <ContextStep>
              <TitleStep>Dados do Usuário</TitleStep>
              <Line />
              <ContainerForm>
                <ContainerPhoto>
                  <img src={selectedImage || iconPhoto} alt="Foto do Usuário" />
                  <HiddenFileInput
                    id="fileInput"
                    type="file"
                    onChange={onFileInputChange}
                  />
                  <FileInputLabel htmlFor="fileInput">
                    <StyledUploadIcon /> Enviar foto
                  </FileInputLabel>
                </ContainerPhoto>
                <ContainerInput>
                  <CustomInput
                    label="Nome"
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    {...register('Nome')}
                    hasError={!!errors.Nome}
                  />
                  <CustomInput
                    label="E-mail"
                    colorInputDefault={ThemeColor.primaria}
                    colorInputSuccess={ThemeColor.secundaria}
                    {...register('Email')}
                    hasError={!!errors.Email}
                  />
                </ContainerInput>
                <ContainerInput>
                  <LabelCustomInputMask
                    {...register('Telefone')}
                    label="Telefone"
                    mask="(99) 99999-9999"
                    placeholder="(--) ----.----"
                    hasError={!!errors.Telefone}
                  />
                  <CustomSelect
                    optionsData={profiles}
                    {...register('Função')}
                    label="Função"
                    onChange={(selectedOption: { value: string }) => {
                      setValue('Função', selectedOption.value)
                    }}
                  />
                </ContainerInput>
              </ContainerForm>
            </ContextStep>
            <ContainerButton>
              <ButtonVoltar onClick={handleVoltar}>Cancelar</ButtonVoltar>
              <ButtonAvançar type="submit" disabled={!isAllFieldsFilled}>
                Salvar
              </ButtonAvançar>
            </ContainerButton>
          </ContextStepContainer>
        </ContainerStep>
      </form>
    </FormProvider>
    </>
  );
}
