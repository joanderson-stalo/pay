import { PaginaView } from '@/components/PaginaView/paginaView';
import { Tabela } from './components/table/table';
import * as S from './styled';
import { useCallback, useEffect, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { LicenciadoHeader } from './components/licenciadoHeader/licenciadoHeader';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { useFilterLicensed } from './hooks/useFilterLicensed';
import { EditableButton } from './components/ButtonEdit/buttonEdit';
import { ModalLicensed } from './components/ModalLicensed/modalLicensed';
import { TotalBtn } from '@/components/TotalBtn/totalBtn';
import { BtnFilter } from '@/components/BtnFilter/btnFilter';
import { LicensedCard } from './mobile/LicenciadosCard/licensedCard';

export function Licenciado() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [filter, setFilter] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { state } = useFilterLicensed();
  const { dataUser } = useLogin();
  const [totalSellers, setTotalSellers] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (pageNumber: number = currentPage) => {
    setLoading(true);
    let apiUrl = `https://api-pagueassim.stalopay.com.br/seller/indexla?perpage=${String(itensPorPage)}&page=${pageNumber}`;
    if (searchValue) {
      apiUrl += `&company_name=${searchValue}`;
    }

    const licenciadoAutorizadoLicensed = localStorage.getItem('@licenciadoAutorizadoLicensed');
    if (licenciadoAutorizadoLicensed) {
      apiUrl += `&seller_id=${licenciadoAutorizadoLicensed}`;
    }

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      setSellers(response.data.sellers);
      setTotalSellers(response.data.total_sellers);
      setCurrentPage(response.data.current_page);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [dataUser, itensPorPage, searchValue, currentPage]);


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
  }, [searchValue])


  const handleSearch = (value: string) => {
    setSearchValue(value);

    if (value.trim() === '') {
      setSearchValue('');
    }

    fetchData();
  };


  return (
    <>
      <ModalLicensed onClose={handleCloseModal} visible={filter} />
      {loading ? <Loading /> :
        <>
        <S.Container>
           <LicenciadoHeader onSearch={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue} />
          <S.ContainerButton>
            <TotalBtn total={totalSellers} />
            {state ? <EditableButton /> : ''}
            <BtnFilter  onClick={handleOpenModal} />
          </S.ContainerButton>
          <Tabela rows={sellers} />

          <S.ContainerCardsMobile>
          <LicensedCard rows={sellers} />
          </S.ContainerCardsMobile>
        
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
