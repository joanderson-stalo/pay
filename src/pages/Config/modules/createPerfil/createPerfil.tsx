import { TitleH } from '@/components/Title/title'
import * as S from './styled'
import { useCallback, useEffect, useState } from 'react'
import { baseURL } from '@/config/color'
import axios, { AxiosError } from 'axios'
import { TranslateErrorMessage } from '@/utils/translateErrorMessage'
import { toast } from 'react-toastify'
import { useLogin } from '@/context/user.login'
import { TabePerfils } from './components/TabelaPerfils/tablePerfils'
import { CustomInputPix, CustomSelect2 } from '@/components/Confrapix/confrapix'
import { BtnAdvance } from '@/components/BtnAdvance/btnAdvance'
import { BtnReturn } from '@/components/BtnReturn/btnReturn'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  description: string
  tipo: string
}

const profiles = [
  { value: 'admin', label: 'Admin' },
  { value: 'user', label: 'User' },
  { value: 'guest', label: 'Guest' }
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
  const type = watch('tipo')

  const isAllFieldsFilled = nome && descricao && type

  const { dataUser } = useLogin()
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const navigate = useNavigate()

  const handleFormData = async (data: FormData) => {
    const requestData = {
      name: data.name,
      descricao: data.description,
      tipo: data.tipo
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${dataUser?.token}`
    }

    try {
      const response = await axios.post(`${baseURL}rota`, requestData, {
        headers
      })

      console.log(response.data)
    } catch (error) {}
  }

  const fetchLog = useCallback(async () => {
    setLoading(true)
    const apiUrl = `${baseURL}activitylog?per_page=${String(
      itensPorPage
    )}&page=${currentPage}`

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      })

      setLogs(response.data.logs)
    } catch (error) {
      const err = error as AxiosError<{ message: string }>
      const errorMessage = err.response?.data?.message || 'Ocorreu um error'
      const translatedMessage = await TranslateErrorMessage(errorMessage)
      toast.error(translatedMessage)
    } finally {
      setLoading(false)
    }
  }, [itensPorPage, dataUser?.token])

  useEffect(() => {
    fetchLog()
  }, [fetchLog])
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
              placeholder="Descreva o tipo de perfi"
              required
              {...register('description')}
            />
          </S.ContainerInput>

          <S.ContainerInput2>
            <CustomSelect2
              label="Tipo"
              optionsData={profiles}
              placeholder="Selecione"
              required
              {...register('tipo')}
              onChange={selectedOption => {
                setValue('tipo', selectedOption ? selectedOption.value : '')
              }}
            />
          </S.ContainerInput2>

          <S.ContainerButton>
            <BtnReturn title="Cancelar" onClick={() => navigate(-1)} />
            <BtnAdvance
              title="Salvar"
              onClick={() => false}
              disabled={!isAllFieldsFilled}
            />
          </S.ContainerButton>
        </S.ContainerForm>

        <TabePerfils rows={logs} />
      </S.Container>
    </>
  )
}
