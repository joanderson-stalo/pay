import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { MyRequestsComponents } from '@/components/Ecom/MyRequestsComponents/myRequestsComponents';
import { HeaderListProducts } from './components/HeaderListProducts/headerListProducts';
import { ContainerListProducts } from './styled';
import { Loading } from '@/components/Loading/loading';
import { baseURL } from '@/service/api';
import { useLogin } from '@/context/user.login';
import { NoteData } from '@/components/NoteData/noteData';

interface Sale {
  id: number;
  status: string;
  amount: number;
  created_at: string;
}

export function ProductsMy() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { dataUser } = useLogin();

  const fetchSales = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}sales/index`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      });
      if (response.data.sales) {
        setSales(response.data.sales);
      }
    } catch (error) {
   
    } finally {
      setLoading(false);
    }
  }, [dataUser?.token]);

  useEffect(() => {
    fetchSales();
  }, [fetchSales]);

  if (loading) {
    return <Loading />;
  }

  

  return (
    <>
      <HeaderListProducts />
      <ContainerListProducts>
        {sales.length === 0 && <NoteData /> }
        {sales.length > 0 &&  <MyRequestsComponents sales={sales} />}
      </ContainerListProducts>
    </>
  );
}
