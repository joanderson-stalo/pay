import styled from "styled-components";

export const ContainerGrafico = styled.div`
  width: 289px;
  height: 288px;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 15px;

  @media (max-width: 1200px) {
    width: 260px;
    height: 260px;
  }

  @media (max-width: 1100px) {
    width: 240px;
    height: 240px;
  }


  @media (max-width: 900px) {
    width: 264px;
height: 264px;
  }

  
  @media (max-width: 600px) {
    width: 200px;
height: 200px;
  }
  
`;
