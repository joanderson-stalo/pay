import styled from "styled-components";

export const ContainerListProducts = styled.div`
  margin: 36px 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

`

export const ContainerCartDetail = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`

export const ContentTitle = styled.div`

display: flex;
align-items: center;

`

export const ContainerTag = styled.div`
border-radius: 4px;
background:  rgba(205, 123, 0, 0.10);
padding: 10px 16px;
display: flex;
align-items: center;
justify-content: space-between;



> button {
  color:  #007EC5;

font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
text-decoration-line: underline;
background-color: transparent;
}

@media (max-width: 680px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`

export const ContentWarning = styled.div`

 >p {
  color:  #202124;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
}

@media (max-width: 680px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  >p{
    text-align: center;
    line-height: 20px;
  }
}

`;


export const SubTitle= styled.p`
color: #202124;

font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
text-align: start;
align-items: center;




`
