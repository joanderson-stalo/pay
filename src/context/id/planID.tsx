import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

type PlanIDContextType = {
  selectedPlanID: string | null;
  setSelectedPlanID: (id: string | null) => void;
};

const PlanIDContext = createContext<PlanIDContextType | undefined>(undefined);

type PlanIDProviderProps = {
  children: ReactNode;
};

export function PlanIDProvider({ children }: PlanIDProviderProps) {
  const initialPlanID = secureLocalStorage.getItem('selectedPlanID') as string | null;
  const [selectedPlanID, setSelectedPlanID] = useState<string | null>(initialPlanID);

  useEffect(() => {
    if (selectedPlanID) {
      secureLocalStorage.setItem('selectedPlanID', selectedPlanID);
    } else {
      secureLocalStorage.removeItem('selectedPlanID');
    }
  }, [selectedPlanID]);

  return (
    <PlanIDContext.Provider value={{ selectedPlanID, setSelectedPlanID }}>
      {children}
    </PlanIDContext.Provider>
  );
}

export function usePlanID(): PlanIDContextType {
  const context = useContext(PlanIDContext);
  if (context === undefined) {
    throw new Error('usePlanID deve ser usado dentro de um PlanIDProvider');
  }
  return context;
}
