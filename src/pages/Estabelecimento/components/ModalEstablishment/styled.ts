import styled from 'styled-components'


interface Color {
  primary: string;
  secundary: string;
}

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(16, 16, 79, 0.65);
  backdrop-filter: blur(0.1rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

export const ContainerModal = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 919px;
height: 416px;
position: relative;

`

export const ContainerTitle = styled.div<Color>`

    display: flex;
    padding: 27px 0 0 36px;
    display: flex;
    align-items: center;
    gap: 12px;

  > p {
    color: ${(props) => props.secundary};
font-size: 24px;
font-weight: 700;
  }

  > span {
    color:  #9B959F;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`

export const Linha = styled.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`

export const ContainerSelect = styled.div`

  > div {
    display: flex;
    padding: 27px 56px 27px 56px;
    gap: 56px;
  }
`

export const ContextButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  gap: 21px;

  position: absolute;
  right: 0;
  bottom: 40px;
`

export const ButtonSalvar = styled.button<Color>`
border-radius: 5px;
border: 0.5px solid #0086ED;
background: ${(props) => props.secundary};

width: 109px;
height: 35px;

color: #FFF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
`

export const ButtonCancelar = styled.button`
  border-radius: 5px;
border: 0.5px solid #F5F4F4;
background: #FFF;

width: 109px;
height: 35px;


color: #5A6ACF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

`
