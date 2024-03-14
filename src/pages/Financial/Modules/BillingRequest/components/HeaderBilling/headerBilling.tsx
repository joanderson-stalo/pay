
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';
import { useTenantData } from '@/context';

export function HeaderBilling() {
  const navigate = useNavigate();

  const handleAddRequest = () => {
    navigate('/addRequest');
  };

  const tenantData = useTenantData();
  return (
    <S.Container>
      <TitleH title='Solicitações de Cobrança' />
      <S.Button  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={handleAddRequest}>Adicionar solicitação</S.Button>
    </S.Container>
  );
}
