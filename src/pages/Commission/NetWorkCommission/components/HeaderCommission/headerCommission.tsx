import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import { TitleH } from '@/components/Title/title'
import { useTenantData } from '@/context'

export function HeaderCommission() {
  const navigate = useNavigate()

  const handleRanking = () => {
    navigate('/commission')
  }

  const handleDaily = () => {
    navigate('/commission/daily')
  }
  const tenantData = useTenantData();
  return (
    <S.Container>
      <TitleH title='Comissões de rede' />
      <S.ContainerPJPF>
            <S.ButtonToday  primary={tenantData.primary_color_identity}  active >Comissão por Rede</S.ButtonToday>
            <S.ButtonPF  primary={tenantData.primary_color_identity} active={false} onClick={handleRanking} >Minhas Comissões</S.ButtonPF>
      </S.ContainerPJPF>
    </S.Container>
  )
}
