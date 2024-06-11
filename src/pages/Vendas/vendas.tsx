import { FunnelSimple, MagnifyingGlass } from '@phosphor-icons/react'
import * as S from './styled'
import { useEffect, useState, useRef, useCallback, SetStateAction } from 'react'
import { TabelaVendas } from './components/table/table'
import { PaginaView } from '@/components/PaginaView/paginaView'
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage'
import { Pagination } from '@/components/Pagination/pagination'
import { Transaction } from './components/table/interface'
import { Loading } from '@/components/Loading/loading'
import axios from 'axios'
import { baseURL } from '@/config/color'
import debounce from 'lodash/debounce'
import { useLogin } from '@/context/user.login'
import { CardSales } from './Mobile/CardSales/cardSales'
import { TransactionsToExcel } from '@/utils/Xlsx/transactions'
import { CardInfo } from '../../components/CardInfo/cardInfo'
import { ExportData } from '@/components/ExportData/exportData'
import { BtnFilter } from '@/components/BtnFilter/btnFilter'
import { TitleH } from '@/components/Title/title'
import { TotalBtn } from '@/components/TotalBtn/totalBtn'
import { useSalesPageContext } from '@/context/pages/salesPageContext'
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal'
import { CustomSelect } from '@/components/Select/select'
import { CustomInput } from '@/components/Input/input'
import { useTenantData } from '@/context'
import {
  brandOptions,
  paymentMethodOptions,
  statusPaymentOptions
} from '@/json/statusPaymentOptions'
import { TagFilter } from '@/components/TagFilter/tagFilter'

