import { ContainerListProducts } from "./styled";
import { HeaderListProducts } from "./components/HeaderListProducts/headerListProducts";
import { OrderReceipt } from '@/components/Ecom/OrderReceipt/orderReceipt';
import { useTenantData } from '@/context';
import { useEffect, useState } from "react";
import { useCart } from "@/context/e-com/cart";
import { OrderDetailsFooter } from "@/components/Ecom/OrderDetailsFooter/orderDetailsFooter";

type OrderItem = {
  id: number;
  quantity: number;
  name: string;
  link_image_cover: string;
  sales_value: number;
};

type OrderData = {
  recipientName?: string;
  cpf?: string;
  cep?: string;
  bairro?: string;
  endereco?: string;
  cidade?: string;
  numero?: string;
  estado?: string;
  complemento?: string;
  items?: OrderItem[];
};

type PaymentsSuccessProps = {
  orderNumber: string;
};


export function PaymentsSuccess({ orderNumber }: PaymentsSuccessProps) {
  const { primary_color_identity } = useTenantData();
  const [userAddress, setUserAddress] = useState<OrderData | null>(null);
  const { cartItems } = useCart();

  useEffect(() => {
    function getCookie(name: string): OrderData | null {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length >= 2) {
        const cookiePart = parts.pop();
        if (cookiePart) {
          const cookieValue = cookiePart.split(';').shift();
          if (cookieValue) {
            return JSON.parse(decodeURIComponent(cookieValue)) as OrderData;
          }
        }
      }
      return null;
    }

    const addressData = getCookie('userAddress');
    if (addressData && cartItems) {
      const items: OrderItem[] = cartItems.map(cartItem => ({
        id: cartItem.id,
        quantity: cartItem.quantity ? parseInt(cartItem.quantity, 10) : 1,
        name: cartItem.name,
        link_image_cover: cartItem.link_image_cover,
        sales_value: cartItem.sales_value
      }));

      const completeAddressData: OrderData = {
        ...addressData,
        items: items,
      };
      setUserAddress(completeAddressData);
    }
  }, [cartItems]);

  return (
    <>
      <HeaderListProducts />
      <ContainerListProducts>
        <OrderReceipt primaryColor={primary_color_identity} orderNumber={orderNumber} />
        <OrderDetailsFooter orderData={userAddress} />
      </ContainerListProducts>
    </>
  );
}
