import styled from "styled-components";


export const Container = styled.div`
  margin: 36px 20px 20px 20px;

`


export const ContainerButton = styled.div`
  display: flex;
  margin-top: 36px;
  margin-bottom: 32px;
  gap: 16px;
  flex-wrap: wrap;

  @media(max-width: 600px){
    flex-direction: column;
    align-items: start;
  }
`

export const Linha = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.1);
  margin-top: 15px;
  width: 100%;
`
export const Context = styled.div`
  margin-top: 45px;
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
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

width: 76px;
height: 35px;

border-radius: 6px 6px 0px 0px;
border: 0.5px solid #F7F7F7;
background:  #F7F7F7;



display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const Button = styled.button`
  color: #5A6ACF;
  font-size: 8.4768px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
`;


export const ContainerCard = styled.div`
display: flex;
margin: 36px 0 ;
gap: 20px;

@media (max-width: 900px) {
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 600px) {
     gap: 12px;
  }
`

export const ContainerCardsMobile = styled.div`
  flex-direction: column;
  gap: 12px;

  display: none;


  @media (max-width: 900px) {
    display: flex;
  }
`
