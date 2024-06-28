import styled from 'styled-components'



export const ContainerRequests = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #D1D1D1;
  padding: 16px 24px;
`
export const ButtonRequest = styled.button`
  display: flex;
  color: #3c0a6d;
  gap: 16px;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  background-color: transparent;

  > svg {
    width: 24px;
    height: 24px;
  }

  > div {
    h3 {
      color: #3c0a6d;
      font-size: 16px;

      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.5px;
    }

    p {
      color: #3c0a6d;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`

export const NumberRequests = styled.span`


color:  #202124;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;

padding: 5px 8px;
border-radius: 70px;
border: 1px solid #F9F9F9;
background: #F9F9F9;
`

export const NumberStatus = styled.span`
color:  #202124;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;

padding: 5px 8px;
border-radius: 4px;

background:#CD7B001A;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 8px;
`

export const ContentInfo = styled.div`


`

export const WrapperInfo = styled.div`

  display: flex;
  gap: 120px;

  @media (max-width: 600px) {
    gap: 30px;

  }

  @media (max-width: 420px) {

    flex-direction: column;
  }


`

export const TitleInfo = styled.h3`

color: #202124;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;



`

export const Info = styled.p`
color: #202124;


font-size: 12px;
font-weight: 400;
line-height: 14.1px;



`


