import { useEffect, useState } from "react";

interface UseFilterPlansReturn {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export function useFilterPlans(initialState: boolean = false): UseFilterPlansReturn {
  const [state, setState] = useState<boolean>(() => {
    const storageState = localStorage.getItem('@FilterPlans:state');
    return storageState ? JSON.parse(storageState) : initialState;
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setState(customEvent.detail);
    };

    window.addEventListener('@FilterPlans:change', handler);

    return () => {
      window.removeEventListener('@FilterPlans:change', handler);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@FilterPlans:state', JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('@FilterPlans:change', { detail: state }));
  }, [state]);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  return { state, setTrue, setFalse };
}
