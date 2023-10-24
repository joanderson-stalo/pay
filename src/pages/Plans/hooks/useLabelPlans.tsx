import { useState, useEffect } from 'react';

interface UseLabelPlansReturn {
  label: string;
  setLabel: (value: string) => void;
}

export function useLabelPlans(initialLabel: string = "Filtragem 01"): UseLabelPlansReturn {
  const [label, setLabelState] = useState(() => {
    const storageLabel = localStorage.getItem('@EditableButtonPlans:label');
    return storageLabel ? JSON.parse(storageLabel) : initialLabel;
  });

  useEffect(() => {
    localStorage.setItem('@EditableButtonPlans:label', JSON.stringify(label));
  }, [label]);

  const setLabel = (value: string) => {
    setLabelState(value);
    localStorage.setItem('@EditableButtonPlans:label', JSON.stringify(value));
  };

  return { label, setLabel };
}
