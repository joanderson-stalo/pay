import { useTenantData } from "@/context";
import * as S from "./styled";

interface CardInfoProps {
  net_amount: string | undefined;
}

export function CardInfo({net_amount} : CardInfoProps) {
  const tenantData = useTenantData();

  return(
    <S.ContainerCardInfo  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>

      <section>
      <p>Valor Líquido</p>
      <span>{net_amount}</span>
      </section>
    </S.ContainerCardInfo>
  )
}
