import { ThemeColor } from "@/config/color";
import styled from "styled-components";

export const ContainerDetalhe = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
`

export const ContextDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 37px;
`
export const SectionCard = styled.section`
  display: flex;
  gap: 21px;

  @media (max-width: 1100px) {
    justify-content: center;
    align-items: center;
  }
`

export const SectionTable = styled.section`
  display: flex;
  gap: 23px;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

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
margin: 40px 0 0 100px;
`
