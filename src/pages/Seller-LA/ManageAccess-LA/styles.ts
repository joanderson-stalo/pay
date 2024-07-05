
import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}

export const ContainerManageAccessLicensed = styled.div`
  margin: 36px 20px 20px 20px;

`
export const ButtonBlack = styled.button<Color>`
  color: ${(props) => props.primary};

font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
background-color: transparent;

display: flex;

`
export const ContainerAcesso = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;
`

export const ContainerTitle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`

export const Button = styled.button`
border-radius: 4px;
background: #3C0A6D;
padding: 14px 24px;
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;
text-transform: uppercase;

@media (max-width: 480px){
  padding: 8px 18px;
}
`;
