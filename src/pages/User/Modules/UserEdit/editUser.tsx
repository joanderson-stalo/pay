import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ThemeColor, baseURL } from '@/config/color';
import * as S from './styled'
import { CustomInput } from '@/components/Input/input';
import { LabelCustomInputMask } from '@/components/CustomInputMask';
import iconPhoto from '@assets/icons/iconPhoto.png';
import axios from 'axios';
import { useLogin } from '@/context/user.login';
import { useNavigate, useParams } from 'react-router-dom';
import { UserData } from './interface';
import Swal from 'sweetalert2';
import './styled.css'
import { Loading } from '@/components/Loading/loading';
import { validationSchema } from './schema';

export function EditUser() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams();
  const { dataUser } = useLogin();
  const navigate = useNavigate()

  const methods = useForm<UserData>({
    resolver: yupResolver(validationSchema)
  });
  
  const { register, handleSubmit, watch, formState: { errors } } = methods;

  const isAllFieldsFilled = watch('Nome') || watch('Telefone');

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };


  const handleUserlist = () => {
    navigate('/userlist')
  }

  const onSubmit = handleSubmit(async (data) => {
    if (isAllFieldsFilled) {
      Swal.fire({
        title: "Você deseja salvar as alterações?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Salvar",
        denyButtonText: "Não salvar",
        width: 'auto', 
        customClass: {
          container: 'swal-wide', 
          actions: 'swal-actions-stacked' 
        }
      }).then(async (result) => {
        if (result.isConfirmed) {
          const updatedData = {
            name: data.Nome,
            phone_number: data.Telefone,
          };
  
          try {
            await axios.put(`${baseURL}user/update/${id}`, updatedData, {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${dataUser?.token}`
              }
            });
            Swal.fire("Salvo!", "", "success").then(() => {
              handleUserlist(); 
            });
          } catch (error) {
            console.error("Erro ao salvar:", error);
            Swal.fire("Erro ao salvar as alterações", "", "error");
          }
        } else if (result.isDenied) {
          Swal.fire("As alterações não foram salvas", "", "info");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          handleUserlist();
        }
      });
    }
  });
  
  const GetUser = async () => {
    setIsLoading(true);
  
    try {
      const response = await axios.get(`${baseURL}user/getuserby/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      });
  
      const userData = response.data.user; 
      const name = userData.name;
      const phoneNumber = userData.phone_number;
  
      methods.setValue('Nome', name);
      methods.setValue('Telefone', phoneNumber);
      
    } catch (error) {
      navigate("*");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GetUser();
  }, []);

  return (
<>
{isLoading && <Loading />}
<FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <S.ContainerStep>
          <S.ContextStepContainer>
            <S.ContextStep>
              <S.TitleStep>Dados do Usuário</S.TitleStep>
              <S.Line />
              <S.ContainerForm>
                <S.ContainerPhoto>
                  <img src={selectedImage || iconPhoto} alt="Foto do Usuário" />
                  <S.HiddenFileInput 
                    id="fileInput" 
                    type="file" 
                    onChange={onFileInputChange}
                  />
                  <S.FileInputLabel htmlFor="fileInput">
                    <S.StyledUploadIcon /> Enviar foto
                  </S.FileInputLabel>
                </S.ContainerPhoto>
           
                <CustomInput
                  label="Nome"
                  colorInputDefault={ThemeColor.primaria}
                  colorInputSuccess={ThemeColor.secundaria}
                  {...register('Nome')}
                  hasError={!!errors.Nome}
                />
    
                <LabelCustomInputMask
                  {...register('Telefone')}
                  label="Telefone"
                  mask="(99) 99999-9999"
                  placeholder="(--) ----.----"
                  hasError={!!errors.Telefone}
                />
              </S.ContainerForm>
            </S.ContextStep>
            <S.ContainerButton>
              <S.ButtonVoltar onClick={() => false}>Cancelar</S.ButtonVoltar>
              <S.ButtonAvançar type="submit" disabled={!isAllFieldsFilled}>
                Salvar
              </S.ButtonAvançar>
            </S.ContainerButton>
          </S.ContextStepContainer>
        </S.ContainerStep>
      </form>
    </FormProvider>
</>
  );
}
