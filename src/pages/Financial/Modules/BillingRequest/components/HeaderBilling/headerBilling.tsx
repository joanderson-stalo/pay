
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';

export function HeaderBilling() {
  const navigate = useNavigate();

  const handleAddRequest = () => {
    navigate('/addRequest');
  };


  return (
    <S.Container>
      <TitleH title='Solicitações de Cobrança' />
      <S.Button onClick={handleAddRequest}>Adicionar solicitação</S.Button>
    </S.Container>
  );
}
