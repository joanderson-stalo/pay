import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}


export const BtnAdvanceContainer = styled.button<Color>`
  padding: 0 24px;
  height: 40px;
  background: ${(props) => props.primary};
  border: 0.5px solid ${(props) => props.primary};
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 15.566px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #ffffff;
  align-self: flex-end;


  :disabled {
    background-color: #E3E3E3;
    color: #5F6367;
    border: none;
  }
`;
