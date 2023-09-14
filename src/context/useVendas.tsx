import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type TransactionVendasContextType = {
  selectedTransactionId: string | null;
  setSelectedTransactionId: (id: string | null) => void;
};

const TransactionVendasContext = createContext<TransactionVendasContextType | undefined>(undefined);

type TransactionVendasProviderProps = {
  children: ReactNode;
};

export function TransactionVendasProvider({ children }: TransactionVendasProviderProps) {

  const initialTransactionId = sessionStorage.getItem('selectedTransactionId');
  const [selectedTransactionId, setSelectedTransactionId] = useState<string | null>(initialTransactionId);

  useEffect(() => {
    if (selectedTransactionId) {
      sessionStorage.setItem('selectedTransactionId', selectedTransactionId);
    } else {
      sessionStorage.removeItem('selectedTransactionId');
    }
  }, [selectedTransactionId]);

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
