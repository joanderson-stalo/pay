import { useNavigate } from 'react-router-dom'
import * as S from './styled'

export function HeaderUserListLogged() {
  const navigate = useNavigate()

  const handleAddEstablishment = () => {
    navigate('/userCreation')
  }

  return (
    <S.Container>
      <S.Title>Lista de Usuários</S.Title>
      <S.Button onClick={handleAddEstablishment}>Adicionar Usuário</S.Button>
    </S.Container>
  )
}
