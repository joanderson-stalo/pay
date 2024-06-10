import styled from "styled-components";

export const ContainerListProducts = styled.div`
  margin: 36px 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

`

export const ContainerCartDetail = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`

export const ContainerTag = styled.div`
border-radius: 4px;
background:  rgba(205, 123, 0, 0.10);
padding: 10px 16px;
display: flex;
align-items: center;
justify-content: space-between;

> div{
  display: flex;
  align-items: center;
   p {
  color:  #202124;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
}
}

> button {
  color:  #007EC5;

font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
text-decoration-line: underline;
background-color: transparent;
}
`


export const ButtonBack = styled.button`
color: #202124;

font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
text-align: start;
align-items: center;

background-color: transparent;

> svg {
  width: 20px;
  height: 20px;
}
`
