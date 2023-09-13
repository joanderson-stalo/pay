import { useEffect, useState } from "react";

interface UseFilterReturn {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export function useFilter(initialState: boolean = false): UseFilterReturn {
  const [state, setState] = useState<boolean>(() => {
    const storageState = localStorage.getItem('@FilterState:state');
    return storageState ? JSON.parse(storageState) : initialState;
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setState(customEvent.detail);
    };

    window.addEventListener('@FilterState:change', handler);

    return () => {
      window.removeEventListener('@FilterState:change', handler);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@FilterState:state', JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('@FilterState:change', { detail: state }));
  }, [state]);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  return { state, setTrue, setFalse };
}
