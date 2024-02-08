import { useState, useEffect } from 'react';

interface UseLabelDailyCommissionReturn {
  label: string;
  setLabel: (value: string) => void;
}

export function useLabelDailyCommission(initialLabel: string = "Filtragem 01"): UseLabelDailyCommissionReturn {
  const [label, setLabelState] = useState(() => {
    const storageLabel = localStorage.getItem('@EditableButtonDailyCommission:label');
    return storageLabel ? JSON.parse(storageLabel) : initialLabel;
  });

  useEffect(() => {
    localStorage.setItem('@EditableButtonDailyCommission:label', JSON.stringify(label));
  }, [label]);

  const setLabel = (value: string) => {
    setLabelState(value);
    localStorage.setItem('@EditableButtonDailyCommission:label', JSON.stringify(value));
  };

  return { label, setLabel };
}
