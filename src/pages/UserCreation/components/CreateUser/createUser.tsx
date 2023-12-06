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
import { optionsData } from '../../optionsData';
import { LabelCustomInputMask } from '@/components/CustomInputMask';
import iconPhoto from '@assets/icons/iconPhoto.png';
import { validationSchema } from './schema';
import { UserData } from '../../interface';
import axios from 'axios';
import { useLogin } from '@/context/user.login';

interface ICreateUser {
  Voltar: () => void;
  onSubmitData: (data: UserData) => void;
}

interface SelectOption {
  value: string;
  label: string;
}


export function CreateUser({ Voltar, onSubmitData }: ICreateUser) {
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

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const onSubmit = handleSubmit(data => {
    onSubmitData(data);
  });


  const GetProfiles = async () => {
    try {
      const response = await axios.get(`${baseURL}profile/index`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      });
  
      // Transformar os dados para o formato esperado pelo CustomSelect
      const transformedProfiles: SelectOption[] = response.data.profiles.map((profile: { id: number; name: string; }) => ({
        value: profile.id.toString(),
        label: profile.name
      }));
  
      setProfiles({ options: transformedProfiles }); // Atualizar o estado com o novo formato
    } catch (error) {
      // Tratar os erros aqui
    }
  };
  


  useEffect(() => {
    GetProfiles()
  },[])
  

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
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
              <ButtonVoltar onClick={Voltar}>Cancelar</ButtonVoltar>
              <ButtonAvançar type="submit" disabled={!isAllFieldsFilled}>
                Salvar
              </ButtonAvançar>
            </ContainerButton>
          </ContextStepContainer>
        </ContainerStep>
      </form>
    </FormProvider>
  );
}
