import { useEffect, useState } from 'react';
import * as S from './styled';
import { useCart } from '@/context/e-com/cart';
import { useNavigate } from 'react-router-dom';

type CartItem = {
  id: number;
  quantity: number;
  name: string;
  sales_value: number;
};


export function OrderSummary(){
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
    <S.OrderSummaryContainer>
      <p>Resumo do pedido</p>
      <S.StyledDiv>
        <h2>Total: {formattedTotalPrice}</h2>
        <p>Itens: {typedCartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <S.SummaryList>
      {typedCartItems.map((item) => (
        <S.ListItem key={item.id}>
          <span className="item-details">{item.quantity} x {item.name}</span>
          <span className="item-price">{item.sales_value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </S.ListItem>
      ))}
    </S.SummaryList>
        </S.StyledDiv>
        <S.ButtonsContainer>
        <S.CompleteOrderButton>{isSmallScreen ? 'finalizar compra' : 'CONCLUIR PEDIDO'}</S.CompleteOrderButton>
        <S.AddMoreOrdersButton type='button' onClick={() => navigate('/e-com')} >{isSmallScreen ? 'adicionar produto' : 'ADICIONAR MAIS PEDIDOS'}</S.AddMoreOrdersButton>
        </S.ButtonsContainer>
    </S.OrderSummaryContainer>
  );
}
