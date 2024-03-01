import { PaginaView } from '@/components/PaginaView/paginaView';
import { Tabela } from './components/table/table';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { FunnelSimple } from '@phosphor-icons/react';
import axios from 'axios';
import { useLogin } from '@/context/user.login';
import { Loading } from '@/components/Loading/loading';
import { useFilterEstablishment } from './hooks/useFilterEstablishment';
import { ModalEstablishment } from './components/ModalEstablishment/modalEstablishment';
import { EditableButton } from './components/ButtonEdit/buttonEdit';
import { EstabelecimentoHeader } from './components/estabelecimentoHeader/estabelecimentoHeader';
import { TotalBtn } from '@/components/TotalBtn/totalBtn';
import { BtnFilter } from '@/components/BtnFilter/btnFilter';


export function Estabelecimento() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [filter, setFilter] = useState(false);
  const { state } = useFilterEstablishment();
  const { dataUser } = useLogin();
  const [totalSellers, setTotalSellers] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');

  const fetchData = async (pageNumber: number = currentPage) => {
    setLoading(true);
    let apiUrl = `https://api-pagueassim.stalopay.com.br/seller/indexec?perpage=${String(itensPorPage)}&page=${pageNumber}`;
    if (searchValue) {
      apiUrl += `&trading_name=${searchValue}`;
    }

    const licenciadoAutorizadoEstablishment = localStorage.getItem('@licenciadoAutorizadoEstablishment');
    if (licenciadoAutorizadoEstablishment) {
      apiUrl += `&seller_id=${licenciadoAutorizadoEstablishment}`;
    }



    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dataUser?.token}`
      }
    });
    setSellers(response.data.sellers);
    setTotalSellers(response.data.total_sellers);
    setCurrentPage(response.data.current_page);
    setLoading(false);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);

    if (value.trim() === '') {
      setSearchValue('');
    }

    fetchData();
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleOpenModal = () => {
    setFilter(true);
  };

  const handleCloseModal = () => {
    setFilter(false);
  };

  const totalPages = Math.ceil(totalSellers / (itensPorPage || 1));

  useEffect(() => {
    fetchData()
  }, [dataUser, itensPorPage, state, currentPage]);

  useEffect(() => {
    if (searchValue.trim() === '') {
      fetchData();
    }
  }, [searchValue]);

  return (
    <>
      <ModalEstablishment onClose={handleCloseModal} visible={filter} />
      {loading ? <Loading /> :
        <>
        <S.Container>
          <EstabelecimentoHeader onSearch={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue} />
          <S.ContainerButton>
            <TotalBtn total={totalSellers} />
            {state ? <EditableButton /> : ''}
            <BtnFilter  onClick={handleOpenModal} />
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
          </S.Container>
        </>
      }
    </>
  );
}
