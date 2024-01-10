import styled from "styled-components";


export const Container = styled.div`
 margin: 36px 20px 20px 20px;
`

export const ContainerMobile = styled.div`
    display: none;
    margin: 0 30px;

  @media (max-width: 900px) {
    display: block;
  }

`
