import * as S from "./styled";

interface CardInfoProps {
  net_amount: string | undefined;
}

export function CardInfo({net_amount} : CardInfoProps) {
  return(
    <S.ContainerCardInfo>
      <section>
      <p>Valor Líquido</p>
      <span>{net_amount}</span>
      </section>
    </S.ContainerCardInfo>
  )
}
