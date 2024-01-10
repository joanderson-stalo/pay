import { CaretLeft, DownloadSimple } from "@phosphor-icons/react";
import { CustomButton } from "./components/customButton";
import { ButtonBlack, Container, ContainerButton, Title } from "./styled";

export function AddRate(){
  return(
    <>
    <ContainerButton>
    <ButtonBlack><CaretLeft size={18} />Voltar</ButtonBlack>
    <Title>Adicionar Tarifa</Title>
    </ContainerButton>
    <Container>
    <CustomButton  />
      <CustomButton icon={<DownloadSimple  weight="fill" />} text="Importar Planilha"  />
    </Container>
    </>
  )
}