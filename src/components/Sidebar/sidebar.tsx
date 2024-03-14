import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Storefront, Tag, ChartBar, Basket, Money, Stack, Wallet, FileText, CaretLeft, CaretRight, Laptop, Ticket } from '@phosphor-icons/react';
import { ButtonSider, ButtonSiderArrow, ContainerSidebar, Logo, Menu, SubMenu, SubMenuItem } from './styled';
import { ThemeImg } from '@/config/img';
import { useSidebarVisibility } from '@/context/sidebarVisibilityContext';
import { useLogin } from '@/context/user.login';
import { useTenantData } from '@/context';

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isVisible, showSidebar, hideSidebar } = useSidebarVisibility();
  const { dataUser } = useLogin();
  const tenantData = useTenantData();

  const menuItems = [
    { icon: <ChartBar />, label: 'Resumo', path: "/home" },
    { icon: <Basket />, label: 'Vendas', path: "/transaction" },
    ...(dataUser?.seller_type !== 'EC' ? [
      { icon: <Storefront />, label: 'Estabelecimentos', path: "/sellers-ec" },
      { icon: <Tag />, label: 'Licenciados', path: "/sellers-la" },
      { icon: <Money />, label: 'Comissões', path: "/commission" },
      { icon: <Stack />, label: 'Planos', path: "/plans" },
      { icon: <Laptop />, label: 'Equipamentos', path: "/equipmentStock" },
      { icon: <Wallet />, label: 'Financeiro', isSubmenu: true },
    ] : []),
    { icon: <Ticket />, label: 'Tickets', path: "/tickets" },
    { icon: <FileText />, label: 'Documentos', path: "/documents" }
  ];


  const [selectedItem, setSelectedItem] = useState<number | null>(() => {
    const paths = menuItems.map(item => item.path);
    const matchedIndex = paths.findIndex(path => path && location.pathname.includes(path));
    return matchedIndex > -1 ? matchedIndex : null;
  });

  const [financeiroSubmenuOpen, setFinanceiroSubmenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const paths = menuItems.map(item => item.path);
    const matchedIndex = paths.findIndex(path => path && location.pathname.includes(path));
    setSelectedItem(matchedIndex > -1 ? matchedIndex : null);

    setFinanceiroSubmenuOpen(menuItems[matchedIndex]?.isSubmenu ?? false);
  }, [location.pathname]);

  const handleNavigation = (index: number, path?: string) => {
    if (path) {
      navigate(path);
      setSelectedItem(index);
      setFinanceiroSubmenuOpen(menuItems[index]?.isSubmenu ?? false);
    }
  };

  const toggleVisibility = () => {
    isVisible ? hideSidebar() : showSidebar();
  };

  const financeiroSubmenuItems = [
    { label: 'Gestão da Operação', path: '/operationManagement' },
    { label: 'Resumo de Licenciados', path: '/licenseesummary' },
    { label: 'Extrato', path: '/extract' },
    { label: 'Tarifas', path: '/tariffs' },
    { label: 'Solicitação de Cobrança', path: '/billingRequest' }
    // { label: 'Pagamentos', path: '/pagamentos' }
  ];

  const financeiroIndex = menuItems.findIndex(item => item.label === 'Financeiro');

  const toggleFinanceiroSubmenu = () => {
    setFinanceiroSubmenuOpen(!financeiroSubmenuOpen);
    setSelectedItem(financeiroIndex);
  };

  return (
    <ContainerSidebar color={tenantData.primary_color_identity} isVisible={isVisible}>
      <Logo src={isVisible ? tenantData.attachment_logo_white : tenantData.icon} />
      <ButtonSiderArrow   primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} isCondensed={isVisible} onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
        {isVisible ? <CaretLeft /> : <CaretRight />}
      </ButtonSiderArrow>
      <Menu colorSec={tenantData.secondary_color_identity}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ButtonSider
              colorSec={tenantData.secondary_color_identity}
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
