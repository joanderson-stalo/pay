import { Cart } from "@/components/Ecom/Cart/cart";
import { TitleH } from "@/components/Title/title";
import { HeaderContainer } from "./styled";



export function HeaderListProducts() {


  return (
    <>
    < HeaderContainer>
      <TitleH title='Aquisição de equipamentos' />
      <Cart />
    </HeaderContainer>
    </>
  );
}
