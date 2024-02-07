import { useState, useEffect } from 'react';

interface UseLabelLicensedReturn {
  label: string;
  setLabel: (value: string) => void;
}

export function useLabelLicensed(initialLabel: string = "Filtragem 01"): UseLabelLicensedReturn {
  const [label, setLabelState] = useState(() => {
    const storageLabel = localStorage.getItem('@EditableButtonLicensed:label');
    return storageLabel ? JSON.parse(storageLabel) : initialLabel;
  });

  useEffect(() => {
    localStorage.setItem('@EditableButtonLicensed:label', JSON.stringify(label));
  }, [label]);

  const setLabel = (value: string) => {
    setLabelState(value);
    localStorage.setItem('@EditableButtonLicensed:label', JSON.stringify(value));
  };

  return { label, setLabel };
}
