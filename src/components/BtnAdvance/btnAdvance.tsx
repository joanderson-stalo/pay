import { ButtonHTMLAttributes } from 'react';
import { useTenantData } from "@/context";
import { BtnAdvanceContainer } from "./styled";

interface BtnAdvanceProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  title: string;
}

export function BtnAdvance({onClick, title, ...rest}: BtnAdvanceProps){
  const tenantData = useTenantData();

  return(
    <BtnAdvanceContainer {...rest} primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={onClick}>
      {title}
    </BtnAdvanceContainer>
  )
}





