import { useEffect, useState } from "react";

interface UseFilterSalesReturn {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export function useFilterSales(initialState: boolean = false): UseFilterSalesReturn {
  const [state, setState] = useState<boolean>(() => {
    const storageState = localStorage.getItem('@FilterStateSales:state');
    return storageState ? JSON.parse(storageState) : initialState;
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setState(customEvent.detail);
    };

    window.addEventListener('@FilterStateSales:change', handler);

    return () => {
      window.removeEventListener('@FilterStateSales:change', handler);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@FilterStateSales:state', JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('@FilterStateSales:change', { detail: state }));
  }, [state]);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  return { state, setTrue, setFalse };
}
