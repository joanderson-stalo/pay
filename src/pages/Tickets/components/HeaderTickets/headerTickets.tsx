
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';

export function HeaderTickets() {
  const navigate = useNavigate();

  const handleAddRequest = () => {
    navigate('/tickets-add');
  };


  return (
    <S.Container>
      <TitleH title='Tickets' />
      <S.Button onClick={handleAddRequest}>Criar ticket</S.Button>
    </S.Container>
  );
}
