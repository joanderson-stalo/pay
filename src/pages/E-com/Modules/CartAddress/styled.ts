import styled from "styled-components";

export const ContainerListProducts = styled.div`
  margin: 36px 32px 20px 20px;

`

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;


gap: 100px;
flex-wrap: wrap;
margin-bottom: 24px;

@media (max-width: 900px) {
  gap: 20px;
}
`

export const AddressTitle = styled.p`
color: #000;

font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
margin-top: 56px;
margin-bottom: 24px;

@media (max-width: 900px) {
  margin-top: 38px;
}
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 111px;

  @media (max-width: 900px) {
    margin-top: 40px;
  }
`;

export const StyledButton = styled.button`
width: 185px;
height: 44px;
padding: 8px 24px;

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;
text-transform: uppercase;
border-radius: 4px;
`;


export const BackButton = styled(StyledButton)`
color:  #3D4449;
border: 1px solid  #3D4449;
background-color: transparent;
`;

export const ForwardButton = styled(StyledButton)`
  background-color: #3C0A6D;
  color: white;
  &:disabled {
    background-color: #887F9B;
    color: #CCCCCC;
    cursor: not-allowed;
  }

`;
