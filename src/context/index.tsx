import { ReactNode, createContext, useContext } from 'react';
import { LoginProvider } from './user.login';
import { DocumentProviderLA } from './useDocumentLA';
import { DocumentProviderEC } from './useDocumentEC';
import { SidebarVisibilityProvider } from './sidebarVisibilityContext';
import { UseLicensedProvider } from './useLicensed';
import { UseEstablishmentProvider } from './useEstablishment';
import { TransactionVendasProvider } from './useTransaction';
import { UseTariffProvider } from './useTariff';
import { SalesPageProvider } from './salesPageContext';
import { IdPosProvider } from './useIdPos';

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

// Defina o contexto com o tipo de dados do inquilino
const TenantDataContext = createContext<TenantData>({} as TenantData);

// Use o hook para acessar os dados do inquilino
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
                      <SalesPageProvider initialPage={1}>
                      {children}
                      </SalesPageProvider>
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
