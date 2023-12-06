import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

interface SidebarVisibilityContextData {
  isVisible: boolean;
  showSidebar: () => void;
  hideSidebar: () => void;
}

const SidebarVisibilityContext = createContext<SidebarVisibilityContextData | undefined>(undefined);

export const SidebarVisibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisibleState] = useState(() => {
    const storedVisibility = localStorage.getItem('@Sidebar:visibility');
    return storedVisibility === null ? true : storedVisibility === 'true';
  });

  useEffect(() => {
    localStorage.setItem('@Sidebar:visibility', JSON.stringify(isVisible));
  }, [isVisible]);

  const showSidebar = () => {
    setIsVisibleState(true);
  };

  const hideSidebar = () => {
    setIsVisibleState(false);
  };

  return (
    <SidebarVisibilityContext.Provider value={{ isVisible, showSidebar, hideSidebar }}>
      {children}
    </SidebarVisibilityContext.Provider>
  );
};

export function useSidebarVisibility(): SidebarVisibilityContextData {
  const context = useContext(SidebarVisibilityContext);

  if (!context) {
    throw new Error('');
  }

  return context;
}