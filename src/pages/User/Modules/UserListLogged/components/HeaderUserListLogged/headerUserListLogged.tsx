import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import { TitleH } from '@/components/Title/title'

export function HeaderUserListLogged() {
  const navigate = useNavigate()

  const handleAddEstablishment = () => {
    navigate('/user-seller-create')
  }

  return (
    <S.Container>
      <TitleH title='Lista de Usuários' />
      <S.Button onClick={handleAddEstablishment}>Adicionar Usuário</S.Button>
    </S.Container>
  )
}
