
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { useTenantData } from '@/context';

export function HeaderTickets() {
  const navigate = useNavigate();
  const tenantData = useTenantData();

  const handleAddRequest = () => {
    navigate('/tickets-add');
  };


  return (
    <S.Container>
      <S.Title  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Solicitações de Pagamentos</S.Title>
      <S.Button  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={handleAddRequest}>Solicitar Pagamento</S.Button>
    </S.Container>
  );
}
