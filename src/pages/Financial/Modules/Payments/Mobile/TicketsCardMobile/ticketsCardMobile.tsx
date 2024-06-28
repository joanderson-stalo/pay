import { useTenantData } from '@/context';
import * as S from './styled';
import { checkEmpty } from '@/utils/checkEmpty';

export interface RowDataTickets {
  id: string;
  created_at: string;
  number: string;
  title: string;
  seller_name: string;
  final_evaluation: string;
}

function formatDateBR(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
}

export function TicketsCardMobile({ data }: { data: RowDataTickets[] }) {

  const tenantData = useTenantData();

  return (
    <>
      {data.map((ticket) => (
        <S.CardContainer key={ticket.id}>


          <S.CardContent>
            <S.DetailColumn>
              <S.DetailRow>
                <S.SectionTitle>Data</S.SectionTitle>
                {/* Utilizando a função formatDateBR para formatar a data */}
                <S.SectionDescription>{formatDateBR(ticket.created_at)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>ID:</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(ticket.id)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Licenciado</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(ticket.seller_name)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Status:</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(ticket.seller_name)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Valor</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(ticket.final_evaluation)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Valor da NF</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(ticket.seller_name)}</S.SectionDescription>
              </S.DetailRow>
            </S.DetailColumn>


            <S.DetailColumnBtn>
            <S.EditButton  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Visualizar</S.EditButton>
          </S.DetailColumnBtn>

          </S.CardContent>


        </S.CardContainer>
      ))}
    </>
  );
}
