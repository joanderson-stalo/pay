import  { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useLogin } from '@/context/user.login';
import { Container, ContainerMobile } from './styled';
import { baseURL } from '@/config/color';
import { HeaderUserListLogged } from './components/HeaderUserListLogged/headerUserListLogged';
import { Loading } from '@/components/Loading/loading';
import { CardUserLogged } from './components/Mobile/CardUserLoggerd/cardUserLoggerd';
import { CustomTableUserList } from './components/CustomTableUserList/table';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

type User = {
  id: number;
  name: string;
  profile_id: string;
  email: string;
  document_id: string;
};

export function UserListLogged() {
  const { dataUser } = useLogin();
  const [userOnline, setUserOnline] = useState<User | null>(null);
  const [relatedUsers, setRelatedUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}getuserandrelatedusers`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      });
      if (response.data.success) {
        setUserOnline(response.data.user_online);
        setRelatedUsers(response.data.related_users);
      }
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }, [dataUser]);

  const handlePasswordRetrieve = useCallback(async (email: string) => {
    setLoading(true);
    try {
      await axios.post(`${baseURL}forgot-password`, { email }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      });
      toast.info('E-mail de recuperação enviado');
    } catch (error) {
      toast.error('Algo deu errado');
    } finally {
      setLoading(false);
    }
  }, [dataUser]);

  const handleRemove = useCallback((id: number) => {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, remover!",
      cancelButtonText: "Não, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        axios.delete(`${baseURL}user/delete/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser?.token}`
          }
        })
        .then(() => {
          Swal.fire('Deletado!', 'Seu usuário foi deletado.', 'success');
          fetchData();
        })
        .catch(() => {
          Swal.fire('Erro!', 'Algo deu errado.', 'error');
        })
        .finally(() => {
          setLoading(false);
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Seu usuário está seguro :)', 'error');
      }
    });
  }, [dataUser, fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const combinedData = userOnline ? [userOnline, ...relatedUsers] : [...relatedUsers];

  if(loading){
    return <Loading />
  }

  return (
        <>
          <HeaderUserListLogged />
          <Container>
            <CustomTableUserList
              data={combinedData}
              handlePasswordRetrieve={handlePasswordRetrieve}
              handleRemove={handleRemove}
            />
          </Container>
          <ContainerMobile>
            <CardUserLogged
              data={combinedData}
              handlePasswordRetrieve={handlePasswordRetrieve}
              handleRemove={handleRemove}
            />
          </ContainerMobile>
        </>
  );
}
