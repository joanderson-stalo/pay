import { useEffect, useState } from "react";

interface UseFilterTicketReturn {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export function useFilterTicket(initialState: boolean = false): UseFilterTicketReturn {
  const [state, setState] = useState<boolean>(() => {
    const storageState = localStorage.getItem('@FilterStateTicket:state');
    return storageState ? JSON.parse(storageState) : initialState;
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setState(customEvent.detail);
    };

    window.addEventListener('@FilterStateTicket:change', handler);

    return () => {
      window.removeEventListener('@FilterStateTicket:change', handler);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@FilterStateTicket:state', JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('@FilterStateTicket:change', { detail: state }));
  }, [state]);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  return { state, setTrue, setFalse };
}
