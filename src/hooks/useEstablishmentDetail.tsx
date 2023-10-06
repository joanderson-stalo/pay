import { useEffect, useState } from "react";

interface UseEstablishmentDetailReturn {
  detailNumber: number;
  setDetailNumber: (num: number) => void;
}

export function useEstablishmentDetail(initialNumber: number = 0): UseEstablishmentDetailReturn {
  const [detailNumber, setStoredNumber] = useState<number>(() => {
    const storageNumber = localStorage.getItem('@EstablishmentDetail:number');
    return storageNumber ? JSON.parse(storageNumber) : initialNumber;
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      setStoredNumber(customEvent.detail);
    };

    window.addEventListener('@EstablishmentDetail:change', handler);

    return () => {
      window.removeEventListener('@EstablishmentDetail:change', handler);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@EstablishmentDetail:number', JSON.stringify(detailNumber));
    window.dispatchEvent(new CustomEvent('@EstablishmentDetail:change', { detail: detailNumber }));
  }, [detailNumber]);

  const setDetailNumber = (num: number) => {
    setStoredNumber(num);
  };

  return { detailNumber, setDetailNumber };
}
