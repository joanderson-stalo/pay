import styled from "styled-components";

import { UploadSimple } from "@phosphor-icons/react";

interface Color {
  primary: string;
  secundary: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 36px 20px 20px;

`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 30px;
  width: 900px;
  padding: 22px 39px 22px 39px;

  margin-bottom: 30px;

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

export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #7D7D7D;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Separator = styled.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`;

export const NextButton = styled.button<Color>`
  padding: 0px 24px;
  height: 35px;
  background: ${(props) => props.secundary};
  border: 0.5px solid #0086ed;
  border-radius: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 100px;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`;

export const BackButton = styled.button`
  width: 109px;
  height: 35px;
  background: #FFFFFF;
  border: 0.5px solid #F5F4F4;
  border-radius: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #5A6ACF;
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 20px;
  align-self: flex-end;
  margin-top: 30px;

  @media (max-width: 1000px) {
    justify-content: center;
    align-self: center;
  }
`;


export const BoxTitle = styled.div`
border-radius: 4px;
background: var(--Foundation-Brand-02-Light, #E6F8FD);
padding: 8px;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 50px;



> p {
  color: var(--foundation-white-dark-hover, #8A8A8A);
font-size: 12px;
line-height: 16px;
letter-spacing: -0.06px;
font-weight: bold;


> a {
  color: var(--Blue-system, #2BC6F6);

font-size: 12px;
font-weight: bold;
line-height: 16px;
letter-spacing: -0.06px;
text-decoration-line: underline;
margin-left: 10px;
}
}

@media (max-width: 600px) {
    > p {
      font-size: 12px;
      a{
        font-size: 12px;
      }
    }
  }


`

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

  @media (max-width: 600px) {

        font-size: 14px;
  
  }
`;

export const StyledUploadIcon = styled(UploadSimple)`
  color: #07A8D2;
  width: 30px;
  height: 30px;
`;

export const ContainerInput = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;

`

export const ContainerCardsMobile = styled.div`
  flex-direction: column;
  gap: 12px;

  display: none;


  @media (max-width: 900px) {
    display: flex;
  }
`