import { useNavigate } from 'react-router-dom'
import * as S from './styled'

export function HeaderCommission() {
  const navigate = useNavigate()

  const handleRanking = () => {
    navigate('/commission/ranking')
  }

  return (
    <S.Container>
      <S.Title>Comissões</S.Title>
      <S.ContainerPJPF>
            <S.ButtonPJ active >DIÁRIA</S.ButtonPJ>
            <S.ButtonPF onClick={handleRanking} active={false} >RANKING</S.ButtonPF>
      </S.ContainerPJPF>
    </S.Container>
  )
}
