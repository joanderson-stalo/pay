import axios, { AxiosError } from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { PF } from './components/PF/pf';
import { PJ } from './components/PJ/pj';
import { useDocumentEC } from '@/context/useDocumentEC';
import { useLogin } from '@/context/user.login';
import { useLicensed } from '@/context/useLicensed';
import { Loading } from '@/components/Loading/loading';
import { baseURL } from '@/config/color';
import { toast } from 'react-toastify';
import { TranslateErrorMessage } from '@/utils/translateErrorMessage';

interface IStep1 {
  Avançar: () => void;
}

export function Step1({ Avançar }: IStep1) {
  const { dataUser } = useLogin();
  const { licensedId } = useLicensed();
  const [loading, setLoading] = useState(true);
  const [typeDocument, setTypeDocument] = useState<string>('');
  const { updateToCNPJEC, updateToCPFEC } = useDocumentEC();

  const fetchSellerData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${baseURL}seller/show/${licensedId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser?.token}`,
          },
        }
      );
      const sellerData = response.data.seller;
      setTypeDocument(sellerData.type_document);
      sessionStorage.setItem('dados-edit-la', JSON.stringify(sellerData));
      if (sellerData.type_document.toUpperCase() === 'CNPJ') {
        updateToCNPJEC();
      } else if (sellerData.type_document.toUpperCase() === 'CPF') {
        updateToCPFEC();
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally {
      setLoading(false);
    }
  }, [licensedId, dataUser?.token, updateToCNPJEC, updateToCPFEC]);

  useEffect(() => {
    fetchSellerData();
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
