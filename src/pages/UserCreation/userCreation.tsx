import React, { useState } from 'react'
import { CreateUser } from './components/Step2/step2'
import axios from 'axios'
import { UserData } from './interface'
import { sanitizeNumeric } from '@/utils/sanitizeNumeric'
import { baseURL } from '@/config/color'
import { useLogin } from '@/context/user.login'
import { Loading } from '@/components/Loading/loading'
import { Modal } from './components/Modal/modal'
import { useNavigate } from 'react-router-dom'
import { handleLogin } from '@/utils/handleNavigate'
import { toast } from 'react-toastify'

export function UserCreation() {
  const { dataUser } = useLogin()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleVoltar = () => {
      navigate('/userlist')
      localStorage.setItem('selectedItem', '0');
  }

  const handleFormData = async (data: UserData) => {
    const currentOrigin = window.location.origin

    const requestData = {
      name: data.Nome,
      email: data.Email,
      profile_id: Number(data.Função),
      seller_id: dataUser?.seller_id,
      document_id: '123456789',
      phone_number: sanitizeNumeric(`${data.Telefone}`),
      status: 'ativo',
      link: `${currentOrigin}/reset-password`
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${dataUser?.token}`
    }

    try {
      setLoading(true)
      const response = await axios.post(`${baseURL}user/store`, requestData, {
        headers
      })

   
        setSuccess(true);
  


    } catch (error: any) {

      if (error.response && error.response.status === 400) {
          toast.error('O e-mail já foi recebido.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {success ? (
            <Modal onClose={() => handleLogin(navigate)} visible={true} />
          ) : (
            <CreateUser Voltar={handleVoltar} onSubmitData={handleFormData} />
          )}
        </>
      )}
    </>
  )
}
