import styled from "styled-components";

export const ButtonTitle = styled.h3`
  color:  #3C0A6D;
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
  border: 0.5px solid var(--Foundation-PagueAssim01-Normal, #3C0A6D);
  background-color: #FFF;
  border-radius: 5px;

  &:hover {
    background-color: #3C0A6D;
    border: 0.5px solid #FFF;

     ${ButtonTitle} {
      color: #FFF;
    }
  }
`


