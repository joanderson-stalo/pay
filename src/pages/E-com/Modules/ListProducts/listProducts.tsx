import { useState, useEffect, useCallback } from 'react';
import { CardProduct } from "@/components/Ecom/CardProduct/cardProduct";
import { BtnFilterModel, Container, ContainerListProducts, ContentFilter } from "./styled";
import { HeaderListProducts } from "./components/HeaderListProducts/headerListProducts";
import axios from "axios";
import { baseURL } from "@/config/color";
import { useLogin } from "@/context/user.login";
import { Loading } from '@/components/Loading/loading';
import { Line } from './styled';
import { useTenantData } from '@/context';

export function ListProducts() {
  const { dataUser } = useLogin();
  const [loading, setLoading] = useState(true);
  const [modelos, setModelos] = useState([]);
  const [statusFilter, setStatusFilter] = useState<string>("Máquinas (POs)")
  const [pos, setPos] = useState("sim")

  const tenantData = useTenantData();


  const fetchData = useCallback(async () => {
    let apiUrl = `${baseURL}sales/modelSale?pos=${pos}`;

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
  }, [dataUser?.token, pos]);

  useEffect(() => {
    fetchData();
  }, [fetchData, pos]);

  if (loading) {
    return <Loading />;
  }

  const updateModel = ["Máquinas (POs)", "Periféricos"];

  const handleFilterClick = (model: string) => {
    setStatusFilter(model);
    setPos(model === "Máquinas (POs)" ? "sim" : "nao");
  };

  return (
    <>
      <HeaderListProducts />

      <Container>
        <ContentFilter>
          {updateModel.map((model) => (
              <BtnFilterModel

              primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}

              key={model} onClick={() => handleFilterClick(model)}
              statusModel={model === statusFilter ? 'active' : 'inactive'}

              >{model}</BtnFilterModel>
            ))}
        </ContentFilter>


          <Line/>
      </Container>


      <ContainerListProducts>

        <CardProduct data={modelos} />
      </ContainerListProducts>
    </>
  );
}
