import { ThemeColor } from '@/config/color';
import styled from 'styled-components';

interface ActiveProps {
  active?: boolean;
}

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

export const ContainerDados = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    align-items: center;
    gap: 20px;
  }
`;

export const ContextStep = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 32px;
  width: 900px;
  padding: 22px 39px 0px 39px;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    padding: 22px 20px 0px 20px;
  }
`;

export const TitleStep = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #7d7d7d;
`;

export const Line = styled.div`
  border: 1px solid #a0a0a0;
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

  @media (max-width: 900px) {
    margin-left: 30px;
    margin-right: 30px;
  }

  @media (max-width: 600px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const ContainerInput = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContainerInput2 = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > button {
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;
    letter-spacing: 0.5px;
    color: #665b6d;
  }
`;



export const ContainerPJPF = styled.div`
    display: flex;
  align-items: center;
  overflow: hidden;
`;

export const ButtonPJ = styled.button<ActiveProps>`
  width: 50px;
  height: 34px;
  background-color: ${props => (props.active ? '#08BBE9' : '#E6E6E6')};
  color: ${props => (props.active ? 'white' : 'black')};
  border-radius: ${props => (props.active ? '8px' : '8px 1px 1px 8px')};
  position: ${props => (props.active ? 'relative' : '')};
  margin-right: -5px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
`;

export const ButtonPF = styled.button<ActiveProps>`
  width: 50px;
  height: 34px;
  background-color: ${props => (props.active ? '#08BBE9' : '#E6E6E6')};
  color: ${props => (props.active ? 'white' : 'black')};
  border-radius: ${props => (props.active ? '8px' : '1px 8px 8px 1px')};
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
`;

export const ButtonAvançar = styled.button`
  width: 109px;
  height: 35px;
  background: ${ThemeColor.secundaria};;
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

  @media (max-width: 600px) {
    margin-bottom: 0px;
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
