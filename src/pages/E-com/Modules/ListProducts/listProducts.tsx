import { useState, useEffect, useCallback } from 'react';
import { CardProduct } from "@/components/Ecom/CardProduct/cardProduct";
import { ContainerListProducts } from "./styled";
import { HeaderListProducts } from "./components/HeaderListProducts/headerListProducts";
import axios from "axios";
import { baseURL } from "@/config/color";
import { useLogin } from "@/context/user.login";
import { Loading } from '@/components/Loading/loading';

export function ListProducts() {
  const { dataUser } = useLogin();
  const [loading, setLoading] = useState(true);
  const [modelos, setModelos] = useState([]);

  const fetchData = useCallback(async () => {
    let apiUrl = `${baseURL}sales/modelSale`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      if (response.data?.original?.Models?.modelos) {
        setModelos(response.data.original.Models.modelos);
      }
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }, [dataUser?.token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderListProducts />
      
      <ContainerListProducts>

        <CardProduct data={modelos} />
      </ContainerListProducts>
    </>
  );
}
