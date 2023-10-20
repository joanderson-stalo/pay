import { useState, useEffect } from 'react';

interface UseLabelSalesReturn {
  label: string;
  setLabel: (value: string) => void;
}

export function useLabelSales(initialLabel: string = "Filtragem 01"): UseLabelSalesReturn {
  const [label, setLabelState] = useState(() => {
    const storageLabel = localStorage.getItem('@EditableButtonSales:label');
    return storageLabel ? JSON.parse(storageLabel) : initialLabel;
  });

  useEffect(() => {
    localStorage.setItem('@EditableButtonSales:label', JSON.stringify(label));
  }, [label]);

  const setLabel = (value: string) => {
    setLabelState(value);
    localStorage.setItem('@EditableButtonSales:label', JSON.stringify(value));
  };

  return { label, setLabel };
}
