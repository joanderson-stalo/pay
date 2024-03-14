import { FunnelSimple } from "@phosphor-icons/react";
import { ButtonFilter } from "./styled";
import { useTenantData } from "@/context";

interface IBtnFilter {
  onClick: () => void;
}

export function BtnFilter({onClick}: IBtnFilter){
  const tenantData = useTenantData();

  return(
    <>
      <ButtonFilter  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
  type="button" onClick={onClick}>
         <FunnelSimple />Filtrar
      </ButtonFilter>
    </>
  )
}
