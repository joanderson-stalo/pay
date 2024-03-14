
import styled from "styled-components";
import { UploadSimple } from "@phosphor-icons/react";

interface CustomTextAreaProps {
  hasError: boolean;
}

interface Color {
  primary: string;
  secundary: string;
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

export const ContextStep = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 32px;
  width: 900px;
  padding: 22px 39px 0px 39px;

  @media (max-width: 1200px) {
    width: 800px;
  }

  @media (max-width: 1100px) {
    width: 700px;
  }

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 0;
    margin-top: 10px;
    margin-bottom: 20px;
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

  @media (max-width: 1100px) {
    margin-left: 30px;
    margin-right: 30px;
  }

  @media (max-width: 900px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const ContainerInput = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ContainerInput2 = styled.section`
  width: 215px;

  @media (max-width: 600px) {
    width: 100%;
  }

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
`;

export const ButtonAvançar = styled.button<Color>`
  padding: 0px 24px;
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
`;


export const HiddenFileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 12px 23px;
  border-radius: 4px;
  background: #E6F8FD;
  cursor: pointer;
  color: #07A8D2;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;

  &:hover {
    background: #d1eaf3;
  }
`;

export const StyledUploadIcon = styled(UploadSimple)`
  color: #07A8D2;
  width: 30px;
  height: 30px;
`;


export const CustomTextArea = styled.textarea<CustomTextAreaProps>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${props => props.hasError ? 'red' : '#E2E2E2'};
  border-radius: 4px;
  margin-top: 5px;
  resize: none;
`;

export const Label = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: ${({ theme }) => theme.neutral_darker};
margin-bottom: 4px;
`
