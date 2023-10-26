import { ThemeColor } from '@/config/color'
import styled from 'styled-components'

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 44px 0 44px;
`

export const Title = styled.p`
  color: ${ThemeColor.secundaria};
  font-size: 24px;
  font-weight: 700;

  > span {
    color: #b5b5c8;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  gap: 25px;

`

export const ButtonVisualizar = styled.button`
width: 129px;
height: 35px;

border-radius: 5px;
border: 0.5px solid  #0E0E47;
background:  ${ThemeColor.primaria};

color:  #FDFDFD;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
`

export const EditarCadastro = styled.button`
  width: 213px;
height: 35px;

border-radius: 5px;
border: 0.5px solid #0086ED;
background: ${ThemeColor.secundaria};

color: #FFF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

`
export const ContainerGrafico = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 54px 72px 0 72px;
`

export const ContainerTable = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 70px 0 70px ;
`


export const ContainerHits = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 17px;

  padding: 0  0 50px 72px;
`

export const ButtonHits = styled.button`
color: var(--foundation-brand-02-normal, #08BBE9);
text-align: center;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

border-radius: 5px;
background: var(--foundation-white-light-hover, #FBFBFB);
box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

padding: 7.5px 16px;
`


export const ButtonBlack = styled.button`
  color: ${ThemeColor.primaria};
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
background-color: transparent;

display: flex;
margin: 40px;
`
