import { createContext, useState, useCallback, useContext } from 'react';

type DocumentTypeEC = 'CNPJ' | 'CPF';

type DocumentContextDataEC = {
  documentTypeEC: DocumentTypeEC;
  setDocumentTypeEC : React.Dispatch<React.SetStateAction<DocumentTypeEC>>;
  updateToCNPJEC: () => void;
  updateToCPFEC: () => void;
};

export const DocumentContextEC = createContext<DocumentContextDataEC>({} as DocumentContextDataEC);

export const DocumentProviderEC = ({ children }: { children: React.ReactNode }) => {
  const [documentTypeEC, setDocumentTypeEC] = useState<DocumentTypeEC>('CNPJ');

  const updateToCNPJEC = useCallback(() => {
    setDocumentTypeEC('CNPJ');
  }, []);

  const updateToCPFEC = useCallback(() => {
    setDocumentTypeEC('CPF');
  }, []);

  return (
    <DocumentContextEC.Provider
      value={{ documentTypeEC, setDocumentTypeEC, updateToCNPJEC , updateToCPFEC  }}
    >
      {children}
    </DocumentContextEC.Provider>
  );
};

export function useDocumentEC(): DocumentContextDataEC {
  const context = useContext(DocumentContextEC);

  if (!context) {
    throw new Error('');
  }

  return context;
}
