import { WarningCircle } from '@phosphor-icons/react'
import * as S from './styled'

export function NoteData () {
  return (
    <>

    <S.Container>



      <S.Worning>
        <WarningCircle/>
        <S.Title>Não há dados disponíveis</S.Title>
      </S.Worning>

    </S.Container>



    </>
  )
}

