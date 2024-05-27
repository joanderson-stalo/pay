import { ContainerCartDetail, ContainerListProducts } from "./styled";
import { HeaderListProducts } from "./components/HeaderListProducts/headerListProducts";
import { CartDetail } from "@/components/Ecom/CartDetail/cartDetail";
import { useCart } from "@/context/e-com/cart";
import { OrderSummary } from "@/components/Ecom/OrderSummary/orderSummary";
import { NotCart } from "@/components/Ecom/Not-Cart/notCart";

interface Product {
  id: number;
  sales_value: number;
  name: string;
  link_image_cover: string;
  quantity: string;
}

export function Cart() {
  const {  cartItems } = useCart();

  const products: Product[] = cartItems.map(item => ({
    ...item,
    quantity: item.quantity !== undefined ? item.quantity : '1'
  }));

  return (
    <>
      {products.length > 0 ? (
        <>
          <HeaderListProducts />
          <ContainerListProducts>
            <ContainerCartDetail>
              <CartDetail products={products} />
            </ContainerCartDetail>
            <div>
              <OrderSummary  />
            </div>
          </ContainerListProducts>
        </>
      ) : (
        <NotCart />
      )}
    </>
  );
}
