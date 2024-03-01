import { ThemeColor } from "@/config/color";
import styled from "styled-components";


export const Container = styled.div`
  margin: 36px 20px 20px 20px;

`

export const Title = styled.h1`
color: ${ThemeColor.secundaria};
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
margin-bottom: 36px;

@media (max-width: 900px) {
  flex-wrap: wrap;
  justify-content: center;
}

`


export const ConsultarBtn = styled.button`
border-radius: 5px;
border: 0.5px solid ${ThemeColor.secundaria};
background:  ${ThemeColor.secundaria};

height: 44px;
padding: 14px 24px;

color: #FFF;
font-size: 14px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0.5px;
margin-top: 30px;

`

export const ExportarBtn = styled(ConsultarBtn)`
  color: ${ThemeColor.primaria};
  border-radius: 5px;
border: 0.5px solid #F5F4F4;
background: #FFF;
white-space: nowrap;
`

export const ContainerCards = styled.div`
  display: flex;
  gap: 20px;
margin-bottom: 36px;

@media (max-width: 900px) {
  flex-wrap: wrap;
  justify-content: center;
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

