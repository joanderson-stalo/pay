
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';
import { useTenantData } from '@/context';

export function HeaderConfrapix() {
  const navigate = useNavigate();
  const tenantData = useTenantData();

  const handleAddRequest = () => {
    navigate('/confrapix-create');
  };


  return (
    <S.Container>
      <TitleH title='Confrapix' />
      <S.Button  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
 onClick={handleAddRequest}>Gerar novo pix</S.Button>
    </S.Container>
  );
}
