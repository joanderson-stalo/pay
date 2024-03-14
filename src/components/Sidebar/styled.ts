import styled, { css } from 'styled-components'


interface Props {
  color?: string
  colorSec?: string
  selected?: boolean
}

interface Color {
  primary: string;
  secundary: string;
}

export const ContainerSidebar = styled.div<Props & { isVisible: boolean }>`
  background: ${props => `${props.color}`};
  width: ${props => props.isVisible ? '100%' : '40%'};
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 38px;

  @media (max-width: 1100px) {
      display: none;
  }
`;


export const Logo = styled.img`
  width: 100%;
  height: 30px;
  margin-bottom: 40px;
`

export const Menu = styled.div<Props>`
  width: 100%;
  padding: 0px 14px 0 14px;
  height: 75%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => `${props.colorSec}`};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => `${props.colorSec}`};
    border-radius: 4px;
  }
`
export const ButtonSider = styled.button<Props>`
  background-color: transparent;
         padding-left: 20px;
  width: 100%;
  max-width: 238px;
  height: 51px;

  display: flex;
  text-align: center;
  align-items: center;
  gap: 12px;

  font-weight: 400;
font-size: 14px;
line-height: 12px;
letter-spacing: 0.5px;
color: #FDFDFD;


  ${({ selected, colorSec }) =>
    selected &&

    css`
         color:  #3c0a6d;
       background: #FFF;
       border-radius: 12px;
       font-weight: 700;
    `}

  > svg {
    font-size: 23px;
  }
`;

export const ButtonSiderArrow = styled.button<{ isCondensed: boolean, primary: string, secundary: string }>`
  background-color: transparent;
  position: absolute;

  width: 100%;
  max-width: 238px;
  height: 51px;

  display: flex;
  text-align: center;
  align-items: center;



color: #FDFDFD;




  > svg {
    font-size: 24px;
    border-radius: 50%;
    position: relative;
    padding: 4px;
    top: -6px;
    background-color: ${(props) => props.secundary};
    color: ${(props) => props.primary};
    left: ${({ isCondensed }) => isCondensed ? '224px' :  '150px'};
    margin-top: ${({ isCondensed }) => isCondensed ? '0' :  '20px'};
    margin-bottom: ${({ isCondensed }) => isCondensed ? '0' :  '20px'};
  }
`;



export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;

`;

// Estilo para os itens dentro do submenu
export const SubMenuItem = styled.button`

  color: #fff;
  padding: 12px 16px; // Padding para os itens do submenu
  text-align: left; // Alinhamento do texto
  margin-left: 20px;

  background-color: transparent;;
  cursor: pointer; // Cursor do tipo ponteiro
  font-weight: 00;
font-size: 12px;
line-height: 12px;
letter-spacing: 0.5px;
color: #FDFDFD;


`;
