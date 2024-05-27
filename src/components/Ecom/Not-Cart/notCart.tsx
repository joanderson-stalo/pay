import { ShoppingCartSimple } from "@phosphor-icons/react";
import * as S from './styled';
import { useNavigate } from "react-router-dom";

export function NotCart() {
  const navigate = useNavigate();

  return (
    <S.NotCartContainer>
      <ShoppingCartSimple  />
      <p>Seu carrinho<br /> está vazio!</p>
      <button type="button" onClick={() => navigate('/e-com')}>Adicionar pedido</button>
    </S.NotCartContainer>
  );
}
