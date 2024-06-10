import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
  width: 309px;
  height: auto;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  padding: 30px;
  overflow: hidden;
  background-color: #F9F9F9;



  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  @media (max-width: 900px) {
    width: 270px;
    > p {
      font-size: 14px;
    }
  }
`

export const Wrapper = styled.div`
  width: 309px;
  position: relative;
  @media (max-width: 900px) {
  display: none;
  }

`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
position: absolute;

top: -26px;
right: -5px;
width: 72px;
height: 72px;
background-color: #3C0A6D;
border-radius: 50%;
z-index: 2;

> svg {
  width: 32px;
height: 32px;
color: #fff;
}
`;

export const StyledDiv = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > h2 {
    color: var(--color-neutra-ttulos, #3d4449);
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  > p {
    color: #3d4449;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 900px) {
    > h2 {
      font-size: 16px;
    }
    > p {
      font-size: 12px;
    }
  }
`

export const SummaryList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 900px) {
    display: none;
  }
`

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  overflow: hidden;

  .item-details {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .item-price {
    justify-self: end;
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`
