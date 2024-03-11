import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

type UseTariffContextType = {
  tariffId: string | null;
  setTariffId: (id: string | null) => void;
};

const UseTariffContext = createContext<UseTariffContextType | undefined>(undefined);

type UseTariffProviderProps = {
  children: ReactNode;
};

export function UseTariffProvider({ children }: UseTariffProviderProps) {
  const getInitialTariffId = (): string | null => {
    const item = secureLocalStorage.getItem('tariffId');
    if (typeof item === 'string') {
      return item;
    }
    return null; 
  };

  const [tariffId, setTariffId] = useState<string | null>(getInitialTariffId());

  useEffect(() => {
    if (tariffId) {
      secureLocalStorage.setItem('@tariffId', tariffId);
    } else {
      secureLocalStorage.removeItem('@tariffId');
    }
  }, [tariffId]);

  return (
    <UseTariffContext.Provider value={{ tariffId, setTariffId }}>
      {children}
    </UseTariffContext.Provider>
  );
}

export function useTariff(): UseTariffContextType {
  const context = useContext(UseTariffContext);
  if (context === undefined) {
    throw new Error('useTariff must be used within a UseTariffProvider');
  }
  return context;
}
