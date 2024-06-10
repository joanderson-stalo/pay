
import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}


export const Container = styled.div`
display: flex;
justify-content: center;

gap: 50px;
margin: 0px 20px 20px 20px;

@media (max-width: 900px) {
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
`



export const ContainerButton = styled.div`
display: flex;
flex-direction: column;
gap: 36px;
margin: 36px 20px 0px 20px;

@media (max-width: 900px) {
  gap: 26px;
}

`

export const ButtonBlack = styled.button<Color>`
  color:  ${(props) => props.primary};
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
background-color: transparent;

display: flex;
`


export const Title = styled.h2<Color>`
color: ${(props) => props.secundary};
font-size: 24px;
font-weight: 700;
line-height: normal;

@media (max-width: 600px) {
font-size: 16px;
}
`;