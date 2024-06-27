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
  width: 100%;

`;

export const Box = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 30px;
  width: 100%;
  padding: 22px 39px 22px 39px;

  margin-bottom: 30px;

  @media (max-width: 600px) {
    padding: 22px 20px 0px 20px;
  }


`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;

  color: #3D4449;

`;

export const Separator = styled.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`;



export const NextButton = styled.button<Color>`
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

export const BackButton = styled.button<Color>`
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
background:  #E6F8FD;

padding: 10px 20px;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 50px;



> p {
color: #3D4449;


font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.5px;

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

export const FileInputLabel = styled.label<Color>`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 8px 24px;
  border-radius: 4px;
  background: ${(props) => props.primary};
  cursor: pointer;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;


  &:hover {
    background: #d1eaf3;
    color: ${(props) => props.primary};

    >svg{
      color: ${(props) => props.primary};
    }


  }

  @media (max-width: 600px) {

        font-size: 14px;

  }
`;

export const StyledUploadIcon = styled(UploadSimple)`
  color: #FFFFFF;
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
