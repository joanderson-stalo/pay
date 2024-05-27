import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface LogPageProviderProps {
  initialPage: number;
  children: ReactNode;
}

interface LogPageContextType {
  currentLogPage: number;
  setCurrentLogPage: React.Dispatch<React.SetStateAction<number>>;
}

const LogPageContext = createContext<LogPageContextType | undefined>(undefined);

const useLogPageContext = (): LogPageContextType => {
  const context = useContext(LogPageContext);
  if (!context) {
    throw new Error('useLogPageContext must be used within a LogPageProvider');
  }
  return context;
};

const LogPageProvider: React.FC<LogPageProviderProps> = ({ initialPage, children }) => {
  const [currentLogPage, setCurrentLogPage] = useState<number>(() => {
    const savedCurrentPage = sessionStorage.getItem('currentLogPage');
    return savedCurrentPage !== null ? JSON.parse(savedCurrentPage) : initialPage;
  });

  useEffect(() => {
    sessionStorage.setItem('currentLogPage', JSON.stringify(currentLogPage));
  }, [currentLogPage]);

  return (
    <LogPageContext.Provider value={{ currentLogPage, setCurrentLogPage }}>
      {children}
    </LogPageContext.Provider>
  );
};

export { LogPageProvider, useLogPageContext };
