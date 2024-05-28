import styled from "styled-components";

export const Container = styled.div`
  margin: 36px 20px 20px 20px;
`

export const TitlePage = styled.h2`
color: #000;


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
