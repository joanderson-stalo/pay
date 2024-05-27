import {  ContainerIconWrapper, ContainerInfo, ContainerInfoWrapper, ContainerInfoWrapperItem, ContainerListProducts, Wrapper, WrapperContext } from "./styled";
import { PaymentsSuccess } from "./Modules/PaymentsSucess/paymentsCart";
import { BreadcrumbIcon } from "@/components/Ecom/BreadcrumbIcon/breadcrumbIcon";



export function PaymentsDetail() {

  return (
    <>


      <ContainerListProducts>



        <Wrapper>
          <WrapperContext>
            <h1>Pedido realizado com sucesso!</h1>
            <p>Número do pedido #90283298347</p>
          </WrapperContext>

          <button>Ver todos meus pedidos</button>
        </Wrapper>


        <ContainerInfo>
            <ContainerInfoWrapper>
            <p>ID da compra: 34238743</p> <span>|</span> <p>ID do usuário: 2983827391</p>
            </ContainerInfoWrapper>

            <ContainerInfoWrapperItem>
              <h3>Status:</h3> <span> Pedido em separação</span>
            </ContainerInfoWrapperItem>
              <p>Data de entrega estimada: 04/10/2024</p>
        </ContainerInfo>


      <ContainerIconWrapper>
      <BreadcrumbIcon etapa={3} />
      </ContainerIconWrapper>

      <PaymentsSuccess />
      </ContainerListProducts>



    </>
  );
}
