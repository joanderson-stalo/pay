import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { CustomTable } from "./components/Table/table";
import { Button,  ContainerAcesso, ContainerManageAccessLicensed, ContainerTitle } from "./styles";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/context/user.login";
import { Loading } from "@/components/Loading/loading";
import { useLicensed } from "@/context/useLicensed";
import { ApiResponse } from "@/pages/LAcadastro/LAcadastro";
import { TranslateErrorMessage } from "@/utils/translateErrorMessage";
import { toast } from "react-toastify";
import { useEstablishment } from "@/context/useEstablishment";
import { baseURL } from "@/config/color";
import { useTenantData } from "@/context";
import { ArrowBack } from "@/components/BtnArrowBack/btnArrowBack";
import { TitleH } from "@/components/Title/title";

interface UserData {
  id: number;
  profile: string;
  document_id: string;
  name: string;
  email: string;
  email_verified_at: string | null;
  phone_number: string;
  status: string;
  seller: {
    seller_id: number;
    document: string;
    trading_name: string;
  };
}

export function ManageAccessEstablishment(){

  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { establishmentId } = useEstablishment();
  const tenantData = useTenantData();

  const { dataUser } = useLogin();

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}user/getuserby/${establishmentId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      setUserData([response.data.user]);
    } catch (error) {
      const err = error as AxiosError<ApiResponse>;
          const errorMessage = err.response?.data?.message || 'Ocorreu um error';
          const translatedMessage = await TranslateErrorMessage(errorMessage);
          toast.error(translatedMessage)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const handleAdEC = () => {
    navigate('/sellers-ec-add');
  };


  return (
    <>
      {loading && <Loading />}
      <ContainerManageAccessLicensed>
        <ContainerAcesso>
          <ContainerTitle>
            <ArrowBack/>
            <TitleH title="Voltar"/>
          </ContainerTitle>

        <Button onClick={handleAdEC}>Adicionar EC</Button>
        </ContainerAcesso>
        <CustomTable data={userData} />
      </ContainerManageAccessLicensed>
    </>
  );
}
