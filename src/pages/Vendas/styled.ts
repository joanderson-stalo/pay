
import styled from "styled-components";

type InputContainerProps = {
  isFocused: boolean;
};

interface Color {
  primary: string;
  secundary: string;
}

export const ContextTitleVendas = styled.div`

`

export const Container = styled.div`
  margin: 36px 20px 20px 20px;

`


export const ContainerCardVendas = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0 38px 0;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    justify-content: center;
  }


`



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



export const Linha = styled.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`
export const Context = styled.div`

`

export const ContainerPagina = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;

  @media (max-width: 900px) {
   justify-content: center;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: row;
`
export const ContainerButton = styled.div`
  display: flex;
  margin-top: 36px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`


export const ContainerMobile = styled.div`
  flex-direction: column;
  gap: 12px;

  display: none;


  @media (max-width: 900px) {
    display: flex;
  }

`
