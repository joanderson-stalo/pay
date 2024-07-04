import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 36px 20px 100px 20px;
`

export const ContainerTitle = styled.div`
width: 80%;
display: flex;
flex-direction: column;
gap: 40px;
margin-bottom: 24px;
`

export const TitlePage = styled.h2`
color: #000;

margin-top: 18px;
font-family: "Public Sans";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;

`

export const ContainerCard = styled.div`
  width: 80%;
  border-radius: 4px;
  background:  #F9F9F9;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const ContainerCardInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;


> h3{
  color:  #202124;
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

> span {
  color:  #202124;
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`

export const ContainerDados = styled.div`
  width: 80%;
  margin-top: 40px;

`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;



export const FileInputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-radius: 4px;
  border: 1px dashed #007EC5;
  cursor: pointer;
  margin-top: 24px;

  > label{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color:  #202124;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
`;

export const InputLabel = styled.span`
  margin-left: 12px;
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  color: #333;
`;

export const HiddenInput = styled.input`
  display: none;
`;


export const Button = styled.button`

  padding: 8px 24px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  border-radius: 4px;
background:  #3C0A6D;
text-transform: uppercase;

&:disabled {
    background: #888;
    cursor: not-allowed;
    color: #ccc;
  }
`;

export const CancelButton = styled.button`
  padding: 8px 24px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
border: 1px solid #3C0A6D;
color: #3C0A6D;
background: transparent;
text-transform: uppercase;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  gap: 24px;
  margin-top: 40px;
`;


export const InvoiceLink = styled.a`
color: #007EC5;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
width: 100%;

> svg {
  margin-right: 8px;
}
`;


export const ContainerLink = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 20px;
`

export const SubTitle = styled.h3`
color:  #202124;

font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 16px;
`

export const Status = styled.div`
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding: 5px;
border-radius: 4px;
background:  rgba(205, 123, 0, 0.10);

`

export const ContainerStatus = styled.div`
display: flex;
gap: 8px;


`
