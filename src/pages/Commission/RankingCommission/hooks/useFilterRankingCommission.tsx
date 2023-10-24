import { useEffect, useState } from "react";

interface UseFilterRankingCommissionReturn {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export function useFilterRankingCommission(initialState: boolean = false): UseFilterRankingCommissionReturn {
  const [state, setState] = useState<boolean>(() => {
    const storageState = localStorage.getItem('@FilterRankingCommission:state');
    return storageState ? JSON.parse(storageState) : initialState;
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setState(customEvent.detail);
    };

    window.addEventListener('@FilterRankingCommission:change', handler);

    return () => {
      window.removeEventListener('@FilterRankingCommission:change', handler);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@FilterRankingCommission:state', JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('@FilterRankingCommission:change', { detail: state }));
  }, [state]);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  return { state, setTrue, setFalse };
}
