import styled from "styled-components";

type InputContainerProps = {
  isFocused: boolean
}


export const Container = styled.div`
  margin: 36px 20px 20px 20px;

`

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 36px;
  margin-bottom: 32px;
  gap: 8px;

`

export const Linha = styled.div`
border: 1px solid rgb(0, 0, 0, 0.1);
  margin-top: 15px;
  width: 100%;
`
export const Context = styled.div`
  margin-top: 45px;
`

export const ContainerPagina = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: row;


`

export const ButtonTotal = styled.button`
  width: 118px;
height: 35px;


border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-style: normal;
font-weight: 500;
`

export const ButtonFilter = styled.button`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

width: 76px;
height: 35px;

border-radius: 6px 6px 0px 0px;
border: 0.5px solid #F7F7F7;
background:  #F7F7F7;



display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const Button = styled.button`
  color: #5A6ACF;
  font-size: 8.477px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
`;


export const ContainerMobile = styled.div`
display: none;

   @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`


export const ContenteFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media(max-width: 600px){
    flex-direction: column;
  }


`


export const Input = styled.div<InputContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 525px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid ${props => (props.isFocused ? '#0D0D3F' : '#E2E2E2')};
  background: #fff;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #9b959f;
  padding-right: 15px;

  > input {
    width: 100%;
    padding-right: 40px;
    color: #9b959f;
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
`

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
`
