import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

type IdPosContextType = {
  selectedIdPos: string | null;
  setSelectedIdPos: (id: string | null) => void;
};

const IdPosContext = createContext<IdPosContextType | undefined>(undefined);

type IdPosProviderProps = {
  children: ReactNode;
};

export function IdPosProvider({ children }: IdPosProviderProps) {

  const initialIdPos = secureLocalStorage.getItem('selectedIdPos') as string | null;
  const [selectedIdPos, setSelectedIdPos] = useState<string | null>(initialIdPos);

  useEffect(() => {
    if (selectedIdPos) {
      secureLocalStorage.setItem('selectedIdPos', selectedIdPos);
    } else {
      secureLocalStorage.removeItem('selectedIdPos');
    }
  }, [selectedIdPos]);

  return (
    <IdPosContext.Provider value={{ selectedIdPos, setSelectedIdPos }}>
      {children}
    </IdPosContext.Provider>
  );
}

export function useIdPos(): IdPosContextType {
  const context = useContext(IdPosContext);
  if (context === undefined) {
    throw new Error('');
  }
  return context;
}
