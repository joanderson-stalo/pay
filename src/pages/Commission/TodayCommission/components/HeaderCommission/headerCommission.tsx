import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import { TitleH } from '@/components/Title/title'

export function HeaderCommission() {
  const navigate = useNavigate()

  const handleRanking = () => {
    navigate('/commission')
  }

  const handleDaily = () => {
    navigate('/commission/daily')
  }

  return (
    <S.Container>
      <TitleH title='Comissões de rede' />
      <S.ContainerPJPF>
            <S.ButtonToday active >Comissão por Rede</S.ButtonToday>
            <S.ButtonPF active={false} onClick={handleRanking} >Minhas Comissões</S.ButtonPF>
      </S.ContainerPJPF>
    </S.Container>
  )
}
