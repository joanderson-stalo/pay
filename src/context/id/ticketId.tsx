import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

type TicketIDContextType = {
  selectedTicketID: string | null;
  setSelectedTicketID: (id: string | null) => void;
};

const TicketIDContext = createContext<TicketIDContextType | undefined>(undefined);

type TicketIDProviderProps = {
  children: ReactNode;
};

export function TicketIDProvider({ children }: TicketIDProviderProps) {

  const initialTicketID = secureLocalStorage.getItem('selectedTicketID') as string | null;
  const [selectedTicketID, setSelectedTicketID] = useState<string | null>(initialTicketID);

  useEffect(() => {
    if (selectedTicketID) {
      secureLocalStorage.setItem('selectedTicketID', selectedTicketID);
    } else {
      secureLocalStorage.removeItem('selectedTicketID');
    }
  }, [selectedTicketID]);

  return (
    <TicketIDContext.Provider value={{ selectedTicketID, setSelectedTicketID }}>
      {children}
    </TicketIDContext.Provider>
  );
}

export function useTicketID(): TicketIDContextType {
  const context = useContext(TicketIDContext);
  if (context === undefined) {
    throw new Error('useTicketID deve ser usado dentro de um TicketIDProvider');
  }
  return context;
}
