import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { PF } from './components/PF/pf';
import { PJ } from './components/PJ/pj';
import { useDocumentEC } from '@/context/useDocumentEC';
import { useLogin } from '@/context/user.login';
import { useEstablishment } from '@/context/useEstablishment';
import { Loading } from '@/components/Loading/loading';
import { baseURL } from '@/service/api';

interface IStep1 {
  Avançar: () => void;
}

export function Step1({ Avançar }: IStep1) {
  const { dataUser } = useLogin();
  const { establishmentId } = useEstablishment();
  const [loading, setLoading] = useState(true);
  const [typeDocument, setTypeDocument] = useState<string>('');
  const { updateToCNPJEC, updateToCPFEC } = useDocumentEC();

  const fetchSellerData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${baseURL}seller/show/${establishmentId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser?.token}`,
          },
        }
      );
      const sellerData = response.data.seller;

      sessionStorage.setItem('dados-edit-ec', JSON.stringify(sellerData));

      setTypeDocument(sellerData.type_document);
      if (sellerData.type_document.toUpperCase() === 'CNPJ') {
        updateToCNPJEC();
      } else if (sellerData.type_document.toUpperCase() === 'CPF') {
        updateToCPFEC();
      }

      console.log('aqui', response.data.seller)
    } catch (error) {
      // Trate o erro aqui
    } finally {
      setLoading(false);
    }
  }, [establishmentId, dataUser?.token, updateToCNPJEC, updateToCPFEC]);

  useEffect(() => {
    fetchSellerData()
  }, [fetchSellerData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {typeDocument.toUpperCase() === 'CNPJ' ? (
        <PJ Avançar={Avançar} />
      ) : (
        <PF Avançar={Avançar} />
      )}
    </>
  );
}
