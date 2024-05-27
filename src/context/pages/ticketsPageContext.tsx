import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface TicketsPageProviderProps {
  initialPage: number;
  children: ReactNode;
}

interface TicketsPageContextType {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const TicketsPageContext = createContext<TicketsPageContextType | undefined>(undefined);

const useTicketsPageContext = (): TicketsPageContextType => {
  const context = useContext(TicketsPageContext);
  if (!context) {
    throw new Error('useTicketsPageContext must be used within a TicketsPageProvider');
  }
  return context;
};

const TicketsPageProvider: React.FC<TicketsPageProviderProps> = ({ initialPage, children }) => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedCurrentPage = sessionStorage.getItem('currentPageTickets');
    return savedCurrentPage !== null ? JSON.parse(savedCurrentPage) : initialPage;
  });

  useEffect(() => {
    sessionStorage.setItem('currentPageTickets', JSON.stringify(currentPage));
  }, [currentPage]);

  return (
    <TicketsPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </TicketsPageContext.Provider>
  );
};

export { TicketsPageProvider, useTicketsPageContext };
