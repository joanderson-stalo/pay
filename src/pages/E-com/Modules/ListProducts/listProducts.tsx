import { useState, useEffect } from 'react';
import { CardProduct } from "@/components/Ecom/CardProduct/cardProduct";
import { ContainerListProducts } from "./styled";
import { mockProducts } from "../../mock/mockProducts";
import { HeaderListProducts } from "./components/HeaderListProducts/headerListProducts";
import axios from "axios";
import { baseURL } from "@/config/color";
import { useLogin } from "@/context/user.login";

export function ListProducts() {
  const { dataUser } = useLogin();
  const [loading, setLoading] = useState(true);
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <HeaderListProducts />
      <ContainerListProducts>

          <CardProduct  data={modelos} />

      </ContainerListProducts>
    </>
  );
}
