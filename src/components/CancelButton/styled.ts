
import styled from "styled-components";


interface Color {
  primary: string;
  secundary: string;
}

export const CancelButtonContainer = styled.button<Color>`

  background: #FFFFFF;
  border: 0.5px solid #F5F4F4;
  border-radius: 5px;
  font-weight: 500;
  padding: 8px 24px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color:  ${(props) => props.primary};

  border-radius: 4px;
border: 1px solid  ${(props) => props.primary};
`;


export const ButtonAvançar = styled.button<Color>`
  padding: 8px 24px;
  background: ${(props) => props.secundary};
  border-radius: 4px;
background:  ${(props) => props.primary};
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
