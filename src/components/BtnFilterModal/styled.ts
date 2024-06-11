

import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
  isActive?: boolean;
}


export const ButtonFilter = styled.button<Color>`
width: 158px;
height: 44px;
padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.primary};
  background: ${(props) => (props.isActive ? props.primary : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: ${(props) => (props.isActive ? '#fff' : props.primary)};

  font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;
text-transform: uppercase;
> svg {
  font-size: 24px;
}

  @media (max-width: 900px) {
    padding: 6px 16px;
    font-size: 10px;
    z-index: 5;
   
  }
`;


export const FilterModalContainer = styled.div`
  border-radius: 4px;
  border: 1px solid #eaeaea;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.07);
  position: absolute;
  z-index: 999;
  margin-top: 8px;
  padding: 16px;


`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  > svg {
    font-size: 24px;
  }
`;

export const Wrapper = styled.div``;

export const ContainerChildren = styled.div<Color>`


    padding: 16px;

    > button {
      color:  #3C0A6D;
width: 100%;
padding: 14px 24px;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;
text-transform: uppercase;
margin-top: 38px;

width: 106px;
height: 44px;

      border-radius: 5px;
border: 1px solid var(--Foundation-PagueAssim01-Normal, #3C0A6D);
background: #FFF;

&:hover {
            background-color: #3C0A6D;
            color: #FFF;
        }

        &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    }
`
