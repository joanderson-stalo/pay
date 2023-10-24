import { useEffect, useState } from "react";

interface UseFilterEstablishmentReturn {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export function useFilterEstablishment(initialState: boolean = false): UseFilterEstablishmentReturn {
  const [state, setState] = useState<boolean>(() => {
    const storageState = localStorage.getItem('@FilterStateEstablishment:state');
    return storageState ? JSON.parse(storageState) : initialState;
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setState(customEvent.detail);
    };

    window.addEventListener('@FilterStateEstablishment:change', handler);

    return () => {
      window.removeEventListener('@FilterStateEstablishment:change', handler);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@FilterStateEstablishment:state', JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('@FilterStateEstablishment:change', { detail: state }));
  }, [state]);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  return { state, setTrue, setFalse };
}
