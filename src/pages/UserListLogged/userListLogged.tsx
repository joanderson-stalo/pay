import axios from 'axios'
import { useLogin } from '@/context/user.login'
import { Container, ContainerMobile } from './styled'
import { baseURL } from '@/config/color'
import { HeaderUserListLogged } from './components/HeaderUserListLogged/headerUserListLogged'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Loading } from '@/components/Loading/loading'
import { CardUserLogged } from './components/Mobile/CardUserLoggerd/cardUserLoggerd'
import { CustomTableUserList } from './components/CustomTableUserList/table'


type User = {
  id: number
  name: string
  profile_id: string
  email: string
}

export function UserListLogged() {
  const { dataUser } = useLogin()
  const [userOnline, setUserOnline] = useState<User | null>(null)
  const [relatedUsers, setRelatedUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)




  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${baseURL}getuserandrelatedusers`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      })

      console.log(response.data)

      if (response.data.success) {
        setUserOnline(response.data.user_online)
        setRelatedUsers(response.data.related_users)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordRetrieve = async (email: string) => {
    try {
      setLoading(true)
      const response = await axios.post(
        'https://api-pagueassim.stalopay.com.br/forgot-password',
        {
          email: email
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser?.token}`
          }
        }
      )
      toast.success('verifique a caixa de e-mail')
    } catch (error) {
      toast.error('algo deu errado')
    } finally {
      setLoading(false)
    }
  }


  const handleRemove = async (id: number) => {
    try {
      setLoading(true)
      const response = await axios.delete(`${baseURL}user/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      })
      toast.success('usuário removido')
    } catch (error) {
      toast.error('algo deu errado')
    } finally {
      setLoading(false)
      fetchData();
    }
  }


  useEffect(() => {
    fetchData()
  }, [])

  const combinedData = userOnline
    ? [userOnline, ...relatedUsers]
    : [...relatedUsers]

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  )
}
