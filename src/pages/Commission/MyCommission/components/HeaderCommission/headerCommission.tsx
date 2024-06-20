import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import { TitleH } from '@/components/Title/title'
import { useTenantData } from '@/context'

export function HeaderCommission() {
  const navigate = useNavigate()

  const handleDaily = () => {
    navigate('/commission/daily')
  }

  const handleToDay = () => {
    navigate('/commission/network')
  }

  const tenantData = useTenantData();

  return (
    <S.Container>
      <TitleH title='Minhas comissões' />

      <S.ContainerPJPF>
            <S.ButtonToday primary={tenantData.primary_color_identity}  active={false}  onClick={handleToDay}>Comissão por rede</S.ButtonToday>
            <S.ButtonPF primary={tenantData.primary_color_identity}   active >Minhas comissões</S.ButtonPF>
      </S.ContainerPJPF>
    </S.Container>
  )
}
