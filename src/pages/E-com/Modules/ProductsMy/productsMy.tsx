import { MyRequestsComponents } from "@/components/Ecom/MyRequestsComponents/myRequestsComponents";
import { HeaderListProducts } from "./components/HeaderListProducts/headerListProducts";
import { ContainerListProducts } from "./styled";

export function ProductsMy(){
  return(
    <>
      <HeaderListProducts />
      <ContainerListProducts>
        <MyRequestsComponents />
        
      </ContainerListProducts>
    </>
  )
}
