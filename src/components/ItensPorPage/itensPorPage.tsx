import { useEffect, ChangeEvent } from 'react'
import * as S from './styled'

type ItensPorPageProps = {
  fazerRequisicao: (valor: number) => void
  itensPorPage: number | ''
  setItensPorPage: (valor: number | '') => void
}

export function ItensPorPage({ fazerRequisicao, itensPorPage, setItensPorPage }: ItensPorPageProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const newValue = value === '' ? '' : Number(value)
    setItensPorPage(newValue)
  }

  useEffect(() => {
    if (itensPorPage !== '' && itensPorPage !== 0) {
      fazerRequisicao(itensPorPage)
    }
  }, [itensPorPage, fazerRequisicao])

  return (
    <S.Container>
      <S.Span>Estabelecimentos por página</S.Span>
      <S.InputPage
        type="number"
        value={itensPorPage === '' ? '' : itensPorPage}
        min="1"
        onChange={handleInputChange}
      />
    </S.Container>
  )
}
