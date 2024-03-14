import { ReactNode } from 'react';
import { Pencil } from "@phosphor-icons/react";
import { ContainerButton } from "./styled";
import { useTenantData } from '@/context';

interface CustomButtonProps {
  onClick?: () => void;  
  icon?: ReactNode;     
  text?: string;        
}

export function CustomButton({ onClick, icon = <Pencil weight="fill" />, text = "Adicionar Manualmente" }: CustomButtonProps) {
  const tenantData = useTenantData();
  return (
    <>
      <ContainerButton  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type="button" onClick={onClick}>
        {icon}
        <h2>{text}</h2>
      </ContainerButton>
    </>
  )
}
