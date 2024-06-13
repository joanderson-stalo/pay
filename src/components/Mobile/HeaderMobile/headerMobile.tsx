import { useState } from 'react';
import * as S from './styled';
import { SidebarMobile } from '../SidebarMobile/sidebarMobile';
import { useTenantData } from '@/context';

export function HeaderMobile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tenantData = useTenantData();


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <S.ContainerMobileHeader  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
        <S.LogoImg src={tenantData.attachment_logo_white} alt="Logo" />
        <S.ButtonContainer onClick={toggleSidebar}>
          {isSidebarOpen ? <S.StyledCloseIcon /> : <S.StyledListIcon />}
        </S.ButtonContainer>
      </S.ContainerMobileHeader>
      <SidebarMobile isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
