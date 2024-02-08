import { useNavigate } from 'react-router-dom'
import * as S from './styled'

export function HeaderCommission() {
  const navigate = useNavigate()

  const handleRanking = () => {
    navigate('/commission/ranking')
  }

  const handleToDay = () => {
    navigate('/commission/today')
  }

  return (
    <S.Container>
      <S.Title>Comissões - Por venda</S.Title>
      <S.ContainerPJPF>
            <S.ButtonToday active={false}  onClick={handleToDay}>DIÁRIA</S.ButtonToday>
            <S.ButtonPJ active>POR VENDA</S.ButtonPJ>
            <S.ButtonPF onClick={handleRanking } active={false} >RANKING</S.ButtonPF>
      </S.ContainerPJPF>
    </S.Container>
  )
}
