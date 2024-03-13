import { FunnelSimple } from "@phosphor-icons/react";
import { ButtonFilter } from "./styled";

interface IBtnFilter {
  onClick: () => void;
}

export function BtnFilter({onClick}: IBtnFilter){
  return(
    <>
      <ButtonFilter type="button" onClick={onClick}>
         <FunnelSimple />Filtrar
      </ButtonFilter>
    </>
  )
}
