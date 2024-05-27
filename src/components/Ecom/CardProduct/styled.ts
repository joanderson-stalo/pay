import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerCardProduct = styled.div`
  width: 100%;
  max-width: 312px;
  height: 450px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 24px 32px;
  overflow: hidden;


  @media (max-width: 900px) {
    width: 272px;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 340px;
    padding: 12px 16px;
  }

`

export const StyledImage = styled.img`
  width: 248px;
  height: 227px;
  object-fit: fill;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 208px;
    height: 182px;
  }

  @media (max-width: 600px) {
    width: 128px;
    height: 125px;
  }
`

export const ButtonCard = styled.button`
  width: 247px;
  height: 44px;
  margin-top: 8px;

  padding: 8px 24px;
  border-radius: 4px;
  background: #3c0a6d;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 15.566px;
  text-transform: uppercase;

  @media (max-width: 900px) {
    width: 208px;
    height: 40px;
  }

  @media (max-width: 600px) {
    width: 128px;
  }


  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

  > svg {
    width: 32px;
    height: 32px;
  }
`

export const ContainerPrice = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 16px 0 24px 0;

  @media (max-width: 900px) {
    margin: 8px 0 16px 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const ProductTitle = styled.h3`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  max-width: 110px;


  @media (max-width: 600px) {
    font-size: 12px;
  }

`

export const ProductPrice = styled.h4`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`

export const ContainerAddProduct = styled.div`
  padding: 8px 24px;
  border-radius: 4px;
  border: 1px solid #3c0a6d;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 247px;
  height: 44px;

  > h4 {
    color: #3c0a6d;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  @media (max-width: 600px) {
    width: 128px;
    justify-content: center;

    > h4 {
      display: none;
    }
  }

`

export const WrapperAddProduct = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;


`

export const AddProduct = styled.button`
  background: transparent;

  > svg {
    width: 12px;
    height: 12px;
  }


`

export const Counter = styled.input`
  width: 35px;
  height: 26px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;

  color: #3d4449;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;


  border-radius: 4px;
`
