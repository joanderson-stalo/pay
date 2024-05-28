
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';
import { useTenantData } from '@/context';

export function HeaderPayments() {
  const navigate = useNavigate();
  const tenantData = useTenantData();

  const handleAddRequest = () => {
    navigate('/payments-request');
  };


  return (
    <S.Container>
      <TitleH title='Pagamentos' />
      <S.Button  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
 onClick={handleAddRequest}>Solicitar pagamento</S.Button>
    </S.Container>
  );
}
