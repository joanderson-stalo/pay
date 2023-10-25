import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 44px;
`


export const ContainerGrafico = styled.div`
  display: flex;
  gap: 65px;
  margin-top: 43px;


  @media (max-width: 900px) {
    display: none;
}
`

export const ContainerTable = styled.div`
  display: flex;
  gap: 63px;
  margin-top: 43px;
  margin-bottom: 88px;

  @media (max-width: 900px) {
    display: none;
}
`
export const ContainerCards = styled.div`
  display: flex;
  gap: 19px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    display: none;
}
`

export const Title = styled.h2`
margin-top: 28px;
margin-bottom: 28px;
color: #00A3D7;
font-size: 24px;
font-weight: 700;
`


export const MobileContainerGrafico = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    gap: 28px;
    margin-bottom: 40px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
`

export const MobileContainerTable = styled.div`
  display: none;
  margin-bottom:40px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`