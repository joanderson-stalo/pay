import { useForm } from 'react-hook-form';
import { Resolver } from 'react-hook-form/dist/types/resolvers';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {BeatLoader
} from 'react-spinners';
import * as S from './styled';
import { Button } from '@/components/Button/button';
import { schema } from './schema';
import { ButtonText, Placeholder, Text } from '@/config/text';
import { handleRecover } from '@/utils/handleNavigate';
import { CustomInput } from '@/components/Input/input';
import { InputMask } from '@/components/InputMask/inputMask';
import { ContainerSubmit } from '@/styles/default';
import { MessageError } from '@/components/MessageError/messageError';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from '@/context/user.login';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Loading } from '@/components/Loading/loading';
import { useTenantData } from '@/context';


type FormData = {
  email: string;
  password: string;
  device_name: string;
};

type ResolverFormData = Resolver<FormData>;

export function Login() {
  const navigate = useNavigate();
  const { login, isLogin } = useLogin();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema) as ResolverFormData,
    defaultValues: {
      email: '',
      password: '',
      device_name: 'API'
    }
  });

  const email = watch('email');
  const password = watch('password');
  const tenantData = useTenantData();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await login(data);
    } catch (error) {
      setIsSubmitting(false)
      setError('email', {
        type: 'manual',
        message: 'Confira se digitou o e-mail e senha corretamente',
      });
      setError('password', {
        type: 'manual'
      });
      toast.error('Usuário ou senha inválidas')
    }
    finally{
      setIsSubmitting(false)
    }
  };

  useEffect(() => {
    if(isLogin){
      navigate('/home')
    }
  })



  return (
    <S.ContainerLogin>
        {isSubmitting && <Loading />}
      <S.TitleLogin colorTitle={tenantData.primary_color_identity}>{Text.title}</S.TitleLogin>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.ConatainerInput>
          <S.ContextInput>
            <CustomInput
              label='Login'
              colorInputDefault={tenantData.primary_color_identity}
              colorInputSuccess={tenantData.secondary_color_identity}
              placeholder={Placeholder.placeholderEmail}
              {...register('email')}
              hasError={!!errors.email}
              hasSuccess={
                !!email &&
                !errors.email &&
                Yup.string().trim().email().isValidSync(email)
              }
            />
            {errors.email && <MessageError>{errors.email.message}</MessageError>}
          </S.ContextInput>
        </S.ConatainerInput>

        <S.ConatainerInput>
          <S.ContextInput>
            <InputMask
              label='Senha'
              colorInputDefault={tenantData.primary_color_identity}
              colorInputSuccess={tenantData.secondary_color_identity}
              placeholder={Placeholder.placeholderSenha}
              {...register('password')}
              hasError={!!errors.password || (password ? password.length < 6 : undefined)}
              hasSuccess={
                !errors.password &&
                password?.length >= 6 &&
                Yup.string().trim().min(6).max(20).isValidSync(password)
              }
            />
            {errors.password && <MessageError>{errors.password.message}</MessageError>}
          </S.ContextInput>
          <S.ConatainerButton>
          Esqueceu a senha?
            <button onClick={() => handleRecover(navigate)} type="button">
          Clique aqui
            </button>
          </S.ConatainerButton>
        </S.ConatainerInput>

        <ContainerSubmit className='containerSubmit'>
          <Button
          type="submit"
          colorBackground={tenantData.secondary_color_identity}
          success={isValid}
          disabled={isSubmitting}
          label={isSubmitting ? <BeatLoader size={10} color="#ffffff" /> : ButtonText.login}
        />
        </ContainerSubmit>
      </S.Form>
    </S.ContainerLogin>
  )
}
