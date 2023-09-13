import styled from "styled-components";

export const ContainerArvore = styled.div`
  padding: 30px 44px;
`

export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;


  > h2 {
    color: #00A3D7;
    font-size: 24px;
    font-weight: 700;
  }

`


export const ContainerCardBig = styled.div`
  display: flex;
  gap: 40px;
`

export const ContainerCard = styled.div`
  display: flex;
  margin-top: 55px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  border-right: 1px solid #eee;

  &:last-child {
    border-right: none;
  }

  > h3 {
    color: #1E1E1E;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 20px;
    font-weight: 500;
    line-height: 26.723px;
    height: 40px;
  }

  > span {
    color: #717171;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    height: 80px;
  }
`;

export const ContainerCardS = styled.div`
  margin-bottom: 35px;

  &:first-of-type {
    margin-top: 27px;
  }

  &:last-of-type {
    margin-bottom: 40; 
  }
`;





export const ContainerPJPF = styled.div`
  display: flex;
  justify-content: row;
`;

export const ButtonPJ = styled.button<{active: boolean}>`
  width: 50px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ active }) => (active ? '#08BBE9' : '#E6E6E6')};

  color: ${({ active }) => (active ? 'white' : 'black')};


  border-radius: ${({ active }) => (active ? '8px' : '8px 1px 1px 8px')} ;

  position: ${({ active }) => (active ? 'relative' : '')};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

> img {
  width: 13.091px;
height: 16px;
}
`;

export const ButtonPF = styled.button<{active: boolean}>`
  width: 50px;
  height: 34px;
  background-color: ${({ active }) => (active ? '#08BBE9' : '#E6E6E6')};
  color: ${({ active }) => (active ? 'white' : 'black')};


  border-radius: ${({ active }) => (active ? '8px' : '1px 8px 8px 1px')} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

display: flex;
  justify-content: center;
  align-items: center;

> img {
  width: 13.091px;
height: 16px;
}
`;
