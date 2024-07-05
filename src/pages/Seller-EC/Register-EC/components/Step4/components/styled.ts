
import styled from "styled-components";

export const ContainerStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
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


@media (max-width: 600px) {
    padding: 22px 20px 0px 20px;
  }
`;

export const TitleStep = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #3D4449;
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
`;

export const ContainerInput = styled.section`
  display: flex;
  gap: 20px;

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ContainerInput2 = styled.section`
  width: 100%;
  max-width: 365px;

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

  @media (max-width: 680px) {
    max-width: 100%;
  }
`;

interface Color {
  primary: string;
  secundary: string;
}

export const ButtonAvançar = styled.button<Color>`
  width: 110px;
  height: 40px;
  background: ${(props) => props.secundary};
  border: 0.5px solid ${(props) => props.primary};
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
 width: 110px;
 height: 40px;
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
  @media (max-width: 480px) {
    justify-content: center;
    align-self: center;
  }
`;


export const TipoConta = styled.div`
  width: 100%;
  max-width: 255px;

  @media (max-width: 680px) {
    max-width: 100%;
  }
`;

export const Banco = styled.div`
  width: 100%;
  max-width:  560px;

  @media (max-width: 680px) {
    max-width: 100%;
  }
`;

export const Agencia = styled.div`
   width: 100%;
   max-width: 215px;

  @media (max-width: 680px) {
    max-width: 100%;
  }
`;

export const Conta = styled.div`
  width: 215px;

  @media (max-width: 680px) {
    max-width: 100%;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    gap: 14px;

    > p {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #676767;
      white-space: nowrap;
    }

    input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 20px;
      height: 20px;
      border: 1px solid #676767;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      position: relative;
      background: white;
    }

    input[type="checkbox"]:checked {
      border: 1px solid #676767;
      border-radius: 5px;
    }

    input[type="checkbox"]:checked::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      right: 2px;
      bottom: 2px;
      border: 1px solid white;
      border-radius: 3px;
      background: #08BBE9;
    }
  }

  @media (max-width: 1200px) {
    padding: 10px;
  }

  @media (max-width: 1100px) {
    padding: 8px;
  }

  @media (max-width: 900px) {
    > div {
      gap: 10px;
    }
  }

  @media (max-width: 600px) {
    padding: 5px;

    > div > p {
      font-size: 14px;
    }

    input[type="checkbox"] {
      width: 15px;
      height: 15px;
    }
  }
`;

