import { useTenantData } from '@/context';
import * as S from './styled';
import { checkEmpty } from '@/utils/checkEmpty';
import { useNavigate } from 'react-router-dom';
import { useOrderPix } from '@/context/id/orderPixID';

export interface RowDataTickets {
  id: string;
  customer_name: string;
  amount: string;
  created_at: string;
  status: string;
}

function formatDateBR(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
}

function formatCurrencyBRL(value: string): string {
  const numberValue = Number(value);
  return isNaN(numberValue)
    ? 'R$ 0,00'
    : new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(numberValue);
}

const statusMap: { [key: string]: string } = {
  aguardando: 'Aguardando',
  concluido: 'Concluído'
};

export function ConfraPixCardMobile({ data }: { data: RowDataTickets[] }) {
  const tenantData = useTenantData();
  const navigate = useNavigate();
  const { setSelectedOrderPixID } = useOrderPix();

  const handleViewMoreClick = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 20));
    setSelectedOrderPixID(id.toString());
    navigate(`/confrapix-details`);
  };

  return (
    <>
      {data.map((ticket) => (
        <S.CardContainer key={ticket.id}>
          <S.CardContent>
            <S.DetailColumn>
              <S.DetailRow>
                <S.SectionTitle>Data da transação</S.SectionTitle>
                <S.SectionDescription>{formatDateBR(ticket.created_at)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>ID:</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(ticket.id)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Nome do cliente</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(ticket.customer_name)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Status:</S.SectionTitle>
                <S.SectionDescription>{checkEmpty(statusMap[ticket.status.toLowerCase()] || ticket.status)}</S.SectionDescription>
              </S.DetailRow>

              <S.DetailRow>
                <S.SectionTitle>Valor</S.SectionTitle>
                <S.SectionDescription>{formatCurrencyBRL(ticket.amount)}</S.SectionDescription>
              </S.DetailRow>
            </S.DetailColumn>

            <S.DetailColumnBtn>
              <S.EditButton
                primary={tenantData.primary_color_identity}
                secundary={tenantData.secondary_color_identity}
                onClick={() => handleViewMoreClick(ticket.id)}
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
