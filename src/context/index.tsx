import { ReactNode } from 'react';
import { TransactionVendasProvider } from './useVendas';
import { LoginProvider } from './user.login';
import { DocumentProviderLA } from './useDocumentLA';
import { DocumentProviderEC } from './useDocumentEC';
import { SidebarVisibilityProvider } from './sidebarVisibilityContext';


type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <LoginProvider>
      <TransactionVendasProvider>
        <DocumentProviderLA>
          <DocumentProviderEC>
            <SidebarVisibilityProvider>
              {children}
            </SidebarVisibilityProvider>
          </DocumentProviderEC>
        </DocumentProviderLA>
      </TransactionVendasProvider>
    </LoginProvider>
  );
}
