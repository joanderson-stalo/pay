
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';
import { useTenantData } from '@/context';

export function HeaderTariffs() {
  const navigate = useNavigate();

  const handleAddRequest = () => {
    navigate('/addRate');
  };

  const tenantData = useTenantData();
  return (
    <S.Container>
      <TitleH title='Tarifas' />
      <S.Button  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={handleAddRequest}>Adicionar tarifa</S.Button>
    </S.Container>
  );
}
