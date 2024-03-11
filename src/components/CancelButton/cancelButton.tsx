import { CancelButtonContainer } from "./styled";

interface CancelButtonProps {
  onClick: () => void;
  title: string;
}

export function CancelButton({onClick, title}: CancelButtonProps){
  return(
    <CancelButtonContainer onClick={onClick}>
        {title}
    </CancelButtonContainer>
  )
}
