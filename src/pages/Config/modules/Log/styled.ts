import styled from "styled-components"

export const Container = styled.div`
  margin: 36px 20px 20px 20px;
`

export const ContainerTitle = styled.div`
  margin-bottom: 56px;


  @media (max-width: 900px) {
    margin-bottom: 32px;
  }

`

export const ContainerMobile = styled.div`
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  display: none;

  @media (max-width: 900px) {
    display: flex;
  }

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
  margin-top: 36px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`
export const Linha = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.1);
  margin-top: 15px;
  width: 100%;
`
export const Context = styled.div`

`
