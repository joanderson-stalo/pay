
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

export function HeaderTariffs() {
  const navigate = useNavigate();

  const handleAddRequest = () => {
    navigate('/addStock');
  };


  return (
    <S.Container>
      <S.Title>Tarifas</S.Title>
      <S.Button onClick={handleAddRequest}>Adicionar Tarifa</S.Button>
    </S.Container>
  );
}
