import styled from "styled-components";

export const Container = styled.div`
width: 100%;

`

export const ContainerInput = styled.div`


`

export const Input = styled.input`

  border-radius: 4px;
  border: 1px solid  #D1D1D1;
  height: 56px;
  width: 100%;

  padding: 14px 25px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  @media (max-width: 900px) {
    max-width: 100%;
  }


`

export const Label = styled.div`
color:  #202124;
font-size: 14px;
font-weight: 400;
line-height: 24px; /* 171.429% */
letter-spacing: 0.5px;
display: flex;

>span{

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
color: #C81B1B;

}

`

export const TextAreaPix = styled.textarea`
width: 100%;
border-radius: 4px;
border: 1px solid  #D1D1D1;
padding: 14px 25px;
resize: none;

  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;


`

export const ContainerTextArea = styled.div`

`
