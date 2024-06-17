import { CaretLeft } from "@phosphor-icons/react";
import * as S from './styled'

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}

export function ArrowBack ({...rest}: PropsButton)  {
  return(
    <>

    <S.ContainerButtonBack {...rest}>
      <CaretLeft size={32} />
    </S.ContainerButtonBack>





    </>
  )
}
