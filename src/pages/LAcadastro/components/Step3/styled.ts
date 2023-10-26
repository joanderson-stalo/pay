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

export const WInput = styled.div`
  width: 215px;
  @media(max-width: 1200px) {
    width: 190px;
  }
  @media(max-width: 900px) {
    width: 165px;
  }
  @media(max-width: 600px) {
    width: 140px;
  }
`

export const ContextStep = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 32px;
  width: 900px;
  padding: 22px 39px 0px 39px;

  @media(max-width: 1200px) {
    width: 800px;
    padding: 20px 30px;
  }
  @media(max-width: 1100px) {
    width: 700px;
    padding: 18px 25px;
  }
  @media(max-width: 900px) {
    width: 600px;
    padding: 15px 20px;
  }
  @media(max-width: 600px) {
    width: 120%;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 20px
  }
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
  margin-right: 50px;

  @media(max-width: 1200px) {
    margin-right: 40px;
  }
  @media(max-width: 1100px) {
    margin-right: 30px;
  }
  @media(max-width: 900px) {
    margin-right: 20px;
  }
  @media(max-width: 600px) {
    margin-right: 10px;
  }
`

export const ContainerInput = styled.section`
  display: flex;
  gap: 50px;

  @media(max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const ButtonAdd = styled.button`
 font-weight: 500;
 font-size: 12px;
 line-height: 20px;
 background: transparent;
 letter-spacing: 0.5px;
 width: 50px;
 margin-top: 30px;
 color: #5A6ACF;
 white-space: nowrap;
 text-align: center;
`

export const ButtonRemover = styled.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  background: transparent;
  letter-spacing: 0.5px;
  width: 50px;
  margin-top: 30px;
  color: #E91414;
  white-space: nowrap;
  text-align: center;
`

export const ContainerInput2 = styled.section`
  width: 365px;

  > button {
    background: transparent;
    display: flex;
    white-space: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;
    letter-spacing: 0.5px;
    color: #665B6D;
  }

  @media(max-width: 1200px) {
    width: 320px;
  }
  @media(max-width: 1100px) {
    width: 280px;
  }
  @media(max-width: 900px) {
    width: 240px;
  }
  @media(max-width: 600px) {
    width: 200px;
  }
`
export const ButtonAvançar = styled.button`
  width: 109px;
  height: 35px;
  background: #00a3d7;
  border: 0.5px solid #0086ed;
  border-radius: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 100px;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`;

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
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  align-self: flex-end;
  margin-bottom: 100px;
  @media (max-width: 1000px) {
    justify-content: center;
    align-self: center;
  }
`;
