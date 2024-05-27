import { useEffect, useState } from 'react';
import { TitleH } from "@/components/Title/title";
import { TabelaLog } from "./components/TabelaLog/tabelaLog";
import axios from "axios";
import { useLogin } from "@/context/user.login";
import { baseURL } from "@/config/color";
import { Loading } from "@/components/Loading/loading";
import { useLogPageContext } from '@/context/pages/logPageContext';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import * as S from './styled'
import { PaginaView } from '@/components/PaginaView/paginaView';
import { CardLog } from './mobile/CardLog/cardLog';

export function Log(){
  const { dataUser } = useLogin();
  const [logs, setLogs] = useState([]);
  const [totalLog, seTotalLog] = useState(0)
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const { currentLogPage, setCurrentLogPage } = useLogPageContext();
  const [loading, setLoading] = useState(true);

  const fetchLog = async () => {
    setLoading(true);
    let apiUrl = `${baseURL}activitylog?perpage=${String(itensPorPage)}&page=${currentLogPage}`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      setLogs(response.data.logs);
      seTotalLog(response.data.total_logs)


    } catch (error) {
      console.error('Erro ao buscar os dados do extrato:', error);
    } finally {
      setLoading(false);
    }
  };




  const fetchData = async (pageNumber: number) => {
    setCurrentLogPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentLogPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentLogPage > 1) {
      setCurrentLogPage((prevPage) => prevPage - 1);
    }
  };
  const totalPages = Math.ceil(totalLog / (itensPorPage || 1));


  useEffect(() => {
    fetchLog();
  }, [currentLogPage]);


  if(loading){
    return <Loading />
  }

  return(
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
                  currentPage={currentLogPage}
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
  )
}
