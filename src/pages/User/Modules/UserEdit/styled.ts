import { ThemeColor } from "@/config/color";
import { UploadSimple } from "@phosphor-icons/react";
import styled from "styled-components";

export const ContainerStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px 20px 20px 20px;

  @media (max-width: 600px) {
    display: block;
    margin: 0 10px;
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

export const ContainerInput = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 900px) {
    gap: 30px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ContainerInput2 = styled.section`
  width: 215px;

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
    width: 100%;
  }
`;


export const ButtonAvançar = styled.button`
  padding: 8px 24px;
  background: ${ThemeColor.secundaria};
  border-radius: 4px;
background: ${ThemeColor.primaria};
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #FFFFFF;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`;

export const ButtonVoltar = styled.button`

  background: #FFFFFF;
  border: 0.5px solid #F5F4F4;
  border-radius: 5px;
  font-weight: 500;
  padding: 8px 24px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: ${ThemeColor.primaria};

  border-radius: 4px;
border: 1px solid  ${ThemeColor.primaria};
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  align-self: flex-end;
  margin-bottom: 100px;

  @media (max-width: 600px) {
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
  background: transparent;
  cursor: pointer;
  color:  ${ThemeColor.primaria};
  border: 1px solid  ${ThemeColor.primaria};



  font-size: 14px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.5px;

@media (max-width: 600px) {
  padding: 12px;
}

`;

export const StyledUploadIcon = styled(UploadSimple)`
  color:  ${ThemeColor.primaria};
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
