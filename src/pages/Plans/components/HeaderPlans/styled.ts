import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}

type InputContainerProps = {
  isFocused: boolean;
};

export const Container = styled.div`
  margin: 36px 20px 20px 20px;
`;

export const Context = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 20px;
  }
`;

export const Button = styled.button<Color>`
  display: flex;
  width: 213px;
  height: 35px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0.5px solid #0086ED;
  background: ${(props) => props.secundary};
  color: #FFF;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
`;

export const Title = styled.h2<Color>`
color: ${(props) => props.secundary};
font-size: 32px;
font-weight: 700;
line-height: normal;

@media (max-width: 600px) {
font-size: 16px;
}
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

