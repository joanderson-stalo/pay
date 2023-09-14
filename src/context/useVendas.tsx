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

  const initialTransactionId = localStorage.getItem('selectedTransactionId');
  const [selectedTransactionId, setSelectedTransactionId] = useState<string | null>(initialTransactionId);

  useEffect(() => {
    if (selectedTransactionId) {
      localStorage.setItem('selectedTransactionId', selectedTransactionId);
    } else {
      localStorage.removeItem('selectedTransactionId');
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
    throw new Error('');
  }
  return context;
}
