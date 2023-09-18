import { ReactNode } from 'react';
import { TransactionVendasProvider } from './useVendas';
import { LoginProvider } from './user.login';
import { DocumentProviderLA } from './useDocumentLA';
import { DocumentProviderEC } from './useDocumentEC';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <LoginProvider>
      <TransactionVendasProvider>
      <DocumentProviderLA>
        <DocumentProviderEC>
          {children}
        </DocumentProviderEC>
        </DocumentProviderLA>
      </TransactionVendasProvider>
    </LoginProvider>
  );
}
