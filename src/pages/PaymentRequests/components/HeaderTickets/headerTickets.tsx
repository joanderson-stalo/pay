
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

export function HeaderTickets() {
  const navigate = useNavigate();

  const handleAddRequest = () => {
    navigate('/tickets-add');
  };


  return (
    <S.Container>
      <S.Title>Solicitações de Pagamentos</S.Title>
      <S.Button onClick={handleAddRequest}>Solicitar Pagamento</S.Button>
    </S.Container>
  );
}
