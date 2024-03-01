import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Storefront, Tag, ChartBar, Basket, Money, Stack, Wallet, FileText, CaretLeft, CaretRight, Laptop } from '@phosphor-icons/react';
import { ButtonSider, ButtonSiderArrow, ContainerSidebar, Logo, Menu, SubMenu, SubMenuItem } from './styled';
import { ThemeColor } from '@/config/color';
import { ThemeImg } from '@/config/img';
import { useSidebarVisibility } from '@/context/sidebarVisibilityContext';

export function Sidebar() {
  const navigate = useNavigate();
  const { isVisible, showSidebar, hideSidebar } = useSidebarVisibility();

  const [selectedItem, setSelectedItem] = useState(() => {
    const savedValue = localStorage.getItem('selectedItem');
    return savedValue ? Number(savedValue) : 0;
  });
  const [financeiroSubmenuOpen, setFinanceiroSubmenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('selectedItem', selectedItem.toString());
  }, []);

  const handleNavigation = (index: number, path?: string) => {
    setSelectedItem(index);
    if (path) navigate(path);
    setFinanceiroSubmenuOpen(false);
  };

  const toggleVisibility = () => {
    isVisible ? hideSidebar() : showSidebar();
  };

  const menuItems = [
    { icon: <ChartBar  />, label: 'Resumo', path: "/home" },
    { icon: <Basket  />, label: 'Vendas', path: "/transaction" },
    { icon: <Storefront  />, label: 'Estabelecimentos', path: "/sellers-ec" },
    { icon: <Tag  />, label: 'Licenciados', path: "/licenciados" },
    { icon: <Money  />, label: 'Comissões', path: "/commission/daily" },
    { icon: <Stack   />, label: 'Planos', path: "/plans" },
    { icon: <Laptop   />, label: 'Equipamentos', path: "/equipmentStock" },
    { icon: <Wallet />, label: 'Financeiro', isSubmenu: true },
    { icon: <FileText  />, label: 'Documentos', path: "/documents" }
  ];

  const financeiroSubmenuItems = [
    { label: 'Gestão da Operação', path: '/operationManagement' },
    { label: 'Resumo de Licenciados', path: '/licenseesummary' },
    { label: 'Tarifas', path: '/tariffs' },
    { label: 'Solicitação de Cobrança', path: '/billingRequest' },
    { label: 'Pagamentos', path: '/pagamentos' }
  ];

  const financeiroIndex = menuItems.findIndex(item => item.label === 'Financeiro');

  const toggleFinanceiroSubmenu = () => {
    setFinanceiroSubmenuOpen(!financeiroSubmenuOpen);
    setSelectedItem(financeiroIndex);
  };

  return (
    <ContainerSidebar color={ThemeColor.primaria} isVisible={isVisible}>
      <Logo src={isVisible ? ThemeImg.backgroundLogo : ThemeImg.iconLogo} />
      <ButtonSiderArrow isCondensed={isVisible} onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
        {isVisible ? <CaretLeft   /> : <CaretRight />}
      </ButtonSiderArrow>
      <Menu colorSec={ThemeColor.secundaria}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ButtonSider
              colorSec={ThemeColor.secundaria}
              selected={selectedItem === index}
              onClick={() => item.isSubmenu ? toggleFinanceiroSubmenu() : handleNavigation(index, item.path)}
            >
              {item.icon}
              {isVisible && item.label}
              {item.isSubmenu && isVisible && (financeiroSubmenuOpen ? <BiChevronUp /> : <BiChevronDown />)}
            </ButtonSider>
            {item.isSubmenu && financeiroSubmenuOpen && (
              <SubMenu>
                {financeiroSubmenuItems.map((subItem, subIndex) => (
                  <SubMenuItem
                    key={subIndex}
                    onClick={() => handleNavigation(financeiroIndex, subItem.path)}
                  >
                    {subItem.label}
                  </SubMenuItem>
                ))}
              </SubMenu>
            )}
          </React.Fragment>
        ))}
      </Menu>
    </ContainerSidebar>
  );
}
