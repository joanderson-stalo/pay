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
import { TicketIDProvider } from './id/ticketId';
import { CartProvider } from './e-com/cart';
import { PlanIDProvider } from './id/planID';
import { PaymentIDProvider } from './id/paymentsID';

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
                            <PlanIDProvider>
                              <PaymentIDProvider>

                      {children}


                      </PaymentIDProvider>
                      </PlanIDProvider>
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
