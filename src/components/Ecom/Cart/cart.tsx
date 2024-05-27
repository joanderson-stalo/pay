import Cookies from 'js-cookie';
import * as S from './styled'
import cart from '@assets/icons/cart.svg'
import { useCart } from '@/context/e-com/cart';
import { useNavigate } from 'react-router-dom';

export function Cart () {
  const {itemCount} = useCart();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/e-com-cart');
  }

  return (
    <>
     <S.CartIconContainer onClick={handleNavigate }>
      <img src={cart} alt="" />
      <S.ItemCount>{itemCount}</S.ItemCount>
    </S.CartIconContainer>
    </>
  );
}
