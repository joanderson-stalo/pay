import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

type UseLicensedContextType = {
  licensedId: string | null;
  setLicensedId: (id: string | null) => void;
};

const UseLicensedContext = createContext<UseLicensedContextType | undefined>(undefined);

type UseLicensedProviderProps = {
  children: ReactNode;
};

export function UseLicensedProvider({ children }: UseLicensedProviderProps) {
  const initialLicensedId = secureLocalStorage.getItem('@licensedId') as string | null;
  const [licensedId, setLicensedId] = useState<string | null>(initialLicensedId);

 

  useEffect(() => {
    if (licensedId) {
      secureLocalStorage.setItem('@licensedId', licensedId);
    } else {
      secureLocalStorage.removeItem('@licensedId');
    }
  }, [licensedId]);

  return (
    <UseLicensedContext.Provider value={{ licensedId, setLicensedId }}>
      {children}
    </UseLicensedContext.Provider>
  );
}

export function useLicensed(): UseLicensedContextType {
  const context = useContext(UseLicensedContext);
  if (context === undefined) {
    throw new Error('useLicensed must be used within a UseLicensedProvider');
  }
  return context;
}
