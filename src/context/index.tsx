import { ReactNode, createContext, useContext } from 'react';
import { LoginProvider } from './user.login';
import { DocumentProviderLA } from './useDocumentLA';
import { DocumentProviderEC } from './useDocumentEC';
import { SidebarVisibilityProvider } from './sidebarVisibilityContext';
import { UseLicensedProvider } from './useLicensed';
import { UseEstablishmentProvider } from './useEstablishment';
import { TransactionVendasProvider } from './useTransaction';
import { UseTariffProvider } from './useTariff';
import { IdPosProvider } from './useIdPos';
import { SalesPageProvider } from './pages/salesPageContext';
import { TicketsPageProvider } from './pages/ticketsPageContext';
import { TicketIDProvider } from './id/ticketId';
import { LogPageProvider } from './pages/logPageContext';
import { CartProvider } from './e-com/cart';

type TenantData = {
  name: string;
  page_title: string;
  icon: string;
  primary_color_identity: string;
  secondary_color_identity: string;
  status: string;
  attachment_logo_colorful: string;
  attachment_logo_white: string;
};


const TenantDataContext = createContext<TenantData>({} as TenantData);


export const useTenantData = () => useContext(TenantDataContext);


type AppProviderProps = {
  children: ReactNode;
  tenantData: TenantData;
};


export function AppProvider({ children, tenantData }: AppProviderProps) {
  return (
    <TenantDataContext.Provider value={tenantData}>
      <LoginProvider>
        <TransactionVendasProvider>
          <DocumentProviderLA>
            <DocumentProviderEC>
              <UseLicensedProvider>
                <UseEstablishmentProvider>
                  <SidebarVisibilityProvider>
                    <UseTariffProvider>
                      <IdPosProvider>
                        <TicketIDProvider>
                          <CartProvider>
                          <LogPageProvider initialPage={1}>
                        <TicketsPageProvider initialPage={1} >
                      <SalesPageProvider initialPage={1}>
                      {children}
                      </SalesPageProvider>
                      </TicketsPageProvider>
                      </LogPageProvider>
                      </CartProvider>
                      </TicketIDProvider>
                      </IdPosProvider>
                    </UseTariffProvider>
                  </SidebarVisibilityProvider>
                </UseEstablishmentProvider>
              </UseLicensedProvider>
            </DocumentProviderEC>
          </DocumentProviderLA>
        </TransactionVendasProvider>
      </LoginProvider>
    </TenantDataContext.Provider>
  );
}
