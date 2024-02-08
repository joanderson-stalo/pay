import { useNavigate } from 'react-router-dom'
import * as S from './styled'

export function HeaderCommission() {
  const navigate = useNavigate()

  const handleDaily = () => {
    navigate('/commission/daily')
  }

  const handleToDay = () => {
    navigate('/commission/today')
  }

  return (
    <S.Container>
      <S.Title>Comissões - Ranking</S.Title>
      <S.ContainerPJPF>
            <S.ButtonToday active={false}  onClick={handleToDay}>DIÁRIA</S.ButtonToday>
            <S.ButtonPJ active={false} onClick={handleDaily}>POR VENDA</S.ButtonPJ>
            <S.ButtonPF  active >RANKING</S.ButtonPF>
      </S.ContainerPJPF>
    </S.Container>
  )
}
