

import { PaginaView } from '@/components/PaginaView/paginaView';
import { EstabelecimentoHeader } from './components/estabelecimentoHeader/estabelecimentoHeader';
import { Tabela } from './components/table/table';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { FunnelSimple } from '@phosphor-icons/react';
import { ModalFilter } from './components/ModalFilter/modalSucesso';
import { EditableButton } from '@/components/ButtonEdit/buttonEdit';
import { useFilter } from '@/hooks/useFilter';
import axios from 'axios';
import { useLogin } from '@/context/user.login';
import { Loading } from '@/components/Loading/loading';

export function Estabelecimento() {

  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [filter, setFilter] = useState(false)
  const { state} = useFilter();

  const [loading, setLoading] = useState<boolean>(false);
  const [totalSellers, setTotalSellers] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);


  const fetchData = async (pageNumber: number) => {

    setCurrentPage(pageNumber)
  }


  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  }


  const handleOpenModal = () => {
    setFilter(true)
  }

  const handleCloseModal = () => {
    setFilter(false)
  }

  const [sellers, setSellers] = useState([]);
  const { dataUser } = useLogin()
  const totalPages = Math.ceil(totalSellers / (itensPorPage || 1));


  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const response = await axios.get(`https://api-pagueassim.stalopay.com.br/sellersec?perpage=${String(itensPorPage)}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${dataUser?.token}`
          }
        });

        setSellers(response.data.sellers);
        setTotalSellers(response.data.total_sellers);
        setCurrentPage(response.data.current_page);

      } catch (error) {
        console.error('There was an error fetching the sellers data', error);
      } finally{
        setLoading(false)
      }
    }
    fetchData();
  }, [dataUser,itensPorPage ]);



  console.log(sellers)


  return (
    <>
    <ModalFilter onClose={handleCloseModal}  visible={filter} />

      {
        loading ? <Loading /> :
          <>
            <EstabelecimentoHeader />
        <S.ContainerButton>
          <S.ButtonTotal>Todos ({totalSellers})</S.ButtonTotal>
          {/* {state ? <EditableButton  /> : ''}
          <S.ButtonFilter onClick={handleOpenModal}> <FunnelSimple />Filtrar</S.ButtonFilter> */}
        </S.ContainerButton>
        <Tabela rows={sellers} />

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

          </>
      }

    </>
  );
}
