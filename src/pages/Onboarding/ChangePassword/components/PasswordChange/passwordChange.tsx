import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Button } from '@/components/Button/button';
import {
  ConatainerInput,
  ContainerMessage,
  ContainerRecover,
  ContextContainer,
  ContextInput,
  Form,
  IconWrapper,
} from './styled';

import { schema } from './schema';

import {  baseURL } from '@/config/color';
import { ButtonText, ChangePassword, Placeholder } from '@/config/text';

import { ChangeSuccess } from '../ChangeSuccess/changeSuccess';
import { handleLogin } from '@/utils/handleNavigate';
import { InputMask } from '@/components/InputMask/inputMask';
import { ContainerSubmit, ContextTitle } from '@/styles/default';
import { MessageError } from '@/components/MessageError/messageError';
import { MessageErrorList } from '@/components/MessageErrorList/messageErrorList';
import { StyledP } from '@/components/MessageErrorList/styled';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Loading } from '@/components/Loading/loading';
import { useTenantData } from '@/context';

type FormData = {
  password: string;
  passwordConfirm: string;
};

interface Props {
  email: string;
  token: string;
}

export function PasswordChange({ email, token }: Props) {
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setError,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const password = watch('password');
  const passwordConfirm = watch('passwordConfirm');
  const hasLowercase = /[a-z]/.test(password || '');
  const hasUppercase = /[A-Z]/.test(password || '');
  const hasNumber = /[0-9]/.test(password || '');
  const hasSpecialChar = /\W/.test(password || '');
  const hasSixCharacters = (password || '').length >= 6;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${baseURL}reset-password`,
        {
          token: token,
          email: email,
          password: data.password,
          password_confirmation: data.passwordConfirm,
        }
      );

      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      toast.error('Token invalido')
    }
    finally{
      setIsSubmitting(false);
    }
  };

  const tenantData = useTenantData();

  return (
    <>
      {success ? (
        <ChangeSuccess />
      ) : (
        <ContainerRecover>
          {isSubmitting && <Loading />}
          <button type='button' onClick={() => handleLogin(navigate)}>
            <IconWrapper>
              <IoIosArrowBack />
            </IconWrapper>
            {ChangePassword.voltar}
          </button>
          <ContextContainer>
            <ContextTitle>
              <h2>{ChangePassword.alterar}</h2>
              <p>
                {ChangePassword.desejada}
                {email}
              </p>
            </ContextTitle>
          </ContextContainer>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <ConatainerInput>
              <ContextInput>
                <InputMask
                  label='Nova Senha'
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  placeholder={Placeholder.placeholderNova}
                  {...register('password')}
                  hasError={
                    !!errors.password ||
                    (password &&
                      (!hasLowercase ||
                        !hasUppercase ||
                        !hasNumber ||
                        !hasSpecialChar ||
                        !hasSixCharacters)) ||
                    false
                  }
                  hasSuccess={
                    !errors.password &&
                    hasLowercase &&
                    hasUppercase &&
                    hasNumber &&
                    hasSpecialChar &&
                    hasSixCharacters
                  }
                />

                {errors.password && (
                  <MessageError>{errors.password.message}</MessageError>
                )}
              </ContextInput>
            </ConatainerInput>

            <ConatainerInput>
              <ContextInput>
                <InputMask
                  label='Repetir Nova Senha'
                  colorInputDefault={tenantData.primary_color_identity}
                  colorInputSuccess={tenantData.secondary_color_identity}
                  placeholder={Placeholder.placeholderRepita}
                  {...register('passwordConfirm')}
                  hasError={
                    (!!errors.passwordConfirm &&
                      errors.passwordConfirm.type === 'required') ||
                    (passwordConfirm && password !== passwordConfirm) ||
                    (passwordConfirm && passwordConfirm.length < 6) ||
                    undefined
                  }
                  hasSuccess={
                    !errors.passwordConfirm &&
                    password === passwordConfirm &&
                    passwordConfirm?.length >= 6
                  }
                />

                {errors.passwordConfirm && (
                  <MessageError>{errors.passwordConfirm.message}</MessageError>
                )}
              </ContextInput>
            </ConatainerInput>
            <ContainerMessage>
              <StyledP
                success={
                  hasLowercase &&
                  hasUppercase &&
                  hasNumber &&
                  hasSpecialChar &&
                  hasSixCharacters
                }
              >
                {' '}
                A senha deve conter pelo menos:{' '}
              </StyledP>
              <ul>
                <MessageErrorList success={hasLowercase}>
                  Uma letra minúscula
                </MessageErrorList>

                <MessageErrorList success={hasUppercase}>
                  Uma letra maiúscula
                </MessageErrorList>

                <MessageErrorList success={hasNumber}>
                  Um número
                </MessageErrorList>

                <MessageErrorList success={hasSpecialChar}>
                  Um caractere especial
                </MessageErrorList>

                <MessageErrorList success={hasSixCharacters}>
                  Pelo menos 6 caracteres
                </MessageErrorList>
              </ul>
            </ContainerMessage>
            <ContainerSubmit className='containerSubmit'>
              <Button
                type='submit'
                colorBackground={tenantData.secondary_color_identity}
                success={isValid}
                disabled={isSubmitting}
                label={isSubmitting ? <ClipLoader size={20} color="#ffffff" /> : ButtonText.salvar}
              />
            </ContainerSubmit>
          </Form>
        </ContainerRecover>
      )}
    </>
  );
}
