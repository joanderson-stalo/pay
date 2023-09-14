import { createContext, useContext, ReactNode, useState } from 'react';

type TransactionVendasContextType = {
  selectedTransactionId: string | null;
  setSelectedTransactionId: (id: string | null) => void;
};

const TransactionVendasContext = createContext<TransactionVendasContextType | undefined>(undefined);

type TransactionVendasProviderProps = {
  children: ReactNode;
};

export function TransactionVendasProvider({ children }: TransactionVendasProviderProps) {
  const [selectedTransactionId, setSelectedTransactionId] = useState<string | null>(null);

  return (
    <TransactionVendasContext.Provider value={{ selectedTransactionId, setSelectedTransactionId }}>
      {children}
    </TransactionVendasContext.Provider>
  );
}

export function useTransactionVendas(): TransactionVendasContextType {
  const context = useContext(TransactionVendasContext);
  if (context === undefined) {
    throw new Error('useTransactionVendas must be used within a TransactionVendasProvider');
  }
  return context;
}
