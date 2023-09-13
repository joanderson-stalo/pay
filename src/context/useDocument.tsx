import { createContext, useState, useCallback, useContext } from 'react';

type DocumentType = 'CNPJ' | 'CPF';

type DocumentContextData = {
  documentType: DocumentType;
  setDocumentType: React.Dispatch<React.SetStateAction<DocumentType>>;
  updateToCNPJ: () => void;
  updateToCPF: () => void;
};

export const DocumentContext = createContext<DocumentContextData>({} as DocumentContextData);

export const DocumentProvider = ({ children }: { children: React.ReactNode }) => {
  const [documentType, setDocumentType] = useState<DocumentType>('CNPJ');

  const updateToCNPJ = useCallback(() => {
    setDocumentType('CNPJ');
  }, []);

  const updateToCPF = useCallback(() => {
    setDocumentType('CPF');
  }, []);

  return (
    <DocumentContext.Provider
      value={{ documentType, setDocumentType, updateToCNPJ, updateToCPF }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export function useDocument(): DocumentContextData {
  const context = useContext(DocumentContext);

  if (!context) {
    throw new Error('useDocument must be used within a DocumentProvider');
  }

  return context;
}
