import { TitleH } from '@/components/Title/title'
import * as S from './styled'
import { useCallback, useEffect, useState } from 'react'
import { baseURL } from '@/service/api'
import axios, { AxiosError } from 'axios'
import { TranslateErrorMessage } from '@/utils/translateErrorMessage'
import { toast } from 'react-toastify'
import { useLogin } from '@/context/user.login'
import { TabePerfils } from './components/TabelaPerfils/tablePerfils'
import { CustomInputPix, CustomSelectPerfil } from '@/components/Confrapix/confrapix'
import { BtnAdvance } from '@/components/BtnAdvance/btnAdvance'
import { BtnReturn } from '@/components/BtnReturn/btnReturn'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CardPerfils } from './mobile/CardPerfils/cardPerfils'

interface FormData {
  name: string
  description: string
  tipo: string
}

const profiles = [

  {  value: 'admin', label: 'Admin' },
  {  value: 'user', label: 'User' },
  {  value: 'guest', label: 'Guest' }
]

const logs = [
  {id: '1', data: '10/10/10', name: 'Rodrigo' },
  {id: '3', data: '10/10/10', name: 'Rodrigo' },
  {id: '3', data: '10/10/10', name: 'Rodrigo' },
]

export function CreatePerfil() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<FormData>()
  const nome = watch('name')
  const descricao = watch('description')
  const type = watch('tipo');

  const isAllFieldsFilled = nome && descricao && type;

  const { dataUser } = useLogin()

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const handleFormData = async (data: FormData) => {
    setLoading(true)


    try {

      const requestData = {
        name: data.name,
        descricao: data.description,
        tipo: data.tipo
      }


      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${dataUser?.token}`
      }

      const response = await axios.post(`${baseURL}rota`, requestData, {
        headers
      })

      if(response.data.status === 200) {
        toast.success('Perfil criado com sucesso!')
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



  return (
    <>
      <S.Container>
        <S.ContainerTitle>
          <TitleH title="Criar perfil" />
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
              label="Descrição"
              placeholder="Descreva o tipo de perfil"
              required
              {...register('description')}
            />
          </S.ContainerInput>

          <S.ContainerInput2>
              <CustomSelectPerfil
              options={profiles}

              label='Tipo'
              required
              {...register('tipo')}

              />

          </S.ContainerInput2>

          <S.ContainerButton>
            <BtnReturn title="Cancelar" onClick={() => navigate(-1)} />
            <BtnAdvance
              title="Salvar"
              onClick={() => handleFormData}
              disabled={!isAllFieldsFilled}
            />
          </S.ContainerButton>
        </S.ContainerForm>

        <S.ContainerTable>
          <S.SubTitle>Perfis cadastrados</S.SubTitle>
            <TabePerfils rows={logs} />

            <CardPerfils data={logs}/>
        </S.ContainerTable>




      </S.Container>
    </>
  )
}
