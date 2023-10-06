import { useNavigate } from 'react-router-dom'
import * as S from './styled'

export function HeaderCommission() {
  const navigate = useNavigate()

  const handleDiaria = () => {
    navigate('/commission/daily')
  }

  return (
    <S.Container>
      <S.Title>Comissões</S.Title>
      <S.ContainerPJPF>
            <S.ButtonPJ onClick={handleDiaria} active={false}>DIÁRIA</S.ButtonPJ>
            <S.ButtonPF  active >RANKING</S.ButtonPF>
      </S.ContainerPJPF>
    </S.Container>
  )
}
