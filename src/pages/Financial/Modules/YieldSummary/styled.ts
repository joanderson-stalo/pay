
import styled from "styled-components";


interface Color {
  primary: string;
  secundary: string;
}

export const Container = styled.div`
  margin: 36px 20px 20px 20px;

`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 480px) {
  gap: 12px;
  }
`

export const Title = styled.h1<Color>`
color: ${(props) => props.secundary};
font-size: 24px;
font-weight: 700;
margin-bottom: 36px;

@media (max-width: 600px) {
  font-size: 16px;
}

`

export const ContainerSelect = styled.div`
display: flex;
align-items: center;
gap: 20px;
margin: 36px 0px;

@media (max-width: 900px) {
  flex-wrap: wrap;
  justify-content: center;
}

`


export const ConsultarBtn = styled.button<Color>`
border-radius: 5px;
border: 0.5px solid ${(props) => props.secundary};
background: ${(props) => props.secundary};

height: 44px;
padding: 14px 24px;

color: #FFF;
font-size: 14px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0.5px;
margin-top: 30px;

`

export const ExportarBtn = styled(ConsultarBtn)<Color>`
  color:  ${(props) => props.primary};
  border-radius: 5px;
border: 0.5px solid #F5F4F4;
background: #FFF;
white-space: nowrap;
`

export const ContainerCards = styled.div`
  display: flex;
  gap: 20px;
margin: 36px 0;

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

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`



export const Linha = styled.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`


export const ContainerPagina = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
