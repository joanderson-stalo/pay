import { BtnAdvanceContainer } from "./styled";

interface BtnAdvanceProps {
  onClick: () => void;
  title: string;
}

export function BtnAdvance({onClick, title}: BtnAdvanceProps){
  return(
    <BtnAdvanceContainer onClick={onClick}>
      {title}
    </BtnAdvanceContainer>
  )
}