export function Vendas() {
  const [searchValue, setSearchValue] = useState('')
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10)
  const [filter, setFilter] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [totalTransactions, setTotalTransactions] = useState<number>(0)
  const [totalAmount, setTotalAmount] = useState<string>('0.00')
  const [averageTaxApplied, setAverageTaxApplied] = useState<string>('0.000')
  const [tpvGlobal, setTpvGlobal] = useState<string>('0')
  const { dataUser } = useLogin()
  const [isFocused, setIsFocused] = useState(false)
  const { currentPage, setCurrentPage } = useSalesPageContext()
  const [startDate, setStartDate] = useState<string>(
    () => localStorage.getItem('@captured_in_start') || ''
  )
  const [endDate, setEndDate] = useState<string>(
    () => localStorage.getItem('@captured_in_end') || ''
  )
  const [selectedBrand, setSelectedBrand] = useState<string>(
    () => localStorage.getItem('@bandeira') || ''
  )
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>(
    () => localStorage.getItem('@formaDePagamento') || ''
  )
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState<string>(
    () => localStorage.getItem('@statusPagamento') || ''
  )
  const tenantData = useTenantData()

  const fetchDataFromAPI = useCallback(
    async (search?: string) => {
      setLoading(true)

      let url = `${baseURL}transactions?perpage=${String(
        itensPorPage
      )}&page=${currentPage}`

      const formaDePagamento = localStorage.getItem('@formaDePagamento')
      if (formaDePagamento && formaDePagamento !== 'undefined') {
        url += `&payment_type=${formaDePagamento}`
      }

      const statusPagamento = localStorage.getItem('@statusPagamento')
      if (statusPagamento && statusPagamento !== 'undefined') {
        url += `&status=${statusPagamento}`
      }

      const brand = localStorage.getItem('@bandeira')
      if (brand && brand !== 'undefined') {
        url += `&brand=${brand}`
      }

      const capturedInStart = localStorage.getItem('@captured_in_start')
      if (capturedInStart) {
        url += `&captured_in_start=${capturedInStart}`
      }

      const capturedInEnd = localStorage.getItem('@captured_in_end')
      if (capturedInEnd) {
        url += `&captured_in_end=${capturedInEnd}`
      }

      if (search) {
        url += `&nsu_internal=${search}`
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      }

      try {
        const response = await axios.get(url, config)
        const { data } = response
        setTransactions(data.transactions)
        setTotalTransactions(data.total_transactions)
        setTpvGlobal(data.total_amountTPV)
        setCurrentPage(data.current_page)
        setTotalAmount(data.net_value)
        setAverageTaxApplied(data.average_taxApplied)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      } finally {
        setLoading(false)
      }
    },
    [itensPorPage, currentPage, baseURL, dataUser?.token]
  )

  const debouncedFetchDataFromAPI = useRef(
    debounce(fetchDataFromAPI, 1000)
  ).current

  const handleChange = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value)
    if (event.target.value.trim() !== '') {
      debouncedFetchDataFromAPI(event.target.value.trim())
    } else {
      debouncedFetchDataFromAPI.cancel()
      fetchDataFromAPI()
    }
  }

  const fetchData = async (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      fetchDataFromAPI(searchValue)
    } else {
      fetchDataFromAPI()
    }
  }

  const totalPages = Math.ceil(totalTransactions / (itensPorPage || 1))

  useEffect(() => {
    fetchDataFromAPI()
  }, [itensPorPage, currentPage, filter])

  const handleExportClick = () => {
    if (dataUser) {
      TransactionsToExcel(dataUser.token)
    } else {
      console.error('Usuário não está autenticado.')
    }
  }

  const handleSaveToLocalStorage = async () => {
    await setCurrentPage(1)
    if (startDate) localStorage.setItem('@captured_in_start', startDate)
    if (endDate) localStorage.setItem('@captured_in_end', endDate)
    if (selectedPaymentMethod)
      localStorage.setItem('@formaDePagamento', selectedPaymentMethod)
    if (selectedPaymentStatus)
      localStorage.setItem('@statusPagamento', selectedPaymentStatus)
    if (selectedBrand) localStorage.setItem('@bandeira', selectedBrand)
    fetchDataFromAPI()
  }

  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey);
    switch (filterKey) {
      case '@bandeira':
        setSelectedBrand('');
        break;
      case '@formaDePagamento':
        setSelectedPaymentMethod('');
        break;
      case '@statusPagamento':
        setSelectedPaymentStatus('');
        break;
      case '@captured_in_start':
        setStartDate('');
        break;
      case '@captured_in_end':
        setEndDate('');
        break;
    }
    fetchDataFromAPI();
  };

  const activeFilters = [
    localStorage.getItem('@bandeira') && {
      title: 'Bandeira',
      onClick: () => handleRemoveFilter('@bandeira')
    },
    localStorage.getItem('@formaDePagamento') && {
      title: 'Forma de Pagamento',
      onClick: () => handleRemoveFilter('@formaDePagamento')
    },
    localStorage.getItem('@statusPagamento') && {
      title: 'Status de Pagamento',
      onClick: () => handleRemoveFilter('@statusPagamento')
    },
    localStorage.getItem('@captured_in_start') && localStorage.getItem('@captured_in_end') && {
      title: 'Data',
      onClick: () => {
        handleRemoveFilter('@captured_in_start');
        handleRemoveFilter('@captured_in_end');
        setStartDate('');
        setEndDate('');
      }
    }
  ].filter((filter): filter is { title: string; onClick: () => void } => Boolean(filter));

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <S.Container>
        <S.ContextTitleVendas>
          <TitleH title="Vendas" />
          <S.ContainerCardVendas>
            <CardInfo
              shouldFormat={false}
              label="Quantidade de Vendas"
              value={totalTransactions}
            />
            <CardInfo label="TPV" value={Number(tpvGlobal)} />
            <CardInfo label="Valor Líquido" value={Number(totalAmount)} />
          </S.ContainerCardVendas>
          <S.Input isFocused={isFocused}>
            <input
              type="text"
              placeholder="Pesquise por NSU"
              value={searchValue}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <S.SearchIcon isFocused onClick={handleSearch}>
              <MagnifyingGlass />
            </S.SearchIcon>
          </S.Input>
        </S.ContextTitleVendas>

        <S.ContainerButton>
          <div style={{ display: 'flex', gap: '8px' }}>
            <TotalBtn total={totalTransactions} />
            <BtnFilterModal
              onClick={handleSaveToLocalStorage}
              disabled={
                (!startDate || !endDate || endDate <= startDate) &&
                !selectedBrand &&
                !selectedPaymentMethod &&
                !selectedPaymentStatus
              }
            >
              <CustomSelect
                optionsData={brandOptions}
                placeholder="Clique para ver a lista"
                label="Bandeira"
                onChange={(selectedOption: { value: SetStateAction<string> }) =>
                  setSelectedBrand(selectedOption.value)
                }
              />
              <CustomSelect
                optionsData={paymentMethodOptions}
                placeholder="Clique para ver a lista"
                label="Forma de Pagamento"
                onChange={(selectedOption: { value: SetStateAction<string> }) =>
                  setSelectedPaymentMethod(selectedOption.value)
                }
              />
              <CustomSelect
                optionsData={statusPaymentOptions}
                placeholder="Clique para ver a lista"
                label="Status do pagamento"
                onChange={(selectedOption: { value: SetStateAction<string> }) =>
                  setSelectedPaymentStatus(selectedOption.value)
                }
              />
              <CustomInput
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}
                type="date"
                label="Data inicial"
                value={startDate}
                hasError={!!endDate && startDate > endDate}
                onChange={event => setStartDate(event.target.value)}
              />
              <CustomInput
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}
                type="date"
                label="Data final"
                value={endDate}
                hasError={!!startDate && (endDate <= startDate || !endDate)}
                onChange={event => setEndDate(event.target.value)}
              />
            </BtnFilterModal>
            {activeFilters.length > 0 && (
              <TagFilter filters={activeFilters} />
            )}
          </div>

          <ExportData title="Exportar dados" onClick={handleExportClick} />
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
              <ItensPorPage
                itensPorPage={itensPorPage}
                setItensPorPage={setItensPorPage}
              />
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
  )
}
