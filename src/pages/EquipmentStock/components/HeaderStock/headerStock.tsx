
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

export function HeaderStock() {
  const navigate = useNavigate();

  const handleAddRequest = () => {
    navigate('/addStock');
  };


  return (
    <S.Container>
      <S.Title>Estoque de Equipamentos</S.Title>
      <S.Button onClick={handleAddRequest}>Adicionar POS</S.Button>
    </S.Container>
  );
}
