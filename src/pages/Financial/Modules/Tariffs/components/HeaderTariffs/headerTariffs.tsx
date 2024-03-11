
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';

export function HeaderTariffs() {
  const navigate = useNavigate();

  const handleAddRequest = () => {
    navigate('/addRate');
  };


  return (
    <S.Container>
      <TitleH title='Tarifas' />
      <S.Button onClick={handleAddRequest}>Adicionar Tarifa</S.Button>
    </S.Container>
  );
}
