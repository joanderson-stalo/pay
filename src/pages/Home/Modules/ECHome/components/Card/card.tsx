import * as S from "./styled";

interface ICard {
  label: string;
  label2: string;
}


export function Card({label, label2}: ICard){
  return(
    <S.CardContainer>
        <p>{label}</p> <span>{label2}</span>
    </S.CardContainer>
  )
}
