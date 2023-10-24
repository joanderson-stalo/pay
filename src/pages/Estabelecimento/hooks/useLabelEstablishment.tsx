import { useState, useEffect } from 'react';

interface UseLabelSalesReturn {
  label: string;
  setLabel: (value: string) => void;
}

export function useLabelEstablishment(initialLabel: string = "Filtragem 01"): UseLabelSalesReturn {
  const [label, setLabelState] = useState(() => {
    const storageLabel = localStorage.getItem('@EditableButtonEstablishment:label');
    return storageLabel ? JSON.parse(storageLabel) : initialLabel;
  });

  useEffect(() => {
    localStorage.setItem('@EditableButtonEstablishment:label', JSON.stringify(label));
  }, [label]);

  const setLabel = (value: string) => {
    setLabelState(value);
    localStorage.setItem('@EditableButtonEstablishment:label', JSON.stringify(value));
  };

  return { label, setLabel };
}
