import styled from "styled-components";

export const ContainerListProducts = styled.div`
  margin: 36px 32px 20px 20px;

`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  > button {
    background: #ffff;

    padding: 12px 24px;
    border-radius: 4px;
border: 1px solid  #3C0A6D;

color: #3C0A6D;

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;
text-transform: uppercase;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
    > button{
      padding: 8px 12px;
      font-size: 12px;
    }
  }
`

export const WrapperContext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  >h1{
    color:  #3D4449;

font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.5px;
  }

  >p {
    color:  #3D4449;

font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
  }

  @media (max-width: 900px) {
    align-items: center;
    gap: 12px;

    > h1{
      font-size: 24px;
    }

    > p{
      font-size: 14px;
    }
  }


  @media (max-width: 600px) {

    > h1{
      font-size: 18px;
    }


  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin: 78px 0px;

  > p{
    color: #3D4449;

font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
  }

  @media (max-width: 900px) {
    margin: 48px 0px;
    gap: 16px;
  }
`

export const ContainerInfoWrapper = styled.div`
  display: flex;
  gap: 16px;

  > p{
    color: #3D4449;

font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
  }

  @media (max-width: 900px) {
    flex-direction: column;

    > span {
      display: none;
    }
  }

`

export const ContainerInfoWrapperItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

> h3{
  color: #3D4449;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
}

  > span {
    border-radius: 4px;
border: 1px solid #CD7B00;
background:  #CD7B00;
padding: 5px 8px;

color:  #FFF;


font-size: 12px;
font-weight: 600;
  }
`

export const ContainerIconWrapper = styled.div`

margin-bottom: 120px;
`
