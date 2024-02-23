import {ButtonContainer, ButtonTitle} from "./styled";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export function ExportData({onClick, title}: ButtonProps){
  return(
    <>
    <ButtonContainer onClick={onClick}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
    </>
  )
}
