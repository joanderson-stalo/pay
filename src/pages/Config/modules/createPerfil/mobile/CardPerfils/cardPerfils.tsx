import { useTicketID } from '@/context/id/ticketId';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useTenantData } from '@/context';

export interface RowData {
  data: string;
  name: string;
  id:  string;



}

interface CardLogProps {
  data: RowData[];
}

export function CardPerfils({ data }: CardLogProps) {

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
          <S.WrapperHeader>
            <S.ContainerHeading>
                <S.CardHeading>{item.name}</S.CardHeading>
                <S.CardHeadingDate>{item.data}</S.CardHeadingDate>
              </S.ContainerHeading>

                <S.IconButton> <S.ButtonDelete/> </S.IconButton>
          </S.WrapperHeader>

          <S.ContainerButton>
              <S.ButtonLogCard primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={() => handleViewMoreClick(item.id)}>EDITAR PERFIL</S.ButtonLogCard>
              <S.ButtonLogCard primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={() => false}>PPERMISSÕES</S.ButtonLogCard>
          </S.ContainerButton>
          </S.ContainerCardLog>



        </S.Wrapper>
      ))}
    </>
  );
}
