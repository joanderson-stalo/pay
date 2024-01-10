
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

export function HeaderBilling() {
  const navigate = useNavigate();

  const handleAddRequest = () => {
    navigate('/addRequest');
  };


  return (
    <S.Container>
      <S.Title>Solicitações de Cobrança</S.Title>
      <S.Button onClick={handleAddRequest}>Adicionar solicitação</S.Button>
    </S.Container>
  );
}
