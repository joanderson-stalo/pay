import { PaginaView } from '@/components/PaginaView/paginaView';
import { Tabela } from './components/table/table';
import * as S from './styled';
import { SetStateAction, useEffect, useState, useCallback } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import axios from 'axios';
import { useLogin } from '@/context/user.login';
import { Loading } from '@/components/Loading/loading';
import { EstabelecimentoHeader } from './components/estabelecimentoHeader/estabelecimentoHeader';
import { CardEstablishment } from './Mobile/CardEstablishment/cardEstablishment';
import { baseURL } from '@/config/color';
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal';
import { CustomSelect } from '@/components/Select/select';
import { TotalBtn } from '@/components/TotalBtn/totalBtn';
import { TagFilter } from '@/components/TagFilter/tagFilter';

export function Estabelecimento() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const { dataUser } = useLogin();
  const [totalSellers, setTotalSellers] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');
  const [acquires, setAcquires] = useState<any[]>([]);
  const [dataLA, setDataLA] = useState<any[]>([]);
  const [selectedLicenciado, setSelectedLicenciado] = useState<string>(() => localStorage.getItem('@licenciadoAutorizadoEstablishment') || '');
  const [selectedFornecedor, setSelectedFornecedor] = useState<string>(() => localStorage.getItem('@fornecedorEstablishment') || '');

  const fetchData = useCallback(async (pageNumber: number = currentPage) => {
    setLoading(true);
    let apiUrl = `${baseURL}seller/indexec?perpage=${String(itensPorPage)}&page=${pageNumber}`;
    if (searchValue) {
      apiUrl += `&trading_name=${searchValue}`;
    }


    const licenciadoAutorizadoEstablishment = localStorage.getItem('@licenciadoAutorizadoEstablishment');
    if (licenciadoAutorizadoEstablishment) {
      apiUrl += `&seller_id=${licenciadoAutorizadoEstablishment}`;
    }

    const fornecedorEstablishment = localStorage.getItem('@fornecedorEstablishment');
    if (fornecedorEstablishment) {
      apiUrl += `&acquire_id=${fornecedorEstablishment}`;
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
  }, [currentPage, itensPorPage, searchValue, dataUser?.token]);

  const handleSearch = useCallback((value: string) => {
    setSearchValue(value);

    if (value.trim() === '') {
      setSearchValue('');
    }

    fetchData();
  }, [fetchData]);

  const handleNextPage = useCallback(() => {
    setCurrentPage(prevPage => prevPage + 1);
  }, []);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  }, [currentPage]);

  const fetchAcquire = useCallback(async () => {
    try {
      const response = await axios.get(`${baseURL}acquire/index`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data;
      if (data && data.acquires) {
        const options = data.acquires.map((acquire: { id: any; acquire_label: any }) => ({
          value: acquire.id,
          label: acquire.acquire_label,
        }));
        setAcquires(options);
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }, [dataUser?.token]);

  const fetchDataLA = useCallback(async () => {
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
        setDataLA(options);
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }, [dataUser?.token]);

  useEffect(() => {
    fetchAcquire();
    fetchDataLA();
  }, [fetchAcquire, fetchDataLA]);


  const handleSaveToLocalStorage = async () => {
    await setCurrentPage(1)
    if (selectedLicenciado) localStorage.setItem('@licenciadoAutorizadoEstablishment', selectedLicenciado);
    if (selectedFornecedor) localStorage.setItem('@fornecedorEstablishment', selectedFornecedor);
      fetchData();
  }

  const totalPages = Math.ceil(totalSellers / (itensPorPage || 1));

  useEffect(() => {
    fetchData();
  }, [dataUser, itensPorPage, currentPage, fetchData]);

  useEffect(() => {
    if (searchValue.trim() === '') {

    }
  }, [searchValue, fetchData]);



  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey);
    if (filterKey === '@licenciadoAutorizadoEstablishment') {
      setSelectedLicenciado('');
    }
    if (filterKey === '@fornecedorEstablishment') {
      setSelectedFornecedor('');
    }
    fetchData();
  };


  const activeFilters = [
    localStorage.getItem('@licenciadoAutorizadoEstablishment')&& {
      title: 'Licenciado Autorizado',
      onClick: () => handleRemoveFilter('@licenciadoAutorizadoEstablishment')
    },
    localStorage.getItem('@fornecedorEstablishment') && {
      title: 'Fornecedor',
      onClick: () => handleRemoveFilter('@fornecedorEstablishment')
    }
  ].filter((filter): filter is { title: string; onClick: () => void } => Boolean(filter));


  if (loading) {
    return <Loading />
  }

  return (

        <>
          <S.Container>
            <EstabelecimentoHeader onSearch={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue} />
            <S.ContainerButton>

              <S.ContenteFilter>

                <TotalBtn total={totalSellers} />
                <BtnFilterModal disabled={!selectedLicenciado && !selectedFornecedor} onClick={handleSaveToLocalStorage}>

                  <CustomSelect
                    optionsData={{ options: dataLA }}
                    placeholder="Digite aqui ou clique para ver a lista"
                    label="Licenciado Autorizado"
                    onChange={(selectedOption: { value: SetStateAction<string> }) =>
                      setSelectedLicenciado(selectedOption.value)
                    }
                  />
                  <CustomSelect
                    optionsData={{ options: acquires }}
                    placeholder="Digite aqui ou clique para ver a lista"
                    label="Fornecedor"
                    onChange={(selectedOption: { value: SetStateAction<string> }) =>
                      setSelectedFornecedor(selectedOption.value)
                    }
                  />
                </BtnFilterModal>

            {activeFilters.length > 0 && (
              <TagFilter filters={activeFilters} />
            )}

              </S.ContenteFilter>

            </S.ContainerButton>
            <Tabela rows={sellers} />
            <S.ContainerMobile>
              <CardEstablishment rows={sellers} />
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
