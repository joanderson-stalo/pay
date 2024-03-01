import { ReactNode } from 'react';
import { TransactionVendasProvider } from './useVendas';
import { LoginProvider } from './user.login';
import { DocumentProviderLA } from './useDocumentLA';
import { DocumentProviderEC } from './useDocumentEC';
import { SidebarVisibilityProvider } from './sidebarVisibilityContext';
import { UseLicensedProvider } from './useLicensed';
import { UseEstablishmentProvider } from './useEstablishment';


type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <LoginProvider>
      <TransactionVendasProvider>
        <DocumentProviderLA>
          <DocumentProviderEC>
            <UseLicensedProvider>
              <UseEstablishmentProvider>
            <SidebarVisibilityProvider>
              {children}
            </SidebarVisibilityProvider>
            </UseEstablishmentProvider>
            </UseLicensedProvider>
          </DocumentProviderEC>
        </DocumentProviderLA>
      </TransactionVendasProvider>
    </LoginProvider>
  );
}
