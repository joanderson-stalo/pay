import { PaginaView } from '@/components/PaginaView/paginaView';
import { Tabela } from './components/table/table';
import * as S from './styled';
import { SetStateAction, useCallback, useEffect, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { LicenciadoHeader } from './components/licenciadoHeader/licenciadoHeader';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';

import { BtnFilter } from '@/components/BtnFilter/btnFilter';
import { LicensedCard } from './mobile/LicenciadosCard/licensedCard';
import { baseURL } from '@/config/color';
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal';
import { CustomSelect } from '@/components/Select/select';
import { TagFilter } from '@/components/TagFilter/tagFilter';

export function Licenciado() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [searchValue, setSearchValue] = useState('');
  const { dataUser } = useLogin();
  const [totalSellers, setTotalSellers] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchedOptions, setFetchedOptions] = useState([]);
  const [selectedLicenciado, setSelectedLicenciado] = useState<string>(() => localStorage.getItem('@licenciadoAutorizadoLicensed') || '');

  const fetchData = useCallback(async (pageNumber: number = currentPage) => {
    setLoading(true);
    let apiUrl = `${baseURL}seller/indexla?perpage=${String(itensPorPage)}&page=${pageNumber}`;
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

  const totalPages = Math.ceil(totalSellers / (itensPorPage || 1));

  useEffect(() => {
    fetchData()
  }, [fetchData]);

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


  const fetchLA = async () => {
    try {
      const response = await axios.get(`${baseURL}seller/indexla`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      const data = response.data;

      if (data && data.sellers) {
        const options = data.sellers.map((seller: { trading_name: any; type: any; id: any, cnpj_cpf: any }, index: number) => ({
          value: seller.id,
          label: `${seller.trading_name}-${seller.type}-${seller.cnpj_cpf}`
        }));

        setFetchedOptions(options);
      }
    } catch (error) {

    }
  };

  useEffect(() => {
    fetchLA();
  }, []);


  const handleSaveToLocalStorage = async () => {
      if (currentPage !== 1) {
        setCurrentPage(1);
      }

    if (selectedLicenciado) localStorage.setItem('@licenciadoAutorizadoLicensed', selectedLicenciado);

    if (currentPage === 1) {
      fetchData();
    }

  }


  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey);
    if (filterKey === '@licenciadoAutorizadoLicensed') {
      setSelectedLicenciado('');
    }
    fetchData();
  };


  const activeFilters = [
    localStorage.getItem('@licenciadoAutorizadoLicensed')&& {
      title: 'Licenciado Autorizado',
      onClick: () => handleRemoveFilter('@licenciadoAutorizadoLicensed')
    },
  ].filter((filter): filter is { title: string; onClick: () => void } => Boolean(filter));

  if(loading) {
    return <Loading />
  }


  return (

        <>
        <S.Container>
           <LicenciadoHeader onSearch={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue} />

          <S.ContainerButton>

          <S.ContentFilter>

                


                <BtnFilterModal onClick={handleSaveToLocalStorage} disabled={!selectedLicenciado}>
                <CustomSelect
                    optionsData={{ options: fetchedOptions }}
                    placeholder="Digite aqui ou clique para ver a lista"
                    label="Licenciado Autorizado"
                    onChange={(selectedOption: { value: SetStateAction<string> }) =>
                      setSelectedLicenciado(selectedOption.value)
                    }
                  />

                </BtnFilterModal>

                {activeFilters.length > 0 && (
              <TagFilter filters={activeFilters} />
            )}

          </S.ContentFilter>

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
  );
}
