import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import { TitleH } from '@/components/Title/title'

export function HeaderCommission() {
  const navigate = useNavigate()

  const handleDaily = () => {
    navigate('/commission/daily')
  }

  const handleToDay = () => {
    navigate('/commission/network')
  }

  return (
    <S.Container>
      <TitleH title='Minhas comissões' />

      <S.ContainerPJPF>
            <S.ButtonToday active={false}  onClick={handleToDay}>REDE</S.ButtonToday>
            <S.ButtonPF  active >MY</S.ButtonPF>
      </S.ContainerPJPF>
    </S.Container>
  )
}
