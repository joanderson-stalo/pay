import { useEffect, useState } from "react";

interface UseFilterLicensedReturn {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export function useFilterLicensed(initialState: boolean = false): UseFilterLicensedReturn {
  const [state, setState] = useState<boolean>(() => {
    const storageState = localStorage.getItem('@FilterStateLicensed:state');
    return storageState ? JSON.parse(storageState) : initialState;
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setState(customEvent.detail);
    };

    window.addEventListener('@FilterStateLicensed:change', handler);

    return () => {
      window.removeEventListener('@FilterStateLicensed:change', handler);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@FilterStateLicensed:state', JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('@FilterStateLicensed:change', { detail: state }));
  }, [state]);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  return { state, setTrue, setFalse };
}
