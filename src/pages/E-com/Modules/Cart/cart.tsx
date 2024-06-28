import { ContainerCartDetail, ContainerListProducts, ContainerTag, ContentTitle, ContentWarning, SubTitle } from "./styled";
import { HeaderListProducts } from "./components/HeaderListProducts/headerListProducts";
import { CartDetail } from "@/components/Ecom/CartDetail/cartDetail";
import { useCart } from "@/context/e-com/cart";
import { OrderSummary } from "@/components/Ecom/OrderSummary/orderSummary";
import { NotCart } from "@/components/Ecom/Not-Cart/notCart";
import { CaretLeft, WarningCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@/components/BtnArrowBack/btnArrowBack";

interface Product {
  id: number;
  sales_value: number;
  name: string;
  link_image_cover: string;
  quantity: string;
}

export function Cart() {
  const {  cartItems } = useCart();
  const navigate = useNavigate();

  const products: Product[] = cartItems.map(item => ({
    ...item,
    quantity: item.quantity !== undefined ? item.quantity : '1'
  }));

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {products.length > 0 ? (
        <>
          <HeaderListProducts />
          <ContainerListProducts>
            <ContainerCartDetail>

              <ContentTitle>
                <ArrowBack/>
                <SubTitle>Carrinho de compras</SubTitle>
              </ContentTitle>

              <ContainerTag>
                <ContentWarning>
                <WarningCircle  style={{ marginRight: 8 }} />
                <p>Não esqueça de adicionar os produtos periféricos como carregadores e chips</p>
                </ContentWarning>

              <button onClick={handleBack} type="button" >comprar periféricos</button>
              </ContainerTag>

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
