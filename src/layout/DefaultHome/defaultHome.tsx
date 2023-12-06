import { Sidebar } from '@/components/Sidebar/sidebar'
import { ContainerContext, ContainerDefaultHome, ContainerSidebarDefault, ContextHome } from './styled'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header/header'
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from '@/context/user.login';
import { HeaderMobile } from '@/components/Mobile/HeaderMobile/headerMobile';
import { useSidebarVisibility } from '@/context/sidebarVisibilityContext';

export function DefaultHome() {
  const { isLogin } = useLogin();
  const navigate = useNavigate()
  const { isVisible } = useSidebarVisibility();

  useEffect(() => {
    if(!isLogin){
      navigate('/')
    }
  })

console.log('hmm', isVisible)
  
  return (
    <ContainerDefaultHome>
      <ContainerSidebarDefault>
        <Sidebar />
      </ContainerSidebarDefault>
      <ContainerContext isCondensed={isVisible}>
        <HeaderMobile />
        <Header />
        <ContextHome>
        <Outlet />
        </ContextHome>
      </ContainerContext>
    </ContainerDefaultHome>
  )
}
