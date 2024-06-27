import styled from 'styled-components';

export const CartDetailContainer = styled.div`
  width: 748px;
  height: 165px;
  border-radius: 4px;
  border: 1px solid #D1D1D1;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  padding: 16px;
  position: relative;

  @media (max-width: 900px) {
    display: flex;
    gap: 24px;
    width: 100%;
height: 238px;
  }

  @media (max-width: 600px) {
    height: auto;

  }
`;

export const ProductImage = styled.img`
  width: 130px;
  height: 130px;

  @media (max-width: 900px) {
    width: 118px;
height: 118px;
align-items: center;
  }

  @media (max-width: 600px) {
    width: 88px;
height: 88px;
  }

`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: initial;
    gap: 20px;

  }
`

export const ProductDetails = styled.div`
  margin-left: 24px;

  @media (max-width: 900px) {
    margin-left: 0px;
  }


`;

export const TextProduct = styled.p`
    width: 188px;
    color:  #5F6367;
margin-top: 8px;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const ProductName = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductStock = styled.p`
  padding: 5px 29.5px;
  border-radius: 4px;
background:  rgba(23, 134, 41, 0.10);
margin-top: 4px;


color: #202124;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
max-width: 137px;
`;

export const ProductPrice = styled.div`
  font-size: 24px;
  color: #000;
  font-weight: bold;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 900px) {
    margin: 0px;
  }

`;

export const ActionButton = styled.button`
width: 24px;
height: 24px;
  background-color: #3C0A6D;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    color: white;
width: 12px;
height: 12px;
  }
`;

export const QuantityInput = styled.input`
  width: 40px;
  text-align: center;
  color: #3D4449;

font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
`;
export const DeleteButton = styled(ActionButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  > svg {
   color: #C81B1B;
   width: 18px;
height: 18px;
  }
`;
