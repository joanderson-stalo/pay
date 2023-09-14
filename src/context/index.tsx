import { ReactNode } from 'react';
import { DocumentProvider } from './useDocument';
import { TransactionVendasProvider } from './useVendas';
import { LoginProvider } from './user.login';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <LoginProvider>
      <TransactionVendasProvider>
        <DocumentProvider>
          {children}
        </DocumentProvider>
      </TransactionVendasProvider>
    </LoginProvider>
  );
}
