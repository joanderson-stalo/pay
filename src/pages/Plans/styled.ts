
import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}

export const Container = styled.div`

margin: 36px 20px 20px 20px;
`


export const ContainerCardVendas = styled.div`
  display: flex;
  gap: 20px;
  margin: 45px 0 45px 0;

`



export const Title = styled.div<Color>`
  color: ${(props) => props.secundary};
font-size: 24px;
font-weight: 700;
margin-top: 30px;
`

export const Input = styled.div`
position: relative;
display: flex;
align-items: center;
width: 525px;
height: 44px;
border-radius: 4px;
border: 1px solid #E2E2E2;
background: #FFF;
padding: 10px 16px;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: #9B959F;
padding-right: 15px;

> input {
      width: 100%;
      padding-right: 40px;

      color:  #9B959F;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
}

.search-icon {
  position: absolute;
  right: 20px;
  color: #000;
}
`;

export const SearchIcon = styled.span`
display: flex;
align-items: center;
justify-content: center;
color: #9B959F;
font-size: 21px;
cursor: pointer;
svg {
width: 21.429px;
height: 21.429px;
}
`;



export const Linha = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.1);
  margin-top: 15px;
  width: 100%;
`
export const Context = styled.div`

`

export const ContainerPagina = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: row;
`
export const ContainerButton = styled.div`
  display: flex;
  margin-top: 35px;
`
export const ButtonTotal = styled.button`
  width: 118px;
height: 35px;


border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-style: normal;
font-weight: 500;
`

export const ButtonFilter = styled.button`
color: #676767;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

width: 76px;
height: 35px;

border-radius: 6px 6px 0px 0px;
border: 0.5px solid #F7F7F7;
opacity: 0.5;
background:  #F7F7F7;



display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`


export const ContainerCardsMobile = styled.div`
  flex-direction: column;
  gap: 12px;

  display: none;


  @media (max-width: 900px) {
    display: flex;
  }
`