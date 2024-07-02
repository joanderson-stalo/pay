import { Pencil, Trash } from "@phosphor-icons/react";
import styled from "styled-components";




export const Container = styled.div`
  margin: 36px 20px 20px 20px;
`

export const ContainerTitle = styled.div`
margin-bottom: 32px;


  @media (max-width: 900px) {
    margin-bottom: 32px;
  }

`


export const ContainerForm = styled.form`
width: 100%;


`

export const ContainerInput = styled.div`


display: flex;
flex-direction: column;
gap: 32px;
width: 420px;




  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }






`



export const ContainerButton = styled.div`

  display: flex;
  justify-content: end;
  gap: 20px;
  align-self: flex-end;
  margin-top: 100px;

  @media (max-width: 600px) {
    justify-content: center;
    align-self: center;
  }
`;


export const ContainerTable = styled.div`

  margin-top: 112px;


  @media (max-width: 600px) {

  }
`;

export const SubTitle = styled.h3`

color: #000000;
font-size: 24px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;

margin-bottom: 32px;




  @media (max-width: 600px) {

  }
`;







