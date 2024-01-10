import { FunnelSimple, MagnifyingGlass } from '@phosphor-icons/react';
import { Card } from './components/Card/card';
import * as S from './styled';
import { useEffect, useState, useRef, useCallback } from 'react';
import { ModalFilterVenda } from './components/ModalFilterVenda/modalFilterVenda';
import { TabelaVendas } from './components/table/table';
import { PaginaView } from '@/components/PaginaView/paginaView';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { Transaction } from './components/table/interface';
import { Loading } from '@/components/Loading/loading';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { formatTaxa } from '@/utils/formatTaxa';
import axios from 'axios';
import { baseURL } from '@/config/color';
import debounce from 'lodash/debounce';
import { EditableButton } from './components/ButtonEdit/buttonEdit';
import { useFilterSales } from './hooks/useFilterSales';
import { useLogin } from '@/context/user.login';
import { CardSales } from './Mobile/CardSales/cardSales';
import * as XLSX from 'xlsx';
import { TransactionsToExcel} from '@/utils/Xlsx/transactions';
import { CardInfo } from '../Financial/components/CardInfo/cardInfo';


export function Vendas() {
  const [searchValue, setSearchValue] = useState('');
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalTransactions, setTotalTransactions] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<string>('0.00');
  const [averageTaxApplied, setAverageTaxApplied] = useState<string>('0.000');
  const [tpvGlobal, setTpvGlobal] = useState<string>('0');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { state } = useFilterSales();
  const { dataUser } = useLogin();



  const fetchDataFromAPI = useCallback(async (search?: string) => {
    setLoading(true);
  
    let url = `${baseURL}transactions?perpage=${String(itensPorPage)}&page=${currentPage}`;
  
    const statusPagamento = localStorage.getItem('@statusPagamento');
    if (statusPagamento && statusPagamento !== 'undefined') {
      url += `&status=${statusPagamento}`;
    }
  
    const brand = localStorage.getItem('@bandeira');
    if (brand && brand !== 'undefined') {
      url += `&brand=${brand}`;
    }
  
    const capturedInStart = localStorage.getItem('@captured_in_start');
    if (capturedInStart) {
      url += `&captured_in_start=${capturedInStart}`;
    }
  
    const capturedInEnd = localStorage.getItem('@captured_in_end');
    if (capturedInEnd) {
      url += `&captured_in_end=${capturedInEnd}`;
    }
  
    if (search) {
      url += `&nsu_external=${search}`;
    }
  
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${dataUser?.token}`,
      },
    };
  
    try {
      const response = await axios.get(url, config);
      const { data } = response;
  
      setTransactions(data.transactions);
      setTotalTransactions(data.total_transactions);
      setTpvGlobal(data.total_amountTPV);
      setCurrentPage(data.current_page);
      setTotalAmount(data.net_value);
      setAverageTaxApplied(data.average_taxApplied);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  }, [itensPorPage, currentPage, baseURL, dataUser?.token]);
  
  
  

  const debouncedFetchDataFromAPI = useRef(debounce(fetchDataFromAPI, 1000)).current;

  const handleChange = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value);
    if (event.target.value.trim() !== '') {
      debouncedFetchDataFromAPI(event.target.value.trim());
    } else {
      debouncedFetchDataFromAPI.cancel();
      fetchDataFromAPI();
    }
  };

  const handleOpenModal = () => {
    setFilter(true);
  };

  const handleCloseModal = () => {
    setFilter(false);
  };

  const fetchData = async (pageNumber: number) => {
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

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      fetchDataFromAPI(searchValue);
    } else {
      fetchDataFromAPI();
    }
  };

  const totalPages = Math.ceil(totalTransactions / (itensPorPage || 1));

  useEffect(() => {
    fetchDataFromAPI();
  }, [itensPorPage, currentPage, state, filter]);



  
  const handleExportClick = () => {
    TransactionsToExcel(transactions);
  };
  
  


  return (
    <>
      <ModalFilterVenda onClose={handleCloseModal} visible={filter} />
      {loading ? (
        <Loading />
      ) : (
        <>
        <S.Container>
        <S.ContextTitleVendas>
            <S.Title>Vendas</S.Title>
            <S.ContainerCardVendas>
              <CardInfo shouldFormat={false} label="Qtd de Vendas" value={totalTransactions}  />
              <CardInfo  label="TPV" value={Number(tpvGlobal)} />
              <CardInfo label="Valor Liq." value={Number(totalAmount)} />
              <CardInfo shouldFormat={false} label="Taxa Média apl." value={Number(averageTaxApplied)} />
            </S.ContainerCardVendas>
            <S.Input>
              <input
                type="text"
                placeholder="Pesquise por NSU"
                value={searchValue}
                onChange={handleChange}
              />
              <S.SearchIcon onClick={handleSearch}>
                <MagnifyingGlass />
              </S.SearchIcon>
            </S.Input>
          </S.ContextTitleVendas>
          <S.ContainerButton>
            <S.ButtonTotal>Todos ({totalTransactions})</S.ButtonTotal>
            {state ? <EditableButton /> : null}
            <S.ButtonFilter onClick={handleOpenModal}>
              <FunnelSimple />Filtrar
            </S.ButtonFilter>
            <S.ButtonExport onClick={handleExportClick}>Exportar</S.ButtonExport>

          </S.ContainerButton>

          <TabelaVendas rows={transactions} />

          <S.ContainerMobile>
          <CardSales transactions={transactions} />
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
      )}
    </>
  );
}
