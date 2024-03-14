import { useTenantData } from "@/context";
import { BtnAdvanceContainer } from "./styled";

interface BtnAdvanceProps {
  onClick: () => void;
  title: string;
}

export function BtnAdvance({onClick, title}: BtnAdvanceProps){
  const tenantData = useTenantData();

  return(
    <BtnAdvanceContainer primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={onClick}>
      {title}
    </BtnAdvanceContainer>
  )
}
