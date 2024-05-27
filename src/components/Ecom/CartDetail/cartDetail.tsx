import { Minus, Plus, TrashSimple } from '@phosphor-icons/react';
import * as S from './styled';
import Cookies from 'js-cookie';
import { useCart } from '@/context/e-com/cart';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { toast } from 'react-toastify';

interface Product {
  id: number;
  sales_value: number;
  name: string;
  link_image_cover: string;
  quantity: string;
}

interface CartDetailProps {
  products: Product[];
}

export function CartDetail({ products }: CartDetailProps) {
  const { updateCart, cartItems } = useCart();

  const handleIncrease = (productId: number) => {
    const updatedItems = cartItems.map(item =>
      item.id === productId ? {
        ...item,
        quantity: String(Math.min(Number(item.quantity) + 1, 999))
      } : item
    );
    updateCart(updatedItems);
    Cookies.set('cart', JSON.stringify(updatedItems));
  };

  const handleDecrease = (productId: number) => {
    const updatedItems = cartItems.map(item =>
      item.id === productId ? {
        ...item,
        quantity: String(Math.max(Number(item.quantity) - 1, 1))
      } : item
    );
    updateCart(updatedItems);
    Cookies.set('cart', JSON.stringify(updatedItems));
  };

  const handleChangeQuantity = (productId: number, quantity: string) => {
    const numericQuantity = Math.min(999, Math.max(1, Number(quantity)));
    if (isNaN(numericQuantity)) return;

    const updatedItems = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: String(numericQuantity) } : item
    );
    updateCart(updatedItems);
    Cookies.set('cart', JSON.stringify(updatedItems));
  };

  const handleRemove = (productId: number) => {
    const updatedItems = cartItems.filter(item => item.id !== productId);
    updateCart(updatedItems);
    Cookies.set('cart', JSON.stringify(updatedItems));
    toast.success('Produto removido do carrinho');
  };

  return (
    <>
     {products.map((product) => (
        <S.CartDetailContainer key={product.id}>
          <S.ProductImage src={product.link_image_cover} alt={product.name} />
            <S.Wrapper>

          <S.ProductDetails>
            <S.ProductName>{product.name}</S.ProductName>
            <S.ProductStock>Em estoque</S.ProductStock>
          </S.ProductDetails>

          <S.ActionContainer>
            <S.ActionButton onClick={() => handleDecrease(product.id)}><Minus weight='bold' /></S.ActionButton>
            <S.QuantityInput
              type="text"
              min="1"
              max="999"
              value={product.quantity}
              onChange={(e) => handleChangeQuantity(product.id, e.target.value)}
            />
            <S.ActionButton onClick={() => handleIncrease(product.id)}><Plus weight='bold' /></S.ActionButton>

          </S.ActionContainer>

          <S.ProductPrice>{formatCurrencyBR(product.sales_value)}</S.ProductPrice>
            </S.Wrapper>
          <S.DeleteButton onClick={() => handleRemove(product.id)}><TrashSimple weight='bold' /></S.DeleteButton>
        </S.CartDetailContainer>
      ))}
    </>
  );
}
