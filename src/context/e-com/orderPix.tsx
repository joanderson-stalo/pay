import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

type OrderPixEcomContextType = {
  selectedOrderPixEcomID: string | null;
  setSelectedOrderPixEcomID: (id: string | null) => void;
};

const OrderPixEcomContext = createContext<OrderPixEcomContextType | undefined>(undefined);

type OrderPixEcomProviderProps = {
  children: ReactNode;
};

export function OrderPixEcomProvider({ children }: OrderPixEcomProviderProps) {
  const initialOrderPixEcomID = secureLocalStorage.getItem('selectedOrderPixEcomID') as string | null;
  const [selectedOrderPixEcomID, setSelectedOrderPixEcomID] = useState<string | null>(initialOrderPixEcomID);

  useEffect(() => {
    if (selectedOrderPixEcomID) {
      secureLocalStorage.setItem('selectedOrderPixEcomID', selectedOrderPixEcomID);
    } else {
      secureLocalStorage.removeItem('selectedOrderPixEcomID');
    }
  }, [selectedOrderPixEcomID]);

  return (
    <OrderPixEcomContext.Provider value={{ selectedOrderPixEcomID, setSelectedOrderPixEcomID }}>
      {children}
    </OrderPixEcomContext.Provider>
  );
}

export function useOrderPixEcom(): OrderPixEcomContextType {
  const context = useContext(OrderPixEcomContext);
  if (context === undefined) {
    throw new Error('useOrderPixEcom deve ser usado dentro de um OrderPixEcomProvider');
  }
  return context;
}
