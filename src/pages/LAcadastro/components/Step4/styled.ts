
import styled from "styled-components";


interface Color {
  primary: string;
  secundary: string;
}

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
  max-width: 328px;
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


  @media(max-width: 680px){
    max-width: 100%;
  }


`;

export const ButtonAvançar = styled.button<Color>`
  width: 110px;
  height: 40px;
  background: ${(props) => props.primary};
  border: 0.5px solid ${(props) => props.primary};
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 15.566px;
  text-transform: uppercase;
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

export const ButtonVoltar = styled.button<Color>`
  width: 110px;
  height: 40px;
  background: #FFFFFF;
  border: 0.5px solid ${(props) => props.primary};
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 15.566px;
  letter-spacing: 0.5px;
  color: ${(props) => props.primary};

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
  max-width: 215px;


  @media(max-width: 680px) {
    max-width: 100%;
  }
`;

export const Banco = styled.div`
  width: 100%;
  max-width: 560px;

  @media(max-width: 680px){
    max-width: 100%;
  }


`;

export const Agencia = styled.div`
  width:100%;
  max-width: 215px;


  @media(max-width: 680px){
    max-width: 100%;
  }

`;

export const Conta = styled.div`
   width:100%;
   max-width: 215px;


  @media(max-width: 680px){
    max-width: 100%;
  }

`;
export const Pix = styled.div`
   width:100%;
   max-width: 328px;



  @media(max-width: 680px){
    max-width: 100%;
  }
`;

