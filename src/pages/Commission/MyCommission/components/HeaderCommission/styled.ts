

import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}

  export const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 36px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 600px){
      margin-bottom: 26px;
    }
  `;


  export const Button = styled.button<Color>`
    display: flex;
    width: 213px;
    height: 35px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0.5px solid #0086ED;
    background: ${(props) => props.secundary};
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.5px;
  `;

export const Title = styled.h2<Color>`
color: ${(props) => props.secundary};
font-size: 24px;
font-weight: 700;
line-height: normal;

@media (max-width: 600px) {
font-size: 16px;
}
`;


export const ContainerPJPF = styled.div`

@media (max-width: 600px) {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: start;
  margin-top: 20px;
}

`;



export const ButtonPJ = styled.button<{active: boolean, primary: string}>`
padding: 7px 18px;
background-color: ${({ active, primary }) => active ? primary : '#E6E6E6'};

  color: ${({ active }) => (active ? 'white' : 'black')};


  border-radius: ${({ active }) => (active ? '4px' : '4px 1px 1px 4px')} ;

  position: ${({ active }) => (active ? 'relative' : '')};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`;

export const ButtonPF = styled.button<{active: boolean, primary: string}>`
padding: 7px 18px;
background-color: ${({ active, primary }) => active ? primary : '#E6E6E6'};
  color: ${({ active }) => (active ? 'white' : 'black')};


  border-radius: ${({ active }) => (active ? '4px' : '1px 4px 4px 1px')} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`;


export const ButtonToday = styled.button<{active: boolean, primary: string}>`
padding: 7px 18px;
background-color: ${({ active, primary }) => active ? primary : '#E6E6E6'};

  color: ${({ active }) => (active ? 'white' : 'black')};


  border-radius: ${({ active }) => (active ? '4px 0px 0px 4px' : '4px 1px 1px 4px')} ;

  position: ${({ active }) => (active ? 'relative' : '')};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

@media (max-width: 600px) {
  z-index: 4;
}
`;
