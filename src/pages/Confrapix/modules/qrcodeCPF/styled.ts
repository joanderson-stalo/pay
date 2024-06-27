


import styled from "styled-components";

export const Container = styled.div`
  margin: 36px 20px 20px 20px;

`

export const ContainerTitleHeader = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
margin-bottom: 24px;
`

export const ContainerTableInfo = styled.div`
  display: flex;
  gap: 150px;



`

export const ContainerQrcode = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 304px;
  height: 308px;






`

export const QRCode = styled.img`


`

export const CopiaECola = styled.div`
border-radius: 4px;
background:  #FFF;
display: flex;
justify-content: space-between;


padding: 13px 24px;

gap: 10px;

>p{
  color: #202124;

  width: 353px;

font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

`

export const ContentCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const TitleCell = styled.p`
color: #000;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;

`

export const InfoCell = styled.p`
color:  #202124;
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.5px;

`

export const TableRow = styled.div`
display: flex;
flex-direction: column;
gap: 16px;



`
export const ContainerDescri = styled.div`
  margin-top: 16px;
  width: 100%;


`

export const Description = styled.p`
color:  #202124;
width: 100%;
max-width: 573px;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`



export const ContainerMain = styled.div`
width: 100%;
display: flex;
border-radius: 4px;
background:  #F9F9F9;
padding: 24px 32px;
justify-content: space-between;


`



export const ContainerButton = styled.div`

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;

  margin-top: 40px;

  @media (max-width: 600px) {
    justify-content: center;
    align-self: center;
  }
`;

export const ButtonDownloadInfo = styled.button`

text-decoration: underline;
color: #3C0A6D;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 35px;
letter-spacing: 0.5px;
`

export const ButtonCopy = styled.button`
  background-color: transparent;

`





