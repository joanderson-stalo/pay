import { useEffect, useState } from "react";

interface UseDetailLicensedReturn {
  licensedNumber: number;
  setLicensedNumber: (num: number) => void;
}

export function useDetailLicensed(initialNumber: number = 0): UseDetailLicensedReturn {
  const [licensedNumber, setStoredNumber] = useState<number>(() => {
    const storageNumber = localStorage.getItem('@DetailLicensed:number');
    return storageNumber ? JSON.parse(storageNumber) : initialNumber;
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      setStoredNumber(customEvent.detail);
    };

    window.addEventListener('@DetailLicensed:change', handler);

    return () => {
      window.removeEventListener('@DetailLicensed:change', handler);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@DetailLicensed:number', JSON.stringify(licensedNumber));
    window.dispatchEvent(new CustomEvent('@DetailLicensed:change', { detail: licensedNumber }));
  }, [licensedNumber]);

  const setLicensedNumber = (num: number) => {
    setStoredNumber(num);
  };

  return { licensedNumber, setLicensedNumber };
}
