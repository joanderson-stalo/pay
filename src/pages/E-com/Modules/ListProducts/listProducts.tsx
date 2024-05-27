import { CardProduct } from "@/components/Ecom/CardProduct/cardProduct";
import { ContainerListProducts } from "./styled";
import { mockProducts } from "../../mock/mockProducts";
import { HeaderListProducts } from "./components/HeaderListProducts/headerListProducts";

export function ListProducts() {

  return (
    <>
      <HeaderListProducts />
    <ContainerListProducts>
      <CardProduct data={mockProducts} />
      </ContainerListProducts>
    </>
  );
}
