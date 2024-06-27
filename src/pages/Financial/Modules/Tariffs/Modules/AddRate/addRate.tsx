import { CaretLeft, DownloadSimple } from "@phosphor-icons/react";
import { CustomButton } from "./components/customButton";
import { ButtonBlack, Container, ContainerButton, Title } from "./styled";
import { useNavigate } from "react-router-dom";
import { TitleH } from "@/components/Title/title";
import { useTenantData } from "@/context";
import { ArrowBack } from "@/components/BtnArrowBack/btnArrowBack";

export function AddRate(){
 const navigate = useNavigate()

  const handleImportSpreadsheet = () => {
    navigate('/importSpreadsheet');
  };


  const handleAddRateManual = () => {
    navigate('/addRateManual');
  };



  const tenantData = useTenantData();


  return(
    <>
    <ContainerButton>
      <ArrowBack/>
      <TitleH title='Adicionar tarifa' />
    </ContainerButton>
    <Container>
    <CustomButton onClick={handleAddRateManual} />
      <CustomButton onClick={handleImportSpreadsheet} icon={<DownloadSimple  weight="fill" />} text="Importar Planilha"  />
    </Container>
    </>
  )
}
