import { ReactNode } from 'react';

import { LoginProvider } from './user.login';
import { DocumentProviderLA } from './useDocumentLA';
import { DocumentProviderEC } from './useDocumentEC';
import { SidebarVisibilityProvider } from './sidebarVisibilityContext';
import { UseLicensedProvider } from './useLicensed';
import { UseEstablishmentProvider } from './useEstablishment';
import { TransactionVendasProvider } from './useTransaction';
import { UseTariffProvider } from './useTariff';


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
              <UseTariffProvider>
                  {children}
              </UseTariffProvider>
            </SidebarVisibilityProvider>
            </UseEstablishmentProvider>
            </UseLicensedProvider>
          </DocumentProviderEC>
        </DocumentProviderLA>
      </TransactionVendasProvider>
    </LoginProvider>
  );
}
