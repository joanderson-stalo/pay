import  { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import Cookies from 'js-cookie';

type CartItem = {
  id: number
  sales_value: number
  name: string
  link_image_cover: string
  quantity?: string;
};

type CartContextType = {
  cartItems: CartItem[];
  itemCount: number;
  updateCart: (newCartItems: CartItem[]) => void;
};


export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState<number>(0);

  useEffect(() => {
    const updateCartFromCookie = () => {
      const cartItemsStr = Cookies.get('cart') || '[]';
      const cart: CartItem[] = JSON.parse(cartItemsStr);
      setCartItems(cart);
      setItemCount(cart.length);
    };


    window.addEventListener('cartUpdated', updateCartFromCookie);


    updateCartFromCookie();


    return () => {
      window.removeEventListener('cartUpdated', updateCartFromCookie);
    };
  }, []);


  const updateCart = (newCartItems: CartItem[]) => {
    Cookies.set('cart', JSON.stringify(newCartItems));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <CartContext.Provider value={{ cartItems, itemCount, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
