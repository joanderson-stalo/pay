import { useTicketID } from '@/context/id/ticketId';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useTenantData } from '@/context';

export interface RowData {
  created_at: string;
  id: string;
  description: string;
  event: string;
  properties: string;
}

interface CardLogProps {
  data: RowData[];
}

export function CardLog({ data }: CardLogProps) {

  const { setSelectedTicketID } = useTicketID();
  const navigate = useNavigate();
  const tenantData = useTenantData();

  const handleViewMoreClick = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 20));
    setSelectedTicketID(id)
    navigate(`/log-detail`);
  };


  return (
    <>
      {data.map((item) => (
        <S.Wrapper key={item.id}>
          <S.ContainerCardLog>
            <S.CardHeading>{item.event}</S.CardHeading>
            <S.CardHeading>ID: {item.id}</S.CardHeading>
            <S.CardHeading>Created At: {item.created_at}</S.CardHeading>
            <S.CardHeading>Description: {item.description}</S.CardHeading>
            <S.CardHeading>Properties: {item.properties}</S.CardHeading>
          </S.ContainerCardLog>
          <S.ButtonLogCard primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={() => handleViewMoreClick(item.id)}>Detalhes</S.ButtonLogCard>
        </S.Wrapper>
      ))}
    </>
  );
}
