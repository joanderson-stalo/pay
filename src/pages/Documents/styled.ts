
import styled from "styled-components";

export const ContainerStep = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px 20px 20px 20px;

  @media (max-width: 600px) {
    margin: 0 30px;
  }

`;

export const ContextStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContextStep = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 32px;
  width: 100%;
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
    padding: 20px;
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
  margin-left: 50px;
  margin-right: 50px;

  @media (max-width: 600px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

interface Color {
  primary: string;
  secundary: string;
}



export const Title = styled.h2<Color>`
  color: ${(props) => props.secundary};
  font-size: 24px;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 1100px) {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;


