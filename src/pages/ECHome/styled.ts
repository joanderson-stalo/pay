import { ThemeColor } from "@/config/color";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 36px 20px 20px 20px;
`


export const ContainerGrafico = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  gap: 60px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 40px;
  }
`

export const ContainerTable = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 36px;
  gap: 80px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 40px;
  }

`
export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }


`


