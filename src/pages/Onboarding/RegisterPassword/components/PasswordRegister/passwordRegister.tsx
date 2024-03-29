import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'

import { Button } from '@/components/Button/button'
import {
  ConatainerInput,
  ContainerMessage,
  ContainerRecover,
  ContextContainer,
  ContextInput,
  Form,
  IconWrapper,
} from './styled'
import { schema } from './schema'


import { ButtonText, Placeholder, RegisterPassword } from '@/config/text'

import { RegisterSuccess } from '../RegisterSuccess/registerSuccess'
import { handleLogin } from '@/utils/handleNavigate'
import { InputMask } from '@/components/InputMask/inputMask'
import { ContainerSubmit, ContextTitle } from '@/styles/default'
import { MessageErrorList } from '@/components/MessageErrorList/messageErrorList'
import { MessageError } from '@/components/MessageError/messageError'
import { StyledP } from '@/components/MessageErrorList/styled'
import { useTenantData } from '@/context'

type FormData = {
  password: string
  passwordConfirm: string
}

export function PasswordRegister() {
  const [success, setSucess] = useState(false)
  const navigate = useNavigate()
  const tenantData = useTenantData();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const password = watch('password')
  const passwordConfirm = watch('passwordConfirm')
  const hasLowercase = /[a-z]/.test(password || '')
  const hasUppercase = /[A-Z]/.test(password || '')
  const hasNumber = /[0-9]/.test(password || '')
  const hasSpecialChar = /\W/.test(password || '')
  const hasSixCharacters = (password || '').length >= 6

  const onSubmit = (data: FormData) => {

    setSucess(true)
  }

  return (
    <>
      {success ? (
        <RegisterSuccess />
      ) : (
        <ContainerRecover>
          <ContextContainer>
            <button type="button" onClick={() => handleLogin(navigate)}>
              <IconWrapper>
                <IoIosArrowBack />
              </IconWrapper>
              {RegisterPassword.voltar}
            </button>
            <ContextTitle>
              <h2>{RegisterPassword.cadastrar}</h2>
              <p>{RegisterPassword.text}</p>
            </ContextTitle>
          </ContextContainer>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <ConatainerInput>
              <ContextInput>
                <InputMask
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
              <StyledP secundary={tenantData.secondary_color_identity} success={hasLowercase && hasUppercase && hasNumber && hasSpecialChar && hasSixCharacters}> A senha deve conter pelo menos: </StyledP>
              <ul>

                  <MessageErrorList success={hasLowercase}>
                    Uma letra minúscula
                  </MessageErrorList>

                  <MessageErrorList success={hasUppercase}>
                    Uma letra maiúscula
                  </MessageErrorList>

                  <MessageErrorList success={hasNumber}>Um número</MessageErrorList>

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
                type="submit"
                colorBackground={tenantData.secondary_color_identity}
                success={isValid}
                label={ButtonText.salvar}
              />
            </ContainerSubmit>
          </Form>
        </ContainerRecover>
      )}
    </>
  )
}
