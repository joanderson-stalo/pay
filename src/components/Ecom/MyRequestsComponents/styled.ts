import styled from 'styled-components'

export const ContainerRequests = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
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


color:  #FFF;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;

padding: 5px 8px;
border-radius: 4px;
border: 1px solid #3C0A6D;
background: #3C0A6D;
`
export const NumberStatus = styled(NumberRequests)`
background:#CD7B00;
border : 1px solid #CD7B00;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 8px;
`
