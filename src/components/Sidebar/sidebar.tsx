import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { Medal, Storefront, Book, Clipboard, Tag, EyeClosed, Eye, DotsNine, DotsThree, CaretDoubleRight, CaretDoubleLeft } from '@phosphor-icons/react';
import { AiOutlinePercentage, AiOutlineFileText } from 'react-icons/ai';
import { ButtonSider, ButtonSiderArrow, ContainerSidebar, Logo, Menu } from './styled';
import { ThemeImg } from '@/config/img';
import { ThemeColor } from '@/config/color';
import { SidebarText } from '@/config/sidebar';
import { useSidebarVisibility } from '@/context/sidebarVisibilityContext';


export function Sidebar() {
  const navigate = useNavigate();
  const { isVisible, showSidebar, hideSidebar } = useSidebarVisibility();

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
  };

  const toggleVisibility = () => {
    if (isVisible) {
      hideSidebar();
    } else {
      showSidebar();
    }
  };

  console.log('sibebar', isVisible)

  return (
    <ContainerSidebar color={ThemeColor.primaria} isVisible={isVisible}>
      <Logo src={isVisible ? ThemeImg.backgroundLogo : ThemeImg.iconLogo} />
      <ButtonSiderArrow isCondensed={isVisible}  onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
        {isVisible ? <CaretDoubleLeft /> : <CaretDoubleRight />}
      </ButtonSiderArrow >
      <Menu colorSec={ThemeColor.secundaria}>
        {[
          { icon: <BiHomeAlt />, label: SidebarText.home, path: "/home" },
          { icon: <Tag />, label: SidebarText.vendas, path: "/vendas" },
          { icon: <Storefront />, label: SidebarText.estabelecimentos, path: "/estabelecimentos" },
          { icon: <Medal />, label: SidebarText.licenciados, path: "/licenciados" },
          { icon: <AiOutlinePercentage />, label: SidebarText.plano, path: "/plans" },
          { icon: <AiOutlineFileText />, label: SidebarText.extrato, path: "/commission/daily" },
          { icon: <Book />, label: SidebarText.compliance, path: "/compliance" },
          { icon: <Clipboard />, label: SidebarText.solicitacoes, path: "/solicitacoes" }
        ].map((item, index) => (
          <ButtonSider
            key={index}
            colorSec={ThemeColor.secundaria}
            selected={selectedItem === index}
            onClick={() => handleNavigation(index, item.path)}
          >
            {item.icon}
            {isVisible && item.label}
          </ButtonSider>
        ))}
      </Menu>
    </ContainerSidebar>
  );
}
