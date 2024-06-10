import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

type PaymentIDContextType = {
  selectedPaymentID: string | null;
  setSelectedPaymentID: (id: string | null) => void;
};

const PaymentIDContext = createContext<PaymentIDContextType | undefined>(undefined);

type PaymentIDProviderProps = {
  children: ReactNode;
};

export function PaymentIDProvider({ children }: PaymentIDProviderProps) {
  const initialPaymentID = secureLocalStorage.getItem('selectedPaymentID') as string | null;
  const [selectedPaymentID, setSelectedPaymentID] = useState<string | null>(initialPaymentID);

  useEffect(() => {
    if (selectedPaymentID) {
      secureLocalStorage.setItem('selectedPaymentID', selectedPaymentID);
    } else {
      secureLocalStorage.removeItem('selectedPaymentID');
    }
  }, [selectedPaymentID]);

  return (
    <PaymentIDContext.Provider value={{ selectedPaymentID, setSelectedPaymentID }}>
      {children}
    </PaymentIDContext.Provider>
  );
}

export function usePaymentID(): PaymentIDContextType {
  const context = useContext(PaymentIDContext);
  if (context === undefined) {
    throw new Error('usePaymentID deve ser usado dentro de um PaymentIDProvider');
  }
  return context;
}
