import styled from "styled-components";

export const ContainerButtonBack = styled.button`

background-color: transparent;
display: flex;

>svg{
  width: 32px;
  height: 32px;
}

@media (max-width: 600px){
  >svg{
  width: 24px;
  height: 24px;
}
}

`
