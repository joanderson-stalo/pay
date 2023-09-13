import styled from "styled-components"


export const ContainerCardInfo = styled.div`
  width: 100%;
  max-width: 170px;
height: 75px;
border-radius: 8px;
background:  #FDFDFD;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> section{
  > p {
    color:  #ADADAD;
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
