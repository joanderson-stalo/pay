import React from 'react';
import { useTenantData } from "@/context";
import { BtnAdvanceContainer } from "./styled";


interface BtnAdvanceProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function BtnAdvance({ title, ...props }: BtnAdvanceProps) {
  const tenantData = useTenantData();

  return(
    <BtnAdvanceContainer
      primary={tenantData.primary_color_identity}
      secundary={tenantData.secondary_color_identity}
      {...props}
    >
      {title}
    </BtnAdvanceContainer>
  );
}
