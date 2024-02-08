import { useNavigate } from 'react-router-dom'
import * as S from './styled'

export function HeaderCommission() {
  const navigate = useNavigate()

  const handleRanking = () => {
    navigate('/commission/ranking')
  }

  const handleDaily = () => {
    navigate('/commission/daily')
  }

  return (
    <S.Container>
      <S.Title>Comissões Diárias</S.Title>
      <S.ContainerPJPF>
            <S.ButtonToday active >DIÁRIA</S.ButtonToday>
            <S.ButtonPJ active={false} onClick={handleDaily }>POR VENDA</S.ButtonPJ>
            <S.ButtonPF active={false} onClick={handleRanking} >RANKING</S.ButtonPF>
      </S.ContainerPJPF>
    </S.Container>
  )
}
