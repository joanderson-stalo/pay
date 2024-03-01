import { CustomTable } from "./components/Table/table";
import { ButtonBlack, ContainerManageAccessLicensed } from "./styles";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function ManageAccessEstablishment(){
  const navigate = useNavigate()

  const handleEstablishmentdetail = () => {
    navigate('/establishmentdetail')
  }


  const mockData = [
    {
        id: 1,
        name: "John Doe",
        profile_id: "Administrador",
        email: "john.doe@example.com"
    },
];



  return(
    <>
    <ContainerManageAccessLicensed>
      <ButtonBlack onClick={handleEstablishmentdetail}><CaretLeft size={18} />Voltar</ButtonBlack>
      <CustomTable data={mockData} />
      </ContainerManageAccessLicensed>
    </>
  )
}
