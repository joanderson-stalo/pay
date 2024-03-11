import { useEffect, useState } from "react";

interface UseFilterBillingReturn {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export function useFilterBilling(initialState: boolean = false): UseFilterBillingReturn {
  const [state, setState] = useState<boolean>(() => {
    const storageState = localStorage.getItem('@FilterStateBilling:state');
    return storageState ? JSON.parse(storageState) : initialState;
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setState(customEvent.detail);
    };

    window.addEventListener('@FilterStateBilling:change', handler);

    return () => {
      window.removeEventListener('@FilterStateBilling:change', handler);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@FilterStateBilling:state', JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('@FilterStateBilling:change', { detail: state }));
  }, [state]);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  return { state, setTrue, setFalse };
}
