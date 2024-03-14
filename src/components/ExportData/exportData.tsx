import { useTenantData } from "@/context";
import {ButtonContainer, ButtonTitle} from "./styled";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export function ExportData({onClick, title}: ButtonProps){
  const tenantData = useTenantData();

  return(
    <>
    <ButtonContainer  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
 onClick={onClick}>
      <ButtonTitle  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
>{title}</ButtonTitle>
    </ButtonContainer>
    </>
  )
}
