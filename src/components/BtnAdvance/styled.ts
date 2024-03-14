import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}


export const BtnAdvanceContainer = styled.button<Color>`
  padding: 8px 24px;
  background: ${(props) => props.secundary};;
  border-radius: 4px;
background: ${(props) => props.primary};
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #FFFFFF;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`;
