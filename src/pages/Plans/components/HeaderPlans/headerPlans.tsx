
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';


export function HeaderPlans() {



  return (
    <S.Container>
        <TitleH title='Planos' />
    </S.Container>
  );
}
