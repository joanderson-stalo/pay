import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Storefront, Tag, ChartBar, Basket, Money, Stack, Wallet, FileText, Laptop, Ticket, Gear, ShoppingCart, Barcode } from '@phosphor-icons/react';
import { ButtonSider, ContainerSidebar, Logo, Menu, SubMenu, SubMenuItem } from './styled';
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
    { icon: <Barcode />, label: 'Confrapix', path: "/confrapix" },
    ...(dataUser?.seller_type !== 'EC' ? [
      { icon: <Storefront />, label: 'Estabelecimentos', path: "/sellers-ec" },
      { icon: <Tag />, label: 'Licenciados', path: "/sellers-la" },
      { icon: <Money />, label: 'Comissões', path: "/commission" },
      { icon: <Stack />, label: 'Planos', path: "/plans" },
      { icon: <Laptop />, label: 'Equipamentos', path: "/equipmentStock" },
      { icon: <Wallet />, label: 'Financeiro', isSubmenu: true },
      { icon: <Ticket />, label: 'Tickets', path: "/tickets" },
      { icon: <ShoppingCart />, label: 'Shopping', isSubmenu: true },
      { icon: <Gear />, label: 'Configurações', isSubmenu: true },
    ] : []),
    { icon: <FileText />, label: 'Documentos', path: "/documents" },

  ];

  const [selectedItem, setSelectedItem] = useState<number | null>(() => {
    const paths = menuItems.map(item => item.path);
    const matchedIndex = paths.findIndex(path => path && location.pathname.includes(path));
    return matchedIndex > -1 ? matchedIndex : null;
  });

  const [financeiroSubmenuOpen, setFinanceiroSubmenuOpen] = useState<boolean>(false);
  const [configSubmenuOpen, setConfigSubmenuOpen] = useState<boolean>(false);
  const [shoppingSubmenuOpen, setShoppingSubmenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const paths = menuItems.map(item => item.path);
    const matchedIndex = paths.findIndex(path => path && location.pathname.includes(path));
    setSelectedItem(matchedIndex > -1 ? matchedIndex : null);

    if (!isVisible) {
      setFinanceiroSubmenuOpen(false);
      setConfigSubmenuOpen(false);
      setShoppingSubmenuOpen(false);
    } else {
      setFinanceiroSubmenuOpen(menuItems[matchedIndex]?.isSubmenu ?? false);
      setConfigSubmenuOpen(menuItems[matchedIndex]?.isSubmenu ?? false);
      setShoppingSubmenuOpen(menuItems[matchedIndex]?.isSubmenu ?? false);
    }
  }, [location.pathname, isVisible]);

  const handleNavigation = (index: number, path?: string) => {
    if (path) {
      navigate(path);
      setSelectedItem(index);
      setFinanceiroSubmenuOpen(menuItems[index]?.isSubmenu ?? false);
      setConfigSubmenuOpen(menuItems[index]?.isSubmenu ?? false);
      setShoppingSubmenuOpen(menuItems[index]?.isSubmenu ?? false);
    }
  };

  const financeiroSubmenuItems = [
    { label: 'Resumo de rendimentos ', path: '/yield-summary' },
    { label: 'Extrato', path: '/extract' },
    { label: 'Tarifas', path: '/tariffs' },
    { label: 'Solicitação de Cobrança', path: '/charging-request' },
    { label: 'Pagamentos', path: '/payments' }
  ];

  const configSubmenuItems = [
    { label: 'Log', path: '/log' },
  ];

  const shoppingSubmenuItems = [
    { label: 'Meus Pedidos', path: '/e-com-payments-request' },
    { label: 'Produtos', path: '/e-com' },
  ];

  const financeiroIndex = menuItems.findIndex(item => item.label === 'Financeiro');
  const configIndex = menuItems.findIndex(item => item.label === 'Configurações');
  const shoppingIndex = menuItems.findIndex(item => item.label === 'Shopping');

  const toggleFinanceiroSubmenu = () => {
    setFinanceiroSubmenuOpen(!financeiroSubmenuOpen);
    setSelectedItem(financeiroIndex);
  };

  const toggleConfigSubmenu = () => {
    setConfigSubmenuOpen(!configSubmenuOpen);
    setSelectedItem(configIndex);
  };

  const toggleShoppingSubmenu = () => {
    setShoppingSubmenuOpen(!shoppingSubmenuOpen);
    setSelectedItem(shoppingIndex);
  };

  return (
    <ContainerSidebar onMouseEnter={showSidebar} onMouseLeave={hideSidebar} color={tenantData.primary_color_identity} isVisible={isVisible}>
      <Logo src={isVisible ? tenantData.attachment_logo_white : tenantData.icon} />

      <Menu colorSec={tenantData.secondary_color_identity}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ButtonSider
              colorSec={tenantData.secondary_color_identity}
              selected={selectedItem === index}
              onClick={() => item.isSubmenu ? 
                (item.label === 'Financeiro' ? toggleFinanceiroSubmenu() : 
                 item.label === 'Configurações' ? toggleConfigSubmenu() : 
                 toggleShoppingSubmenu()) : 
                handleNavigation(index, item.path)}
            >
              {item.icon}
              {isVisible && item.label}
              {item.isSubmenu && isVisible && (item.label === 'Financeiro' ? (financeiroSubmenuOpen ? <BiChevronUp /> : <BiChevronDown />) : 
                item.label === 'Configurações' ? (configSubmenuOpen ? <BiChevronUp /> : <BiChevronDown />) : 
                (shoppingSubmenuOpen ? <BiChevronUp /> : <BiChevronDown />))}
            </ButtonSider>
            {item.isSubmenu && item.label === 'Financeiro' && financeiroSubmenuOpen && (
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
            {item.isSubmenu && item.label === 'Configurações' && configSubmenuOpen && (
              <SubMenu>
                {configSubmenuItems.map((subItem, subIndex) => (
                  <SubMenuItem
                    key={subIndex}
                    onClick={() => handleNavigation(configIndex, subItem.path)}
                  >
                    {subItem.label}
                  </SubMenuItem>
                ))}
              </SubMenu>
            )}
            {item.isSubmenu && item.label === 'Shopping' && shoppingSubmenuOpen && (
              <SubMenu>
                {shoppingSubmenuItems.map((subItem, subIndex) => (
                  <SubMenuItem
                    key={subIndex}
                    onClick={() => handleNavigation(shoppingIndex, subItem.path)}
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
