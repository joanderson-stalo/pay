import { useState, useEffect } from 'react';

interface UseLabelReturn {
  label: string;
  setLabel: (value: string) => void;
}

export function useLabelStorage(initialLabel: string = "Filtragem 01"): UseLabelReturn {
  const [label, setLabelState] = useState(() => {
    const storageLabel = localStorage.getItem('@EditableButton:label');
    return storageLabel ? JSON.parse(storageLabel) : initialLabel;
  });

  useEffect(() => {
    localStorage.setItem('@EditableButton:label', JSON.stringify(label));
  }, [label]);

  const setLabel = (value: string) => {
    setLabelState(value);
    localStorage.setItem('@EditableButton:label', JSON.stringify(value));
  };

  return { label, setLabel };
}

