import { useState } from 'react';
import {ThemeImg} from '@config/img';
import * as S from './styled';
import { SidebarMobile } from '../SidebarMobile/sidebarMobile';

export function HeaderMobile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <S.ContainerMobileHeader>
        <S.LogoImg src={ThemeImg.backgroundLogo} alt="Logo" />
        <S.ButtonContainer onClick={toggleSidebar}>
          {isSidebarOpen ? <S.StyledCloseIcon /> : <S.StyledListIcon />}
        </S.ButtonContainer>
      </S.ContainerMobileHeader>
      <SidebarMobile isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
