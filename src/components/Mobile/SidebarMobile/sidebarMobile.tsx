import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Storefront, Tag, ChartBar, Basket, Money, Stack, Wallet, FileText, Laptop, Ticket } from '@phosphor-icons/react';
import { ButtonSider, ContainerSidebarMobile, Logo, Menu, Overlay } from './styled';
import { ThemeImg } from '@/config/img';
import { useLogin } from '@/context/user.login';
import { useTenantData } from '@/context';

interface SidebarMobileProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  icon: JSX.Element;
  label: string;
  path?: string;
  isSubmenu?: boolean;
  submenuItems?: { label: string; path: string }[];
}

export function SidebarMobile({ isOpen, toggleSidebar }: SidebarMobileProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { dataUser } = useLogin();
  const tenantData = useTenantData();

  const menuItems: MenuItem[] = [
    { icon: <ChartBar />, label: 'Resumo', path: "/home" },
    { icon: <Basket />, label: 'Vendas', path: "/transaction" },
    ...(dataUser?.seller_type !== 'EC' ? [
        { icon: <Storefront />, label: 'Estabelecimentos', path: "/sellers-ec" },
        { icon: <Tag />, label: 'Licenciados', path: "/sellers-la" },
        { icon: <Money />, label: 'Comissões', path: "/commission" },
        { icon: <Stack />, label: 'Planos', path: "/plans" },
        { icon: <Laptop />, label: 'Equipamentos', path: "/equipmentStock" },
        { icon: <Wallet />, label: 'Financeiro', isSubmenu: true, submenuItems: [
            { label: 'Resumo de rendimentos ', path: '/operationManagement' },
            { label: 'Extrato', path: '/extract' },
            { label: 'Tarifas', path: '/tariffs' },
            { label: 'Solicitação de Cobrança', path: '/billingRequest' },
            { label: 'Pagamentos', path: '/pagamentos' }
        ] },
    ] : []),
    { icon: <Ticket />, label: 'Tickets', path: "/tickets" },
    { icon: <FileText />, label: 'Documentos', path: "/documents" }
];


  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [subMenuOpen, setSubMenuOpen] = useState<boolean[]>(menuItems.map(() => false));

  useEffect(() => {
    const matchedIndex = menuItems.findIndex(item => location.pathname.includes(item.path || ''));
    setSelectedItem(matchedIndex > -1 ? matchedIndex : null);
  }, [location.pathname]);

  const handleNavigation = (index: number, path: string) => {
    setSelectedItem(index);
    navigate(path);
    toggleSidebar();
  };

  const toggleSubMenu = (index: number) => {
    const newSubMenuOpen = [...subMenuOpen];
    newSubMenuOpen[index] = !newSubMenuOpen[index];
    setSubMenuOpen(newSubMenuOpen);
  };

  const handleSubmenuItemNavigation = (path: string) => {
    navigate(path);
    toggleSidebar();
    handleCloseMenu();
  };

  const handleCloseMenu = () => {
    setSubMenuOpen(menuItems.map(() => false));
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggleSidebar} />
      <ContainerSidebarMobile isOpen={isOpen} color={tenantData.primary_color_identity}>
        <Logo src={tenantData.attachment_logo_white} alt="Logo" />
        <Menu colorSec={tenantData.secondary_color_identity}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ButtonSider
                colorSec={tenantData.secondary_color_identity}
                selected={selectedItem === index}
                onClick={() => {
                  handleCloseMenu();
                  if (item.isSubmenu) {
                    toggleSubMenu(index);
                  } else {
                    handleNavigation(index, item.path || '');
                  }
                }}
              >
                {item.icon} {item.label}
              </ButtonSider>
              {item.isSubmenu && subMenuOpen[index] && (
                <Menu colorSec={tenantData.secondary_color_identity}>
                  {item.submenuItems && item.submenuItems.map((subItem, subIndex) => (
                    <ButtonSider
                      key={subIndex}
                      colorSec={tenantData.secondary_color_identity}
                      selected={false}
                      onClick={() => handleSubmenuItemNavigation(subItem.path)}
                    >
                      {subItem.label}
                    </ButtonSider>
                  ))}
                </Menu>
              )}
            </React.Fragment>
          ))}
        </Menu>
      </ContainerSidebarMobile>
    </>
  );
}
