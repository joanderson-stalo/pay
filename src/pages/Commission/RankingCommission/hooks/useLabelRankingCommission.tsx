import { useState, useEffect } from 'react';

interface UseLabelRankingCommissionReturn {
  label: string;
  setLabel: (value: string) => void;
}

export function useLabelRankingCommission(initialLabel: string = "Filtragem 01"): UseLabelRankingCommissionReturn {
  const [label, setLabelState] = useState(() => {
    const storageLabel = localStorage.getItem('@EditableButtonRankingCommission:label');
    return storageLabel ? JSON.parse(storageLabel) : initialLabel;
  });

  useEffect(() => {
    localStorage.setItem('@EditableButtonRankingCommission:label', JSON.stringify(label));
  }, [label]);

  const setLabel = (value: string) => {
    setLabelState(value);
    localStorage.setItem('@EditableButtonRankingCommission:label', JSON.stringify(value));
  };

  return { label, setLabel };
}
