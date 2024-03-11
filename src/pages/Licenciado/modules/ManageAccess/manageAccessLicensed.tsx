import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { CustomTable } from "./components/Table/table";
import { ButtonBlack, ContainerManageAccessLicensed } from "./styles";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/context/user.login";
import { Loading } from "@/components/Loading/loading";
import { useLicensed } from "@/context/useLicensed";
import { ApiResponse } from "@/pages/LAcadastro/LAcadastro";
import { TranslateErrorMessage } from "@/utils/translateErrorMessage";
import { toast } from "react-toastify";

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

export function ManageAccessLicensed(){

  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { licensedId } = useLicensed();

  const { dataUser } = useLogin();

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api-pagueassim.stalopay.com.br/user/getuserby/${licensedId}`, {
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

  const handleEstablishmentdetail = () => {
    navigate('/sellers-la-detail');
  };

  return (
    <>
      {loading && <Loading />}
      <ContainerManageAccessLicensed>
        <ButtonBlack onClick={handleEstablishmentdetail}><CaretLeft size={18} />Voltar</ButtonBlack>
        <CustomTable data={userData} />
      </ContainerManageAccessLicensed>
    </>
  );
}
