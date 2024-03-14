

import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}
export const ButtonFilter = styled.button<Color>`

padding: 8px 22px;
border-radius: 4px;
border: 1px solid  ${(props) => props.primary};
background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  color:  ${(props) => props.primary};
font-size: 12px;
font-weight: 700;
line-height: 15.566px;
cursor: pointer;

@media (max-width: 900px) {
    padding: 6px 16px;
    font-size: 10px;
    z-index: 5;
  }

`
