import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Span = styled.span`
color:  #6C757D;
font-size: 10.768px;
line-height: 16.922px;
`

export const InputPage = styled.input`
    width: 39.228px;
height: 23.075px;
flex-shrink: 0;

border-radius: 3.077px;
border: 0.769px solid #DFDFDF;
background:  #FFF;


color:  #343A40;
font-size: 10.768px;
line-height: 16.922px;
text-align: center;
appearance: textfield;
`
