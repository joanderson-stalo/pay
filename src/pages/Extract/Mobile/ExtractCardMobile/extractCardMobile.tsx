import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styled';

export interface RowDataTickets {
  id: number;
  data: string;
  titulo: string;
  valor: number;
  tipo: 'Entrada' | 'Saída';
}

export function ExtractCardMobile({ data }: { data: RowDataTickets[] }) {
  return (
    <>
      {data.map((ticket) => (
        <S.CardContainer key={ticket.id}>
          <S.CardHeader status={ticket.tipo}>
            <S.TicketNumber>{formatCurrencyBR(ticket.valor)}</S.TicketNumber>
            <S.RequestLabel>{ticket.titulo}</S.RequestLabel>
            <S.RequestStatus>{ticket.tipo}</S.RequestStatus>
          </S.CardHeader>

          <S.CardContent>
            <S.DetailColumn>
              <S.DetailRow>
                <S.SectionTitle>Data</S.SectionTitle>
                <S.SectionDescription>{ticket.data}</S.SectionDescription>
              </S.DetailRow>






            </S.DetailColumn>

            <S.DetailColumnBtn>
              <S.EditButton>Visualizar</S.EditButton>
            </S.DetailColumnBtn>
          </S.CardContent>
        </S.CardContainer>
      ))}
    </>
  );
}
