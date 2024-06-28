import { useCallback, useEffect, useState } from 'react';
import { TitleH } from "@/components/Title/title";
import { TabelaLog } from "./components/TabelaLog/tabelaLog";
import axios, { AxiosError } from "axios";
import { useLogin } from "@/context/user.login";
import { baseURL } from "@/config/color";
import { Loading } from "@/components/Loading/loading";
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import * as S from './styled'
import { PaginaView } from '@/components/PaginaView/paginaView';
import { CardLog } from './mobile/CardLog/cardLog';
import { TranslateErrorMessage } from '@/utils/translateErrorMessage';
import { toast } from 'react-toastify';

export function Log(){
  const { dataUser } = useLogin();
  const [logs, setLogs] = useState([]);
  const [totalLog, setTotalLog] = useState(0);
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const fetchLog = useCallback(async () => {
    setLoading(true);
    const apiUrl = `${baseURL}activitylog?per_page=${String(itensPorPage)}&page=${currentPage}`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      setLogs(response.data.logs);
      setTotalLog(response.data.total_logs);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally {
      setLoading(false);
    }
  }, [currentPage, itensPorPage, dataUser?.token]);

  const fetchData = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const totalPages = Math.ceil(totalLog / (itensPorPage || 1));

  useEffect(() => {
    fetchLog();
  }, [fetchLog]);

  if(loading){
    return <Loading />
  }

  return (
    <>
      <S.Container>
        <S.ContainerTitle>
          <TitleH title="Log" />
        </S.ContainerTitle>

        <TabelaLog rows={logs} />

        <S.ContainerMobile>
          <CardLog data={logs} />
        </S.ContainerMobile>

        <S.Context>
          <S.Linha />
          <S.ContainerPagina>
            <PaginaView totalItens={itensPorPage} />
            <S.ContainerItens>
              <ItensPorPage itensPorPage={itensPorPage} setItensPorPage={setItensPorPage} />
              <Pagination
                currentPage={currentPage}
                onPageClick={fetchData}
                totalPages={totalPages}
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
              />
            </S.ContainerItens>
          </S.ContainerPagina>
        </S.Context>
      </S.Container>
    </>
  );
}
