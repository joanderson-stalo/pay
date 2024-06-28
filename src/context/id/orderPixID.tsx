import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

type OrderPixContextType = {
  selectedOrderPixID: string | null;
  setSelectedOrderPixID: (id: string | null) => void;
};

const OrderPixContext = createContext<OrderPixContextType | undefined>(undefined);

type OrderPixProviderProps = {
  children: ReactNode;
};

export function OrderPixProvider({ children }: OrderPixProviderProps) {
  const initialOrderPixID = secureLocalStorage.getItem('selectedOrderPixID') as string | null;
  const [selectedOrderPixID, setSelectedOrderPixID] = useState<string | null>(initialOrderPixID);

  useEffect(() => {
    if (selectedOrderPixID) {
      secureLocalStorage.setItem('selectedOrderPixID', selectedOrderPixID);
    } else {
      secureLocalStorage.removeItem('selectedOrderPixID');
    }
  }, [selectedOrderPixID]);

  return (
    <OrderPixContext.Provider value={{ selectedOrderPixID, setSelectedOrderPixID }}>
      {children}
    </OrderPixContext.Provider>
  );
}

export function useOrderPix(): OrderPixContextType {
  const context = useContext(OrderPixContext);
  if (context === undefined) {
    throw new Error('useOrderPix deve ser usado dentro de um OrderPixProvider');
  }
  return context;
}
