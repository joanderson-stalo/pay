import styled from "styled-components";

export const ContainerListProducts = styled.div`
  margin: 36px 32px 20px 20px;

`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

gap: 24px;
flex-wrap: wrap;
margin-bottom: 24px;

@media (max-width: 900px) {
  gap: 20px;
}
`

export const PaymentsTitle = styled.p`
color: #000;


font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
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

export const ContentPix = styled.div`


  background: #FAFAFA;
  padding: 21px 45px;
  max-width: 728px;
  display: flex;
  gap: 21px;

  @media (max-width: 600px) {
    flex-direction: column;

    padding: 20px;
}

`

export const ContentQRcode = styled.img`
  height: 160px;
  width: 160px;

  @media (max-width: 600px) {
   margin: 0 auto;
}

  `

export const ContentInfo = styled.div`

  width: 302px;
  display: flex;
  flex-direction: column;
  gap: 5px;




`

export const TitleInfo = styled.h3`

color:  #202124;


font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;

`

export const DescriptionInfo = styled.p`

color:  #202124;

font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
max-width: 300px;

`

export const ButtonCopy = styled.button`
  background-color: transparent;

`

export const CopiaECola = styled.div`

border-radius: 4px;
background:  #FFF;
display: flex;
justify-content: space-between;


padding: 13px 24px;

gap: 10px;

@media (max-width: 480px){
  width: 280px;

}




`

export const Codigo = styled.p`

width: 100%;
max-width: 353px;

color: #202124;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
line-height: 1.5;
overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`



