
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 36px 20px 20px 20px;

`

export const ContextTitleVendas = styled.div``


export const ContainerGrafico = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  gap: 20px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 40px;
  }
`

export const ContainerTable = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 36px;
  gap: 20px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 40px;
  }

`
export const ContainerCards = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 36px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }


`


