import { useDetailLicensed } from "@/hooks/useDetailLicensed";
import { CustomTable } from "./components/Table/table";
import { ButtonBlack, ContainerManageAccessLicensed } from "./styles";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function ManageAccessLicensed(){
  const {licensedNumber} = useDetailLicensed()

  const navigate = useNavigate()


  const mockData = [
    {
        id: 1,
        name: "John Doe",
        profile_id: "Administrador",
        email: "john.doe@example.com"
    },
];

const handleEstablishmentdetail = () => {
  navigate('/licenseddetail')
}


  return(
    <>
    <ContainerManageAccessLicensed>
    <ButtonBlack onClick={handleEstablishmentdetail}><CaretLeft size={18} />Voltar</ButtonBlack>
      <CustomTable data={mockData} />
      </ContainerManageAccessLicensed>
    </>
  )
}
