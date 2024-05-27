import { TitleH } from '@/components/Title/title'
import * as S from './styled'
import { useTicketID } from '@/context/id/ticketId';


export function LogDetail(){
  const { selectedTicketID} = useTicketID();


  return(
    <>
      <S.Container>
      <TitleH title="Log - Detalhes" />
      </S.Container>
    </>
  )
}
