

import styled from "styled-components";

export const Container = styled.div`
  margin: 36px 100px 20px 100px;

  @media (max-width: 900px) {
    margin: 36px 20px 20px 20px;
  }

`

export const ContainerTitleHeader = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
margin-bottom: 24px;
`

export const Description = styled.div`
color:  #5F6367;

font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const DescriptionInfo = styled.div`
color:  #202124;


font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;

margin-top: 32px;
margin-bottom: 16px;
`

export const ContainerForm = styled.form`
width: 100%;


`

export const ContainerInput = styled.div`
display: flex;
align-items: center;
  gap: 20px;



  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
  gap: 10px;
  }






`


export const ContainerInput2 = styled.div`
margin-top: 24px;


`


export const ContainerButton = styled.div`

  display: flex;
  justify-content: end;
  gap: 20px;
  align-self: flex-end;
  margin-top: 40px;

  @media (max-width: 600px) {
    justify-content: center;
    align-self: center;
  }
`;





