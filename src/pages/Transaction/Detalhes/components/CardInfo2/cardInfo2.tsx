import { useTenantData } from "@/context";
import * as S from "./styled";

interface CardInfo2Props {
  spread: string | undefined;
}

export function CardInfo2({spread}: CardInfo2Props ){
  const tenantData = useTenantData()
  return(
    <S.ContainerCardInfo
    primary={tenantData.primary_color_identity}
          secundary={tenantData.secondary_color_identity}
    >
      <section>
      <p>Spread da Rede</p>
      <span>{spread}</span>
      </section>
    </S.ContainerCardInfo>
  )
}
