import * as S from "./styled";

interface CardInfo2Props {
  spread: string | undefined;
}

export function CardInfo2({spread}: CardInfo2Props ){
  return(
    <S.ContainerCardInfo>
      <section>
      <p>Spread da Rede</p>
      <span>R$ {spread}</span>
      </section>
    </S.ContainerCardInfo>
  )
}
