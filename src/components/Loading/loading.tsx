import { useTenantData } from "@/context";
import { LoadingContainer } from "./styled";
import RingLoader from "react-spinners/RingLoader";

export function Loading(){
  const tenantData = useTenantData();

  return(
    <LoadingContainer
    >
      <RingLoader color="white" />
    </LoadingContainer>
  )
}
