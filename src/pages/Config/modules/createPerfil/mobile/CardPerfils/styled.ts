import { Trash } from "@phosphor-icons/react";
import styled from "styled-components";

interface Color {
  primary: string | undefined
  secundary:string | undefined
}
export const Wrapper = styled.div`

margin-bottom: 20px;
display: none;
@media (max-width: 900px) {
  display: flex;



}

`;

export const WrapperHeader = styled.div`

display: flex;
justify-content: space-between;



`;

export const ContainerCardLog = styled.div`



  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 16px 16px 24px 32px;
  width: 100%;




  @media (max-width: 600px) {

  }
`;


export const ContainerHeading = styled.div`


`;
export const CardHeading = styled.h3`

font-family: Public Sans;
font-size: 16px;
font-weight: 700;
line-height: 18.8px;
color: #202124;


`;

export const CardHeadingDate = styled.p`



font-size: 12px;
font-weight: 400;
line-height: 14.1px;
text-align: left;
color: #202124;




`;

export const ButtonLogCard = styled.button<Color>`

padding: 8px 20px;
border-radius: 4px;
border: 1px solid ${(props) => props.primary};
background-color: transparent;

display: block;
align-items: center;
justify-content: center;

color: ${(props) => props.primary};
font-size: 12px;

line-height: 15.566px;

`


export const ButtonDelete = styled(Trash)`

  color: #C81B1B;
  height: 24px;
  width: 24px;

`

export const IconButton= styled.button`
background-color: transparent;
display: flex;


`


export const ContainerButton = styled.div`

  display: inline-flex;
  justify-content: center;
  gap: 16px;

  margin-top: 25px;

`;
