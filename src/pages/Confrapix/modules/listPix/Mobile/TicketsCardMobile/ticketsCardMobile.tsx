import { useTenantData } from '@/context';
import * as S from './styled';
import { checkEmpty } from '@/utils/checkEmpty';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export interface RowDataTickets {
  id: string;
  receiver_tranding_name: string;
  amount_nf: string;
  created_at: string;
  status: string;
}

function formatDateBR(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
}

const statusMap: { [key: string]: string } = {
  requested: 'Pagamento em análise',
  closed: 'Pagamento efetuado',
  returned: 'Pagamento recusado'
};

export function TicketsCardMobile({ data }: { data: RowDataTickets[] }) {
  const tenantData = useTenantData();
  const navigate = useNavigate();
  const [selectedPaymentID, setSelectedPaymentID] = useState<string | null>(null);

  const handleViewMoreClick = async (id: string, status: string) => {
    await new Promise(resolve => setTimeout(resolve, 20));
    setSelectedPaymentID(id);
    if (status === 'requested' || status === 'closed') {
      navigate(`/payments-details`);
    } else {
      navigate(`/payments-update`);
    }
  };

  return (
    <>
      {data.map((ticket) => (
        <S.CardContainer key={ticket.id}>
          <S.CardContent>
            <S.DetailColumn>
              <S.DetailRow>
                <S.SectionTitle>Data</S.SectionTitle>
                <S.SectionDescription>{formatDateBR(ticket.created_at)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>ID:</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(ticket.id)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Nome do Recebedor</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(ticket.receiver_tranding_name)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Status:</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(statusMap[ticket.status] || ticket.status)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Valor</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(ticket.amount_nf)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Valor da NF</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(ticket.amount_nf)}</S.SectionDescription>
              </S.DetailRow>
            </S.DetailColumn>

            <S.DetailColumnBtn>
              <S.EditButton
                primary={tenantData.primary_color_identity}
                secundary={tenantData.secondary_color_identity}
                onClick={() => handleViewMoreClick(ticket.id, ticket.status)}
              >
                Visualizar
              </S.EditButton>
            </S.DetailColumnBtn>
          </S.CardContent>
        </S.CardContainer>
      ))}
    </>
  );
}
