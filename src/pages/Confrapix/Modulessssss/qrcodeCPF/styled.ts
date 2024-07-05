import { Transaction } from '../../../Transaction/Mobile/CardSales/cardSales';




import styled from "styled-components";

export const Container = styled.div`
  margin: 36px 100px 20px 100px;

  @media (max-width: 900px){
    margin: 36px 20px 20px 20px;
  }

`

export const ContainerTitleHeader = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
margin-bottom: 24px;
`

export const ContainerMain = styled.div`

display: flex;
border-radius: 4px;
background:  #F9F9F9;
padding: 24px 32px;
justify-content: space-between;

@media (max-width: 900px){
  flex-direction: column-reverse;
}


`

export const ContainerTableInfo = styled.div`
  display: flex;
  gap: 150px;

@media (max-width: 900px){
  flex-direction: column;
  gap: 16px;
}





`

export const ContainerQrcode = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 304px;
  height: 308px;

@media (max-width: 900px){
  margin: 0 auto;
  margin-bottom: 16px;
}

@media (max-width: 480px){
  width: 160px;
  height: 160px;
}








`



export const QRCode = styled.img`


`



export const CopiaECola = styled.div`

border-radius: 4px;
background:  #FFF;
display: flex;
justify-content: space-between;
max-width: 460px;


padding: 13px 24px;

gap: 10px;




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
display: flex;
gap: 25px;

@media (max-width: 900px) {
  gap: 20px;
}



@media (max-width: 600px) {
  gap: 15px;
}

@media (max-width: 480px) {
  flex-wrap: wrap;
  gap: 5px;

}

`

export const StatusPayment = styled.div`
  padding: 5px 3.5px;
  color:  #202124;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 4px;
  background-color: #1786291A;
  display: flex;
  align-items: center;
  justify-content: center;


`

export const StatusPayment2 = styled.div`

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

export const Wrapper = styled.div`

@media (max-width: 900px){
  display: flex;
flex-direction: column-reverse;
gap: 16px;

}


`







export const ContainerButton = styled.div`

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;

  margin-top: 16px;

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
background: transparent;


`

export const ButtonCopy = styled.button`
  background-color: transparent;

`





