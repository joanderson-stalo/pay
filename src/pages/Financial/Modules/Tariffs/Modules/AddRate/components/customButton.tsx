import { ReactNode } from 'react';
import { Pencil } from "@phosphor-icons/react";
import { ContainerButton } from "./styled";

interface CustomButtonProps {
  onClick?: () => void;  
  icon?: ReactNode;     
  text?: string;        
}

export function CustomButton({ onClick, icon = <Pencil weight="fill" />, text = "Adicionar Manualmente" }: CustomButtonProps) {
  return (
    <>
      <ContainerButton type="button" onClick={onClick}>
        {icon}
        <h2>{text}</h2>
      </ContainerButton>
    </>
  )
}
