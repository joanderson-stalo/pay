import { ThemeColor } from "@/config/color";
import styled from "styled-components";

export const ButtonTitle = styled.h3`
  color:  ${ThemeColor.primaria};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font_medium};
  line-height: 16px;
  letter-spacing: 0.5px;
`

export const ButtonContainer = styled.button`
  display: inline-flex;
  padding: 9.5px 16px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid ${ThemeColor.primaria};
  background-color: #FFF;
  border-radius: 5px;

  &:hover {
    background-color: ${ThemeColor.primaria};
    border: 0.5px solid #FFF;

     ${ButtonTitle} {
      color: #FFF;
    }
  }
`


