import { TitleH } from '@/components/Title/title'
import * as S from './styled'
import { useCallback, useEffect, useState } from 'react'
import { baseURL } from '@/service/api'
import axios, { AxiosError } from 'axios'
import { TranslateErrorMessage } from '@/utils/translateErrorMessage'
import { toast } from 'react-toastify'
import { useLogin } from '@/context/user.login'

import { CustomInputPix } from '@/components/Confrapix/confrapix'
import { BtnAdvance } from '@/components/BtnAdvance/btnAdvance'
import { BtnReturn } from '@/components/BtnReturn/btnReturn'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  modulo: string
  tipo: string
}


export function CreatePermission() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<FormData>()
  const nome = watch('name')
  const modules = watch('modulo')


  const isAllFieldsFilled = nome && modules;

  const { dataUser } = useLogin()

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const handleFormData = async (data: FormData) => {
    setLoading(true)


    try {


      const requestData = {
        name: data.name,
        module: data.modulo,

      }


      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${dataUser?.token}`
      }

      const response = await axios.post(`${baseURL}rota`, requestData, {
        headers
      })

      if(response.data.status === 200) {
        toast.success('Módulo criado com sucesso!')
      }


    } catch (error) {

      const err = error as AxiosError<{ message: string }>
      const errorMessage = err.response?.data?.message || 'Ocorreu um error'
      const translatedMessage = await TranslateErrorMessage(errorMessage)
      toast.error(translatedMessage)
    } finally{
      setLoading(false)
    }
  }



  useEffect(() => {

  }, [])
  return (
    <>
      <S.Container>
        <S.ContainerTitle>
          <TitleH title="Criar permissão" />
        </S.ContainerTitle>

        <S.ContainerForm onSubmit={handleSubmit(handleFormData)}>
          <S.ContainerInput>
            <CustomInputPix
              label="Nome"
              placeholder="Digite o nome da permissão"
              required
              {...register('name')}
            />

            <CustomInputPix
              label="Módulo"
              placeholder="Descreva o tipo de permissão"
              required
              {...register('modulo')}
            />
          </S.ContainerInput>



          <S.ContainerButton>
            <BtnReturn title="Cancelar" onClick={() => navigate(-1)} />
            <BtnAdvance
              title="Salvar"
              onClick={() => handleFormData}
              disabled={!isAllFieldsFilled}
            />
          </S.ContainerButton>
        </S.ContainerForm>

  
      </S.Container>
    </>
  )
}
