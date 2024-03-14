
import styled from "styled-components";
interface Color {
  primary: string;
  secundary: string;
}

export const ButtonTitle = styled.h3<Color>`
  color:   ${(props) => props.primary};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font_medium};
  line-height: 16px;
  letter-spacing: 0.5px;
`

export const ButtonContainer = styled.button<Color>`
  display: inline-flex;
  padding: 9.5px 16px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid ${(props) => props.primary};
  background-color: #FFF;
  border-radius: 5px;

  &:hover {
    background-color:  ${(props) => props.primary};
    border: 0.5px solid #FFF;

     ${ButtonTitle} {
      color: #FFF;
    }
  }

  @media (max-width: 900px) {
    padding: 6px 16px;
    font-size: 10px;
  }
`


