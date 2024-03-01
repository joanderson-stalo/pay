
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';

export function HeaderStock() {
  const navigate = useNavigate();

  const handleAddRequest = () => {
    navigate('/addStock');
  };


  return (
    <S.Container>
      <TitleH title='Estoque de Equipamentos' />
      {/* <S.Button onClick={handleAddRequest}>Adicionar POS</S.Button> */}
    </S.Container>
  );
}
