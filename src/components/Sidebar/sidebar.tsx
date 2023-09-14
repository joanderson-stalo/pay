import { ButtonSider, ContainerSidebar, Logo, Menu } from './styled'
import { BiHomeAlt } from 'react-icons/bi'
import { Medal, Storefront, Book, Clipboard, Tag } from '@phosphor-icons/react'
import { AiOutlinePercentage, AiOutlineFileText } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeImg } from '@/config/img'
import { ThemeColor } from '@/config/color'
import { SidebarText } from '@/config/sidebar'

export function Sidebar() {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState<number>(() => {
    const savedValue = localStorage.getItem('selectedItem');
    return savedValue ? Number(savedValue) : 0;
  });

  useEffect(() => {
    localStorage.setItem('selectedItem', selectedItem.toString());
  }, [selectedItem]);

  const handleNavigation = (index: number, path: string) => {
    setSelectedItem(index);
    navigate(path);
  }

  return (
    <ContainerSidebar color={ThemeColor.primaria}>
      <Logo src={ThemeImg.backgroundLogo} />
      <Menu colorSec={ThemeColor.secundaria}>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 0}
          onClick={() => handleNavigation(0, "/home")}
        >
          <BiHomeAlt /> {SidebarText.home}
        </ButtonSider>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 1}
          onClick={() => handleNavigation(1, "/vendas")}
        >
          <Tag /> {SidebarText.vendas}
        </ButtonSider>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 2}
          onClick={() => handleNavigation(2, "/estabelecimentos")}
        >
          <Storefront /> {SidebarText.estabelecimentos}
        </ButtonSider>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 3}
          onClick={() => handleNavigation(3, "/licenciados")}
        >
          <Medal /> {SidebarText.licenciados}
        </ButtonSider>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 4}
          onClick={() => handleNavigation(4, "/plano")}
        >
          <AiOutlinePercentage /> {SidebarText.plano}
        </ButtonSider>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 5}
          onClick={() => handleNavigation(5, "/extrato")}
        >
          <AiOutlineFileText /> {SidebarText.extrato}
        </ButtonSider>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 6}
          onClick={() => handleNavigation(6, "/compliance")}
        >
          <Book /> {SidebarText.compliance}
        </ButtonSider>
        <ButtonSider
          colorSec={ThemeColor.secundaria}
          selected={selectedItem === 7}
          onClick={() => handleNavigation(7, "/solicitacoes")}
        >
          <Clipboard /> {SidebarText.solicitacoes}
        </ButtonSider>
      </Menu>
    </ContainerSidebar>
  )
}
