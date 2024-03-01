import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type UseEstablishmentContextType = {
  establishmentId: string | null;
  setEstablishmentId: (id: string | null) => void;
};

const UseEstablishmentContext = createContext<UseEstablishmentContextType | undefined>(undefined);

type UseEstablishmentProviderProps = {
  children: ReactNode;
};

export function UseEstablishmentProvider({ children }: UseEstablishmentProviderProps) {

  const initialEstablishmentId = localStorage.getItem('establishmentId');
  const [establishmentId, setEstablishmentId] = useState<string | null>(initialEstablishmentId);

  useEffect(() => {
    if (establishmentId) {
      localStorage.setItem('establishmentId', establishmentId);
    } else {
      localStorage.removeItem('establishmentId');
    }
  }, [establishmentId]);

  return (
    <UseEstablishmentContext.Provider value={{ establishmentId, setEstablishmentId }}>
      {children}
    </UseEstablishmentContext.Provider>
  );
}

export function useEstablishment(): UseEstablishmentContextType {
  const context = useContext(UseEstablishmentContext);
  if (context === undefined) {
    throw new Error('useEstablishment must be used within a UseEstablishmentProvider');
  }
  return context;
}
