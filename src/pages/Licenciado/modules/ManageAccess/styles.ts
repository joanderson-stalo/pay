
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
margin-bottom: 40px;
`
