import { CaretLeft, DownloadSimple } from "@phosphor-icons/react";
import { CustomButton } from "./components/customButton";
import { ButtonBlack, Container, ContainerButton, Title } from "./styled";
import { useNavigate } from "react-router-dom";

export function AddRate(){
 const navigate = useNavigate()

  const handleImportSpreadsheet = () => {
    navigate('/importSpreadsheet');
  };

  return(
    <>
    <ContainerButton>
    <ButtonBlack><CaretLeft size={18} />Voltar</ButtonBlack>
    <Title>Adicionar Tarifa</Title>
    </ContainerButton>
    <Container>
    <CustomButton  />
      <CustomButton onClick={handleImportSpreadsheet} icon={<DownloadSimple  weight="fill" />} text="Importar Planilha"  />
    </Container>
    </>
  )
}
