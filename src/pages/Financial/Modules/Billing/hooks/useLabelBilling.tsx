import { useState, useEffect } from 'react';

interface UseLabelBillingReturn {
  label: string;
  setLabel: (value: string) => void;
}

export function useLabelBilling(initialLabel: string = "Filtragem 01"): UseLabelBillingReturn {
  const [label, setLabelState] = useState(() => {
    const storageLabel = localStorage.getItem('@EditableButtonBilling:label');
    return storageLabel ? JSON.parse(storageLabel) : initialLabel;
  });

  useEffect(() => {
    localStorage.setItem('@EditableButtonBilling:label', JSON.stringify(label));
  }, [label]);

  const setLabel = (value: string) => {
    setLabelState(value);
    localStorage.setItem('@EditableButtonBilling:label', JSON.stringify(value));
  };

  return { label, setLabel };
}
