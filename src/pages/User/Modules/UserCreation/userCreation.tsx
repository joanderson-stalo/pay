import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { UserData } from './interface';
import { sanitizeNumeric } from '@/utils/sanitizeNumeric';
import { baseURL } from '@/config/color';
import { useLogin } from '@/context/user.login';
import { Loading } from '@/components/Loading/loading';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CreateUser } from './components/CreateUser/createUser';

export function UserCreation() {
  const { dataUser } = useLogin();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/userlist');
    localStorage.setItem('selectedItem', '0');
  };

  const handleFormData = async (data: UserData) => {
    const requestData = {
      name: data.Nome,
      email: data.Email,
      profile_id: Number(data.Função),
      seller_id: dataUser?.seller_id,
      document_id: '123456789',
      phone_number: sanitizeNumeric(`${data.Telefone}`),
      status: 'ativo',
      link: `${window.location.origin}/reset-password`,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${dataUser?.token}`,
    };

    try {
      setLoading(true);
      const response = await axios.post(`${baseURL}user/store`, requestData, { headers });

      if (response) {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Usuário criado com sucesso.',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then(() => navigate('/userlist'));
      }
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response && axiosError.response.status === 400) {
        Swal.fire({
          title: 'Erro!',
          text: 'O e-mail já foi recebido.',
          icon: 'error',
          confirmButtonText: 'Fechar',
        });
      } else {
        Swal.fire({
          title: 'Erro!',
          text: 'E-mail inválido',
          icon: 'error',
          confirmButtonText: 'Fechar',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CreateUser Voltar={handleVoltar} onSubmitData={handleFormData} />
      )}
    </>
  );
}
