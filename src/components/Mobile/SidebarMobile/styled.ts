import styled from 'styled-components';

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 60px; 
  left: 0;
  width: 100vw;
  height: calc(100vh - 60px); 
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;


export const ContainerSidebarMobile = styled.div<{ isOpen: boolean; color: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: ${({ color }) => color};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.img`
  display: block;
  width: 150px;
  margin: 20px auto 30px;
`;

export const Menu = styled.div<{ colorSec: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonSider = styled.button<{ selected: boolean; colorSec: string }>`
  width: 100%;
  padding: 15px 20px;
  background-color: ${({ selected, colorSec }) => (selected ? colorSec : 'transparent')};
  border: none;
  color: white;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  transition: all 0.2s ease-out;
  font-weight: 500;

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
    transition: transform 0.2s ease-out;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05); 

    svg {
      transform: scale(1.1);
    }
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({ colorSec }) => colorSec};
    transform: scaleX(${({ selected }) => (selected ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.3s ease-out;
  }
`;
