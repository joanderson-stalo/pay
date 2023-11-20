import { useForm, FormProvider } from 'react-hook-form';
import { ThemeColor } from '@/config/color';
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
import { LabelCustomInputMask } from '@/components/CustomInputMask';;
import iconPhoto from '@assets/icons/iconPhoto.png';


import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './schema';
import { UserData } from '../../interface';

interface ICreateUser {
  Voltar: () => void;
  onSubmitData: (data: UserData) => void;
}

export function CreateUser({ Voltar, onSubmitData }: ICreateUser) {


  const methods = useForm({
    resolver: yupResolver(validationSchema)
  });

  const { register, handleSubmit, setValue, watch, formState: { errors } } = methods;

  const nome = watch('Nome');
  const email = watch('Email');
  const telefone = watch('Telefone');
  const funcao = watch('Função');

  const isAllFieldsFilled = nome && email && telefone && funcao;

  const onSubmit = (data: UserData) => {
    onSubmitData(data);
  }


  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContainerStep>
          <ContextStepContainer>
            <ContextStep>
              <TitleStep>Dados do Usuário</TitleStep>
              <Line />

              <ContainerForm>
                <ContainerPhoto>
                  <img src={iconPhoto} alt="" />

                  <HiddenFileInput id="fileInput" />
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
                    label="Função"
                    optionsData={optionsData}
                    {...register('Função')}
                    onChange={(selectedOption: { value: string }) => {
                      setValue('Função', selectedOption.value);
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
  )
}
