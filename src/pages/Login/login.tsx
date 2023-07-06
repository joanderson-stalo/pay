import { useForm } from 'react-hook-form';
import { Resolver } from 'react-hook-form/dist/types/resolvers';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import * as S from './styled';
import { Button } from '@/components/Button/button';
import { schema } from './schema';
import { ThemeColor } from '@/config/color';
import { ButtonText, Placeholder, Text } from '@/config/text';
import { useContext } from 'react';
import { AuthContext } from '@/context/user.login';
import { handleRecover } from '@/utils/handleNavigate';
import { CustomInput } from '@/components/Input/input';
import { InputMask } from '@/components/InputMask/inputMask';
import { ContainerSubmit } from '@/styles/default';
import { MessageError } from '@/components/MessageError/messageError';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
  email: string;
  password: string;
  device_name: string;
};

type ResolverFormData = Resolver<FormData>;

export function Login() {
  const navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext);

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

  const onSubmit = async (data: FormData) => {
    console.log('oi', data);
    try {
      data.device_name = 'API';
      const response = await axios.post('https://pagueassim.stalopay.com.br/login', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


    return (
      <S.ContainerLogin>

        <S.TitleLogin colorTitle={ThemeColor.primaria}>{Text.title}</S.TitleLogin>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.ConatainerInput>

            <S.ContextInput>
              <CustomInput
                label='Login'
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
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
                colorInputDefault={ThemeColor.primaria}
                colorInputSuccess={ThemeColor.secundaria}
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
            colorBackground={ThemeColor.secundaria}
            success={isValid}
            title={ButtonText.login}
          />
          </ContainerSubmit>
        </S.Form>
      </S.ContainerLogin>
    )
  }
