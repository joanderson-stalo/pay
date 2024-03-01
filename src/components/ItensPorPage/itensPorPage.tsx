import { ChangeEvent } from 'react'
import * as S from './styled'

type ItensPorPageProps = {
  itensPorPage: number | ''
  setItensPorPage: (valor: number | '') => void
}

export function ItensPorPage({  itensPorPage, setItensPorPage }: ItensPorPageProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const newValue = value === '' ? '' : Number(value)
    setItensPorPage(newValue)
  }

  return (
    <S.Container>
      <S.Span>Estabelecimentos por página</S.Span>
      <S.InputPage
        type="number"
        value={itensPorPage === '' ? '' : itensPorPage}
        min="1"
        onChange={handleInputChange}
        disabled
      />
    </S.Container>
  )
}
