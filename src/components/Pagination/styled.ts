import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

`;

export const Page = styled.span`
  cursor: pointer;
border-radius: 3.077px;
background-color: #FFF;

width: 23.075px;
height: 23.075px;
font-size: 10.768px;

display: flex;
  justify-content: center;
  align-items: center;

  z-index: 5;
`;

export const CurrentPage = styled(Page)`
  font-weight: bold;
  border-radius: 1.538px;
  background: #3C0A6D;

  font-weight: 400;
color: #FFF;
font-size: 10.768px
`;

export const Button = styled.button`
  background-color: #DFDFDF;
  width: 23.075px;
  height: 23.075px;
  border-radius: 1.538px;


  svg {
    font-size: 12px;

  }

  &:disabled {
    background-color: #FBFBFB;
  }
`;
