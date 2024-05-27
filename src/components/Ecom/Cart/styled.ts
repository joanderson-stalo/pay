import styled from 'styled-components'

export const CartIconContainer = styled.div`
  background-color: #3c0a6d;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  top: 80px;
  right: 20px;

  > img {
    width: 26px;
    height: 26px;
  }

  @media (max-width: 1100px) {
    top: 140px;
  }

  @media (max-width: 600px) {
    width: 56px;
    height: 56px;
  }
`

export const ItemCount = styled.span`
  position: fixed;
  top: 92px;
  right: 36px;
  background-color: transparent;
  color: white;
  border-radius: 50%;
  padding: 2px;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: 0.5px;


  @media (max-width: 1100px) {
    top: 152px;
  }

  @media (max-width: 600px) {
    top: 144px;
    right: 28px;
  }
`
