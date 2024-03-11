  import { ThemeColor } from '@/config/color';
import styled from 'styled-components';

type InputContainerProps = {
  isFocused: boolean;
};


  export const Container = styled.div`

  `;

  export const Context = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    justify-content: space-between;

    @media (max-width: 900px) {
      flex-direction: column;
      gap: 20px;
    }
  `;

  export const Button = styled.button`
 display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;


color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 15.566px;


border-radius: 4px;
background:${ThemeColor.primaria};
white-space: nowrap;

@media (max-width: 900px) {
  width: 100%;
}
  `;

  export const Title = styled.h2`
    color: ${ThemeColor.secundaria};
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  `;

export const Input = styled.div<InputContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 525px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid ${props => props.isFocused ? '#0D0D3F' : '#E2E2E2'};
  background: #FFF;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #9B959F;
  padding-right: 15px;


  > input {
    width: 100%;
    padding-right: 40px;
    color:  #9B959F;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;

  }

  .search-icon {
    position: absolute;
    right: 20px;
    color: #000;
  }

  @media (max-width: 560px) {
    max-width: 100%;
  }
`;


export const SearchIcon = styled.span<InputContainerProps>`
display: flex;
align-items: center;
justify-content: center;
color: ${props => (props.isFocused ? '#0D0D3F' : '#9B959F')};
font-size: 21px;
cursor: pointer;
svg {
width: 21.429px;
height: 21.429px;
}
`;

