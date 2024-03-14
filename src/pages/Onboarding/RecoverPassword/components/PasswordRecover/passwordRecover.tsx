import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import axios from 'axios';
import { useState } from 'react';

import {
  ConatainerInput,
  ContainerRecover,
  ContextContainer,
  ContextInput,
  Form,
  IconWrapper
} from './styled';

import { schema } from './schema';

import {  baseURL } from '@/config/color';
import { ButtonText, Placeholder, RecoverPassword } from '@/config/text';

import { Button } from '@/components/Button/button';
import { RecoverSuccess } from '../RecoverSuccess/recoverSuccess';
import { handleLogin } from '@/utils/handleNavigate';
import { CustomInput } from '@/components/Input/input';
import { ContainerSubmit, ContextTitle } from '@/styles/default';
import { MessageError } from '@/components/MessageError/messageError';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { Loading } from '@/components/Loading/loading';
import { useTenantData } from '@/context';

type FormData = {
  email: string;
};

export function PasswordRecover() {
  const navigate = useNavigate();
  const [emailR, setEmailR] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });


  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${baseURL}forgot-password`, data);
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      setError('email', {
        type: 'manual',
        message: 'E-mail não localizado no nosso banco de dados.',
      });
      toast.error('E-mail não encontrado')
    }
    finally{
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmailR(emailValue);
    clearErrors('email');
    setIsEmailValid(emailValue !== '' && Yup.string().trim().email().isValidSync(emailValue));
  };

  const tenantData = useTenantData();

  return (
    <>
      {success ? (
        <RecoverSuccess email={emailR} />
      ) : (
        <>
          {isSubmitting && <Loading />}
          <ContainerRecover>
            <button type="button" onClick={() => handleLogin(navigate)}>
              <IconWrapper>
                <IoIosArrowBack />
              </IconWrapper>
              {RecoverPassword.voltar}
            </button>

            <ContextContainer>
              <ContextTitle>
                <h2>{RecoverPassword.recuperar}</h2>
                <p>{RecoverPassword.text}</p>
              </ContextTitle>
            </ContextContainer>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <ConatainerInput>
                <ContextInput>
                  <CustomInput
                    label='E-mail'
                    colorInputDefault={tenantData.primary_color_identity}
                    colorInputSuccess={tenantData.secondary_color_identity}
                    placeholder={Placeholder.placeholderEmail}
                    {...register('email')}
                    hasError={!!errors.email}
                    hasSuccess={isEmailValid}
                    value={emailR}
                    onChange={handleEmailChange}
                  />
                  {errors.email && <MessageError>{errors.email.message}</MessageError>}
                </ContextInput>
              </ConatainerInput>

              <ContainerSubmit className='containerSubmit'>
                <Button
                  type="submit"
                  colorBackground={tenantData.secondary_color_identity}
                  success={isEmailValid && !isSubmitting}
                  disabled={isSubmitting}
                  label={isSubmitting ? <BeatLoader size={10} color="#ffffff" /> : ButtonText.enviar}
                />
              </ContainerSubmit>
            </Form>
          </ContainerRecover>
        </>
      )}
    </>
  );
};
