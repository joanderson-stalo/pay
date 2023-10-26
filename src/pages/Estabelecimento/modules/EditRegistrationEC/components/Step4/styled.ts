import { ThemeColor } from "@/config/color";
import styled from "styled-components";

export const ContainerStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ContextStepContainer = styled.div`
 display: flex;
  flex-direction: column;
align-items: center;

`

export const ContextStep = styled.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`

export const TitleStep = styled.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`

export const Line = styled.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 140px;
  margin-right: 50px;


`

export const ContainerInput = styled.section`
    display: flex;
gap: 40px;

`


export const ContainerInput2 = styled.section`
   width: 365px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`

export const ButtonAvançar = styled.button`
  width: 109px;
height: 35px;

background: ${ThemeColor.secundaria};
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`


export const ButtonVoltar = styled.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`


export const ContainerButton = styled.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;


`

export const TipoConta = styled.div`
  width: 215px;

`

export const Banco = styled.div`
 width: 365px;

`

export const Agencia = styled.div`
  width: 215px;

`


export const Conta = styled.div`
  width: 215px;

`

