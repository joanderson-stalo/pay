import { PaginaView } from '@/components/PaginaView/paginaView';
import * as S from './styled';
import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { FunnelSimple, MagnifyingGlass } from '@phosphor-icons/react';
import { useLogin } from '@/context/user.login';
import axios, { AxiosError } from 'axios';
import { Loading } from '@/components/Loading/loading';
import { CardInfo } from '../../components/CardInfo/cardInfo';
import { StockCard } from './Mobile/StockCard/stockCard';
import { TableStock } from './components/TableStock/tableStock';
import { HeaderStock } from './components/HeaderStock/headerStock';

import { debounce } from 'lodash';
import { baseURL } from '@/config/color';
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal';
import { CustomSelect } from '@/components/Select/select';
import { TagFilter } from '@/components/TagFilter/tagFilter';
import { NoteData } from '@/components/NoteData/noteData';
import { TranslateErrorMessage } from '@/utils/translateErrorMessage';
import { toast } from 'react-toastify';

export function EquipmentStock() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [searchValue, setSearchValue] = useState('');
  const { dataUser } = useLogin();
  const [totalStocks, setTotalStocks] = useState(0);
  const [totalWorking, setTotalWorking] = useState<number>(0);
  const [avgTpv, setAvgTpv] = useState<number>(0);
  const [totalTpv, setTotalTpv] = useState<string>('');
  const [totalTransactions, setTotalTransactions] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [fetchedOptions, setFetchedOptions] = useState([]);
  const [fetchedOptionsFN, setFetchedOptionsFN] = useState([]);
  const [selectedLicenciado, setSelectedLicenciado] = useState<string>('');
  const [selectedFornecedor, setSelectedFornecedor] = useState<string>('');

  const fetchData = useCallback(async (search?: string) => {
    setLoading(true);
    let apiUrl = `${baseURL}products/index?per_page=${String(itensPorPage)}&page=${currentPage}`;
    if (search) {
      apiUrl += `&serial_number=${search}`;
    }

    const licensedStock = localStorage.getItem('@licensedStock');
    if (licensedStock && licensedStock !== 'undefined') {
      apiUrl += `&seller_id=${licensedStock}`;
    }

    const supplierStock = localStorage.getItem('@supplierStock');
    if (supplierStock && supplierStock !== 'undefined') {
      apiUrl += `&acquire=${supplierStock}`;
    }


    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dataUser?.token}`
      }
    });
    setProducts(response.data.products);
    setTotalStocks(response.data.total_products);
    setTotalWorking(response.data.total_working);
    setAvgTpv(response.data.avg_tpv);
    setTotalTpv(response.data.total_tpv);
    setTotalTransactions(response.data.total_transactions);
    setCurrentPage(response.data.current_page);
    setLoading(false);
  }, [itensPorPage, currentPage, dataUser]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };


  const totalPages = Math.ceil(totalStocks / (itensPorPage || 1));

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const debouncedFetchDataFromAPI = useRef(debounce(fetchData, 1000)).current;

  const handleChange = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value);
    if (event.target.value.trim() !== '') {
      debouncedFetchDataFromAPI(event.target.value.trim());
    } else {
      debouncedFetchDataFromAPI.cancel();
      fetchData();
    }
  };


  const fetchDataLA = async () => {
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

  const fetchDataFN = useCallback(async () => {
    try {
      const response = await axios.get(`${baseURL}acquire/index`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data;
      const options = data.acquires.map((acquire: { acquire_label: any; id: { toString: () => any; }; }) => ({
        label: acquire.acquire_label,
        value: acquire.id.toString()
      }));
      setFetchedOptionsFN(options);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    }
  }, [dataUser?.token]);

  useEffect(() => {
    fetchDataLA();
    fetchDataFN();
  }, []);


  const handleSaveToLocalStorage = async () => {
    if(currentPage !== 1){
      await setCurrentPage(1)
    }

    if (selectedLicenciado) localStorage.setItem('@licensedStock', selectedLicenciado);
    if (selectedFornecedor) localStorage.setItem('@supplierStock', selectedFornecedor);

    if(currentPage === 1){
      fetchData();
    }

  }



  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey);
    if (filterKey === '@licensedStock') {
      setSelectedLicenciado('');
    }
    if (filterKey === '@supplierStock') {
      setSelectedFornecedor('');
    }
    fetchData();
  };


  const activeFilters = [
    localStorage.getItem('@licensedStock')&& {
      title: 'Licenciado Autorizado',
      onClick: () => handleRemoveFilter('@licensedStock')
    },
    localStorage.getItem('@supplierStock') && {
      title: 'Fornecedor',
      onClick: () => handleRemoveFilter('@supplierStock')
    }
  ].filter((filter): filter is { title: string; onClick: () => void } => Boolean(filter));

  if(loading){
    return <Loading />
  }

  return (
        <>
          <S.Container>
            <HeaderStock />
            <S.ContainerCard>
              <CardInfo  shouldFormat label='TPV Total' value={Number(totalTpv)} />
              <CardInfo shouldFormat={false} label='POS Estáveis' value={totalWorking} />
              <CardInfo shouldFormat={false} label='POS Transacionando' value={totalTransactions} />
              <CardInfo label='Média TPV por POS' value={avgTpv} />
            </S.ContainerCard>

            {products.length > 0 && (
              <>
 <S.Input isFocused={isFocused}>
              <input
                type="text"
                placeholder="Pesquise por Serial"
                value={searchValue}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <S.SearchIcon isFocused >
                <MagnifyingGlass />
              </S.SearchIcon>
            </S.Input>

              </>
            ) }

{products.length > 0 && (<>

  <S.ContainerButton>

<S.ContentFilter>





  <BtnFilterModal onClick={handleSaveToLocalStorage} disabled={!selectedFornecedor && !selectedLicenciado}>
  <CustomSelect
      optionsData={{ options: fetchedOptions }}
      placeholder="Digite aqui ou clique para ver a lista"
      label="Licenciado Autorizado"
      onChange={(selectedOption: { value: SetStateAction<string> }) =>
        setSelectedLicenciado(selectedOption.value)
      }
    />

<CustomSelect
      optionsData={{ options: fetchedOptionsFN }}
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


</S.ContentFilter>


</S.ContainerButton>


<TableStock rows={products} />
<S.ContainerCardsMobile>
<StockCard data={products} />
</S.ContainerCardsMobile>
<S.Context>
<S.Linha />
<S.ContainerPagina>
  <PaginaView totalItens={itensPorPage} />
  <S.ContainerItens>
    <ItensPorPage itensPorPage={itensPorPage} setItensPorPage={setItensPorPage} />
    <Pagination
      currentPage={currentPage}
      onPageClick={() => false}
      totalPages={totalPages}
      onNextPage={handleNextPage}
      onPrevPage={handlePrevPage}
    />
  </S.ContainerItens>
</S.ContainerPagina>
</S.Context>


</>)}

{products.length === 0 && (<>

<NoteData />

</>)}


          </S.Container>
        </>
  );
}
