import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import { TitleH } from '@/components/Title/title'
import { useTenantData } from '@/context'

export function HeaderUserListLogged() {
  const navigate = useNavigate()

  const handleAddEstablishment = () => {
    navigate('/user-seller-create')
  }

  const tenantData = useTenantData();


  return (
    <S.Container>
      <TitleH title='Lista de Usuários' />
      <S.Button  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
 onClick={handleAddEstablishment}>Adicionar Usuário</S.Button>
    </S.Container>
  )
}
