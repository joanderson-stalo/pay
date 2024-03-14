
import styled from "styled-components";

export const ErrorMessage = styled.li<{ success?: boolean, secundary: string }>`
  font-size: 14px;
  font-weight: bold;
  list-style-type: disc;
  color: ${({ theme, success,  secundary }) => (success ?  secundary : `${theme.neutral_normal}`)};
`

export const StyledP = styled.p<{ success?: boolean, secundary: string }>`
font-size: 16px;
font-weight: bold;
margin-bottom: 16px;
color: ${({ success, theme, secundary }) => (success ? secundary : `${theme.neutral_normal}`)};
`;

