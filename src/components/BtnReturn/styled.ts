import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}


export const BtnReturnContainer = styled.button<Color>`
  padding: 0 24px;
  height: 40px;
  background: #FFFFFF;
  border: 0.5px solid ${(props) => props.primary};
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 15.566px;
  letter-spacing: 0.5px;
  color: ${(props) => props.primary};
`;
