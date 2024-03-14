import { useTenantData } from "@/context";
import { CancelButtonContainer } from "./styled";

interface CancelButtonProps {
  onClick: () => void;
  title: string;
}

export function CancelButton({onClick, title}: CancelButtonProps){
  const tenantData = useTenantData();

  return(
    <CancelButtonContainer  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={onClick}>
        {title}
    </CancelButtonContainer>
  )
}
