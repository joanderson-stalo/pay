import { Sidebar } from '@/components/Sidebar/sidebar'
import { ContainerContext, ContainerDefaultHome, ContainerSidebarDefault, ContextHome } from './styled'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header/header'
// import { AuthContext } from "@/context/user.login";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from '@/context/user.login';

export function DefaultHome() {
  const { isLogin } = useLogin();
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLogin){
      navigate('/')
    }
  })


  return (
    <ContainerDefaultHome>
      <ContainerSidebarDefault>
        <Sidebar />
      </ContainerSidebarDefault>
      <ContainerContext>
        <Header />
        <ContextHome>
        <Outlet />
        </ContextHome>
      </ContainerContext>
    </ContainerDefaultHome>
  )
}
