import { useDetailLicensed } from "@/hooks/useDetailLicensed";
import { CustomTable } from "./components/Table/table";
import { ContainerManageAccessLicensed } from "./styles";

export function ManageAccessLicensed(){
  const {licensedNumber} = useDetailLicensed()


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
      <CustomTable data={mockData} />
      </ContainerManageAccessLicensed>
    </>
  )
}
