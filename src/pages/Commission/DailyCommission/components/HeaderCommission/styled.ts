  import styled from 'styled-components';

  export const Container = styled.div`
    margin-top: 30px;

    display: flex;
    justify-content: space-between;
  `;


  export const Button = styled.button`
    display: flex;
    width: 213px;
    height: 35px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0.5px solid #0086ED;
    background: #00A3D7;
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.5px;
  `;

  export const Title = styled.h2`
    color: #00A3D7;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  `;


export const ContainerPJPF = styled.div`

`;

export const ButtonPJ = styled.button<{active: boolean}>`
padding: 7px 18px;
  background-color: ${({ active }) => (active ? '#08BBE9' : '#E6E6E6')};

  color: ${({ active }) => (active ? 'white' : 'black')};


  border-radius: ${({ active }) => (active ? '8px' : '8px 1px 1px 8px')} ;

  position: ${({ active }) => (active ? 'relative' : '')};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`;

export const ButtonPF = styled.button<{active: boolean}>`
padding: 7px 18px;
  background-color: ${({ active }) => (active ? '#08BBE9' : '#E6E6E6')};
  color: ${({ active }) => (active ? 'white' : 'black')};


  border-radius: ${({ active }) => (active ? '8px' : '1px 8px 8px 1px')} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`;
