import styled from 'styled-components';


export const RadioButtonContainer = styled.label`
  display: block;
  position: relative;
  border: 1px solid var(--color-fill, #D1D1D1);
  padding: 20px  35px;


  width: 728px;
height: 64px;
  > p {
    color:  #3D4449;
margin-left: 32px;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;


export const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;


export const StyledRadioButton = styled.span`
  position: absolute;
  top: 50%;
  left: 32px;
  transform: translateY(-50%);
  height: 24px;
  width: 24px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #3C0A6D;



  ${HiddenRadioButton}:checked + &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #3C0A6D;
  }
`;
