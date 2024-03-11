import { ThemeColor } from "@/config/color";
import styled from "styled-components";


export const BtnAdvanceContainer = styled.button`
  padding: 8px 24px;
  background: ${ThemeColor.secundaria};
  border-radius: 4px;
background: ${ThemeColor.primaria};
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
