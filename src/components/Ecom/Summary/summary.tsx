import { useEffect, useState } from 'react';
import * as S from './styled';
import { useCart } from '@/context/e-com/cart';
import { useNavigate } from 'react-router-dom';
import { Receipt } from '@phosphor-icons/react';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';

type CartItem = {
  id: number;
  quantity: number;
  name: string;
  sales_value: number;
};


export function Summary(){
  const { cartItems } = useCart();
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)
  const navigate = useNavigate();

  const typedCartItems: CartItem[] = cartItems.map(item => ({
    ...item,
    quantity: typeof item.quantity === 'number' ? item.quantity : parseInt(item.quantity ?? '0', 10)
  })).filter(item => !isNaN(item.quantity));


  const totalPrice = typedCartItems.reduce((acc, item) => acc + item.sales_value * item.quantity, 0);
  const formattedTotalPrice = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)')
    setIsSmallScreen(mediaQuery.matches)

    const handleScreenChange = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches)
    }

    mediaQuery.addListener(handleScreenChange)

    return () => {
      mediaQuery.removeListener(handleScreenChange)
    }
  }, [])

  return(

    <>
      <S.Wrapper>
      <S.OrderSummaryContainer>
      <S.IconWrapper>
    <Receipt  />
  </S.IconWrapper>
      <p>Resumo do pedido</p>
      <S.StyledDiv>
        <h2>Total: {formattedTotalPrice}</h2>
        <p>Itens: {typedCartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <S.SummaryList>
      {typedCartItems.map((item) => (
        <S.ListItem key={item.id}>
          <span className="item-details">{item.quantity} x {item.name}</span>
          <span className="item-price">{formatCurrencyBR(item.sales_value) }</span>
        </S.ListItem>
      ))}
    </S.SummaryList>
        </S.StyledDiv>

    </S.OrderSummaryContainer>
      </S.Wrapper>
    </>

  );
}
