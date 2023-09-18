import { createContext, useState, useCallback, useContext } from 'react';

type DocumentTypeLA = 'CNPJ' | 'CPF';

type DocumentContextDataLA = {
  documentTypeLA: DocumentTypeLA;
  setDocumentTypeLA: React.Dispatch<React.SetStateAction<DocumentTypeLA>>;
  updateToCNPJLA: () => void;
  updateToCPFLA: () => void;
};

export const DocumentContextLA = createContext<DocumentContextDataLA>({} as DocumentContextDataLA);

export const DocumentProviderLA = ({ children }: { children: React.ReactNode }) => {
  const [documentTypeLA, setDocumentTypeLA] = useState<DocumentTypeLA>('CNPJ');

  const updateToCNPJLA = useCallback(() => {
    setDocumentTypeLA('CNPJ');
  }, []);

  const updateToCPFLA = useCallback(() => {
    setDocumentTypeLA('CPF');
  }, []);

  return (
    <DocumentContextLA.Provider
      value={{ documentTypeLA, setDocumentTypeLA, updateToCNPJLA, updateToCPFLA }}
    >
      {children}
    </DocumentContextLA.Provider>
  );
};

export function useDocumentLA(): DocumentContextDataLA {
  const context = useContext(DocumentContextLA);

  if (!context) {
    throw new Error('');
  }

  return context;
}
