import { ThemeColor } from '@/config/color';
import { List, X} from '@phosphor-icons/react';  
import styled from "styled-components";

export const ContainerMobileHeader = styled.header`
  display: none;
  background: ${ThemeColor.primaria};
  padding: 12px 26px;
  justify-content: space-between; 
  align-items: center; 
  overflow: hidden; 

  @media (max-width: 1100px) {
    display: flex;
  }
`;

export const LogoImg = styled.img`
  width: 129px;
  height: 36.304px;
`;

export const ButtonContainer = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledListIcon = styled(List)`
  width: 34px; 
  height: 34px; 
  color: #FDFDFD;  
`;

export const StyledCloseIcon = styled(X)`
  width: 34px; 
  height: 34px; 
  color: #FDFDFD;
`;
