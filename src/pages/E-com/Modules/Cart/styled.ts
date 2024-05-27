import styled from "styled-components";

export const ContainerListProducts = styled.div`
  margin: 36px 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

`

export const ContainerCartDetail = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`
