import * as S from './styled';

export interface RowDataTickets {
  id: number;
  data: string;
  numero: number;
  titulo: string;
  estabelecimento: string;
  status: 'Em tratamento' | 'Finalizado';
  comentarios: string;
}

export function TicketsCardMobile({ data }: { data: RowDataTickets[] }) {
  return (
    <>
      {data.map((ticket) => (
        <S.CardContainer key={ticket.id}>
          <S.CardHeader status={ticket.status}>
            <S.TicketNumber>{ticket.numero}</S.TicketNumber>
            <S.RequestLabel>{ticket.titulo}</S.RequestLabel>
            <S.RequestStatus>{ticket.status}</S.RequestStatus>
          </S.CardHeader>

          <S.CardContent>
            <S.DetailColumn>
              <S.DetailRow>
                <S.SectionTitle>Data</S.SectionTitle>
                <S.SectionDescription>{ticket.data}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Estabelecimento:</S.SectionTitle>
                <S.SectionDescription>{ticket.estabelecimento}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Comentários</S.SectionTitle>
                <S.SectionDescription>{ticket.comentarios}</S.SectionDescription>
              </S.DetailRow>
            </S.DetailColumn>


          </S.CardContent>
          <S.DetailColumnBtn>
              <S.EditButton>Editar</S.EditButton>
            </S.DetailColumnBtn>
        </S.CardContainer>
      ))}
    </>
  );
}
