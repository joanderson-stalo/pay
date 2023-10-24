import { useEffect, useState } from "react";

interface UseFilterDailyCommissionReturn {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export function useFilterDailyCommission(initialState: boolean = false): UseFilterDailyCommissionReturn {
  const [state, setState] = useState<boolean>(() => {
    const storageState = localStorage.getItem('@FilterDailyCommission:state');
    return storageState ? JSON.parse(storageState) : initialState;
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setState(customEvent.detail);
    };

    window.addEventListener('@FilterDailyCommission:change', handler);

    return () => {
      window.removeEventListener('@FilterDailyCommission:change', handler);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@FilterDailyCommission:state', JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('@FilterDailyCommission:change', { detail: state }));
  }, [state]);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  return { state, setTrue, setFalse };
}
