
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

export function HeaderTickets() {
  const navigate = useNavigate();

  const handleAddRequest = () => {
    navigate('/addTickets');
  };


  return (
    <S.Container>
      <S.Title>Tickets</S.Title>
      <S.Button onClick={handleAddRequest}>Criar ticket</S.Button>
    </S.Container>
  );
}
