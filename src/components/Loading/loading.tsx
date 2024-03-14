import { useTenantData } from "@/context";
import { LoadingContainer } from "./styled";
import GridLoader from "react-spinners/GridLoader";

export function Loading(){
  const tenantData = useTenantData();

  return(
    <LoadingContainer 
    >
      <GridLoader color="white" />
    </LoadingContainer>
  )
}
