import { PaginaView } from '@/components/PaginaView/paginaView';
import * as S from './styled';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { FunnelSimple, MagnifyingGlass } from '@phosphor-icons/react';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { useFilterLicensed } from './hooks/useFilterLicensed';
import { EditableButton } from './components/ButtonEdit/buttonEdit';
import { mockDataTable } from './mock';
import { ModalBilling } from './components/ModalBilling/modalBilling';
import { CardInfo } from '../../components/CardInfo/cardInfo';
import { StockCard } from './Mobile/StockCard/stockCard';
import { TableStock } from './components/TableStock/tableStock';
import { HeaderStock } from './components/HeaderStock/headerStock';
import { TotalBtn } from '@/components/TotalBtn/totalBtn';
import { BtnFilter } from '@/components/BtnFilter/btnFilter';
import { debounce } from 'lodash';
import { baseURL } from '@/config/color';

export function EquipmentStock() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [filter, setFilter] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { state } = useFilterLicensed();
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

  const fetchData = useCallback(async (search?: string) => {
    setLoading(true);
    let apiUrl = `${baseURL}products/index?perpage=${String(itensPorPage)}&page=${currentPage}`;
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

  const handleOpenModal = () => {
    setFilter(true);
  };

  const handleCloseModal = () => {
    setFilter(false);
  };

  const totalPages = Math.ceil(totalStocks / (itensPorPage || 1));

  useEffect(() => {
    fetchData();
  }, [fetchData, state]);

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

  return (
    <>
      <ModalBilling onClose={handleCloseModal} visible={filter} />
      {loading ? <Loading /> :
        <>
          <S.Container>
            <HeaderStock />
            <S.ContainerCard>
              <CardInfo  shouldFormat label='TPV Total' value={Number(totalTpv)} />
              <CardInfo shouldFormat={false} label='POS Estáveis' value={totalWorking} />
              <CardInfo shouldFormat={false} label='POS Transacionando' value={totalTransactions} />
              <CardInfo label='Média TPV por POS' value={avgTpv} />
            </S.ContainerCard>
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
            
            <S.ContainerButton>
              <TotalBtn total={totalStocks} />
              {state ? <EditableButton /> : ''}
              <BtnFilter onClick={handleOpenModal} />
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
          </S.Container>
        </>
      }
    </>
  );
}
