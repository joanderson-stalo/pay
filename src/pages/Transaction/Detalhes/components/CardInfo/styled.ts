
import styled from "styled-components"


interface Color {
  primary: string;
  secundary: string;
}

export const ContainerCardInfo = styled.div<Color>`
  width: 100%;
  max-width: 212px;
height: 75px;
border-radius: 8px;
background:   ${(props) => props.primary};

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> section{
  > p {
  color:  #FFF;
font-size: 16px;
font-weight: 700;
}

> span {
  color:  #08BBE9;
font-size: 16px;
font-weight: 500;
}
}
`
