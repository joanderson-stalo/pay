import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface SalesPageProviderProps {
  initialPage: number;
  children: ReactNode;
}

interface SalesPageContextType {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const SalesPageContext = createContext<SalesPageContextType | undefined>(undefined);

const useSalesPageContext = (): SalesPageContextType => {
  const context = useContext(SalesPageContext);
  if (!context) {
    throw new Error('useSalesPageContext must be used within a SalesPageProvider');
  }
  return context;
};

const SalesPageProvider: React.FC<SalesPageProviderProps> = ({ initialPage, children }) => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedCurrentPage = sessionStorage.getItem('currentPageSales');
    return savedCurrentPage !== null ? JSON.parse(savedCurrentPage) : initialPage;
  });

  useEffect(() => {
    sessionStorage.setItem('currentPageSales', JSON.stringify(currentPage));
  }, [currentPage]);

  return (
    <SalesPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </SalesPageContext.Provider>
  );
};

export { SalesPageProvider, useSalesPageContext };
