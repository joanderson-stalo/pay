import { useTenantData } from "@/context";
import { BtnReturnContainer } from "./styled";

interface BtnReturnProps {
  onClick: () => void;
  title: string;
}

export function BtnReturn({onClick, title}: BtnReturnProps){
  const tenantData = useTenantData();

  return(
    <BtnReturnContainer primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={onClick}>
      {title}
    </BtnReturnContainer>
  )
}





