import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 32px;

  @media (max-width: 900px) {
    display: none;
  }
`

export const ContainerTitle = styled.div`
  width: 384px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  > h3{
    color:  #3D4449;

font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.5px;
  }

`

export const OrderDetailsContainer = styled.div`
border-top: 1px solid #e5e5e5;
  background: #fff;
  border-radius: 8px;
  width: 100%;
`;

export const OrderDetailsRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderDetail = styled.span`
  color: #333;
`;


export const OrderDetailsRowItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  gap: 20px;
`;
