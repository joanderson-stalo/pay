import { CaretLeft, DownloadSimple } from "@phosphor-icons/react";
import { CustomButton } from "./components/customButton";
import { ButtonBlack, Container, ContainerButton, Title } from "./styled";
import { useNavigate } from "react-router-dom";
import { TitleH } from "@/components/Title/title";

export function AddRate(){
 const navigate = useNavigate()

  const handleImportSpreadsheet = () => {
    navigate('/importSpreadsheet');
  };

  
  const handleAddRateManual = () => {
    navigate('/addRateManual');
  };


  const handleBack = () => {
    navigate('/tariffs');
  };


  return(
    <>
    <ContainerButton>
    <ButtonBlack onClick={handleBack}><CaretLeft size={18} />Voltar</ButtonBlack>
    <TitleH title='Adicionar Tarifa' />
    </ContainerButton>
    <Container>
    <CustomButton onClick={handleAddRateManual} />
      <CustomButton onClick={handleImportSpreadsheet} icon={<DownloadSimple  weight="fill" />} text="Importar Planilha"  />
    </Container>
    </>
  )
}
