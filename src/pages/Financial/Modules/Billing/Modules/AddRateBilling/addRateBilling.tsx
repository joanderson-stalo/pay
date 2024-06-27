import { CaretLeft, DownloadSimple } from "@phosphor-icons/react";
import { CustomButton } from "./components/customButton";
import { ButtonBlack, Container, ContainerButton, Title } from "./styled";
import { useNavigate } from "react-router-dom";
import { TitleH } from "@/components/Title/title";
import { useTenantData } from "@/context";
import { ArrowBack } from "@/components/BtnArrowBack/btnArrowBack";

export function AddRateBilling(){
 const navigate = useNavigate()

  const handleImportSpreadsheet = () => {
    navigate('/billingImport');
  };


  const handleAddRateManual = () => {
    navigate('/billingAddRateManual');
  };





  return(
    <>
    <ContainerButton>
      <ArrowBack/>

    <TitleH title='Adicionar Solicitações de Cobrança' />
    </ContainerButton>
    <Container>
    <CustomButton onClick={handleAddRateManual} />
      <CustomButton onClick={handleImportSpreadsheet} icon={<DownloadSimple  weight="fill" />} text="Importar Planilha"  />
    </Container>
    </>
  )
}
