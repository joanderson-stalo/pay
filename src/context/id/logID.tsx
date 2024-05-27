import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

type LogIDContextType = {
  selectedLogID: string | null;
  setSelectedLogID: (id: string | null) => void;
};

const LogIDContext = createContext<LogIDContextType | undefined>(undefined);

type LogIDProviderProps = {
  children: ReactNode;
};

export function LogIDProvider({ children }: LogIDProviderProps) {

  const initialLogID = secureLocalStorage.getItem('selectedLogID') as string | null;
  const [selectedLogID, setSelectedLogID] = useState<string | null>(initialLogID);

  useEffect(() => {
    if (selectedLogID) {
      secureLocalStorage.setItem('selectedLogID', selectedLogID);
    } else {
      secureLocalStorage.removeItem('selectedLogID');
    }
  }, [selectedLogID]);

  return (
    <LogIDContext.Provider value={{ selectedLogID, setSelectedLogID }}>
      {children}
    </LogIDContext.Provider>
  );
}

export function useLogID(): LogIDContextType {
  const context = useContext(LogIDContext);
  if (context === undefined) {
    throw new Error('useLogID deve ser usado dentro de um LogIDProvider');
  }
  return context;
}
