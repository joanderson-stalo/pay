import { ThemeColor } from "@/config/color"
import styled from "styled-components"


export const ContainerCardInfo = styled.div`
  width: 100%;
  max-width: 170px;
height: 75px;
border-radius: 8px;
background:  ${ThemeColor.primaria};

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
