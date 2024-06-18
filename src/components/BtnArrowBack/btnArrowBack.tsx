import { CaretLeft } from "@phosphor-icons/react";
import * as S from './styled'
import { useNavigate } from "react-router-dom";

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ArrowBack ({...rest}: PropsButton)  {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <S.ContainerButtonBack {...rest} onClick={handleGoBack}>
      <CaretLeft />
    </S.ContainerButtonBack>
  )
}
