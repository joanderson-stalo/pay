
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
  margin: 36px 100px 20px 100px;

  @media (max-width: 900px) {
    margin: 36px 20px 20px 20px;
  }
`;

export const ContextStepContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ContextStep = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 32px;
  width: 100%;
  padding: 22px 39px 0px 39px;

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
  gap: 20px;

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
border-radius: 4px;
background:  #3C0A6D;

color:  #FFF;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
padding: 8px 24px;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`;

export const ButtonVoltar = styled.button`

padding: 8px 24px;


  border-radius: 4px;
border: 1px solid  #3C0A6D;

font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
color: #3C0A6D;
background-color: transparent;
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



export const CustomTextArea = styled.textarea<CustomTextAreaProps>`
  width: 100%;
  padding: 8px 16px 8px 16px;
  border: 1px solid ${props => props.hasError ? 'red' : '#E2E2E2'};
  border-radius: 4px;
  margin-top: 5px;
  resize: none;
  height: 100px;
  max-height: calc(4 * 7m);
  line-height: 1.5em;
  overflow-y: auto;
`;

export const Label = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: ${({ theme }) => theme.neutral_darker};
margin-bottom: 4px;
`



export const HiddenFileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const FileInputLabel = styled.label<Color>`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 12px 23px;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  color:  ${(props) => props.primary};
  border: 1px solid   ${(props) => props.primary};



  font-size: 14px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.5px;

@media (max-width: 600px) {
  padding: 12px;
}

`;

export const StyledUploadIcon = styled(UploadSimple)<Color>`
  color:   ${(props) => props.primary};
  width: 30px;
  height: 30px;
`;

export const ContainerPhoto = styled.div`
  display: flex;
  align-items: end;
  gap: 50px;

  >img {
    width: 161px;
height: 154px;
object-fit: contain;
  }

  @media (max-width: 900px) {
    gap: 30px;

  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
