
import styled from "styled-components";

export const ContainerStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContextStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WInput = styled.div`
  width: 215px;
`;

export const ContextStep = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 32px;
  width: 900px;
  padding: 22px 39px 0px 39px;

  @media (max-width: 1200px) {
    width: 800px;
  }

  @media (max-width: 1100px) {
    width: 750px;
  }

  @media (max-width: 900px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const TitleStep = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #7D7D7D;
`;

export const Line = styled.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-right: 50px;
`;

export const ContainerInput = styled.section`
  display: flex;
  gap: 50px;

  @media (max-width: 1200px) {
    gap: 45px;
  }

  @media (max-width: 1100px) {
    gap: 40px;
  }

  @media (max-width: 900px) {
    gap: 35px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ButtonAdd = styled.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background: transparent;
  letter-spacing: 0.5px;
  width: 50px;
  margin-top: 30px;
  color: #5A6ACF;
`;

export const ButtonRemover = styled.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  background: transparent;
  letter-spacing: 0.5px;
  width: 50px;
  margin-top: 30px;
  color: #E91414;
`;

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

  @media (max-width: 600px) {
    width: 250px;
  }

`;

interface Color {
  primary: string;
  secundary: string;
}

export const ButtonAvançar = styled.button<Color>`
  width: 109px;
  height: 35px;
  background: ${(props) => props.secundary};
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
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;
