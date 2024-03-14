
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';
import { useTenantData } from '@/context';

export function HeaderTickets() {
  const navigate = useNavigate();
  const tenantData = useTenantData();

  const handleAddRequest = () => {
    navigate('/tickets-add');
  };


  return (
    <S.Container>
      <TitleH title='Tickets' />
      <S.Button  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
 onClick={handleAddRequest}>Criar ticket</S.Button>
    </S.Container>
  );
}
