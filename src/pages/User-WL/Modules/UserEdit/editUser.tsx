import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { baseURL } from '@/config/color';
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
import s3Client from '@/s3Config';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { useTenantData } from '@/context';

export function EditUser() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { dataUser } = useLogin();
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const tenantData = useTenantData();

  const methods = useForm<UserData>({
    resolver: yupResolver(validationSchema),
  });

  const { register, handleSubmit, watch, formState: { errors, isValid } } = methods;



  const uploadFileToS3 = async (file: File): Promise<string> => {
    const currentDate = await new Date();
    const formattedDate = await currentDate.toISOString().replace(/[-:.]/g, '');
    const fileNameWithTimestamp = await `${formattedDate}${file.name.replace(/\s/g, '-')}`;
    const params = {
      Bucket: 'stalopay',
      Key: `${tenantData.name}/user_photo/${fileNameWithTimestamp}`,
      Body: file,
    };

    await s3Client.send(new PutObjectCommand(params));
    return `https://usc1.contabostorage.com/d6d39f0192924488b37d9be5d805e5e8:stalopay/${params.Key}`;
  };

  const isAllFieldsFilled = watch('Nome') && watch('Telefone');

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFile(file);
      setIsDirty(true); // Indicar que houve alterações nos dados
    }
  };

  const handleUserlist = () => {
    navigate('/user-seller');
  };

  const onSubmit = handleSubmit(async (data) => {
    if (isValid && isDirty) { 
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
        let imageUrl = null;
        if (file) {
          imageUrl = await uploadFileToS3(file);
        }
        if (result.isConfirmed) {
          const updatedData = {
            name: data.Nome,
            phone_number: data.Telefone,
            document_id: imageUrl ? imageUrl : selectedImage,
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
      setSelectedImage(userData.document_id)

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

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === 'Nome' || name === 'Telefone') {
        setIsDirty(true);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);


  const handleVoltar = () => {
    navigate('/user-seller');
  };


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
                  <S.FileInputLabel primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} htmlFor="fileInput">
                    <S.StyledUploadIcon primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} /> Enviar foto
                  </S.FileInputLabel>
                </S.ContainerPhoto>

                <CustomInput
                  label="Nome"
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
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
              <S.ButtonVoltar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='button' onClick={handleVoltar}>Cancelar</S.ButtonVoltar>
              <S.ButtonAvançar primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type="submit"  disabled={!isValid || !isDirty}>
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
