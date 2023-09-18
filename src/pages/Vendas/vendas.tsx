import { FunnelSimple, MagnifyingGlass } from '@phosphor-icons/react'
import { Card } from './components/Card/card'
import * as S from './styled'
import { SetStateAction, useEffect, useState } from 'react'
import { ModalFilterVenda } from './components/ModalFilterVenda/modalFilterVenda'
import { TabelaVendas } from './components/table/table'
import { PaginaView } from '@/components/PaginaView/paginaView'
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage'
import { Pagination } from '@/components/Pagination/pagination'
import { EditableButton } from '@/components/ButtonEdit/buttonEdit'
import { useFilter } from '@/hooks/useFilter'
import { useLogin } from '@/context/user.login'
import { Transaction } from './components/table/interface'
import { Loading } from '@/components/Loading/loading'
import { formatCurrencyBR } from '@/utils/convertBRDinheiro'
import { formatTaxa } from '@/utils/formatTaxa'

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
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { state } = useFilter()
  const { dataUser } = useLogin()

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSearchValue(event.target.value)
  }

  const handleOpenModal = () => {
    setFilter(true)
  }

  const handleCloseModal = () => {
    setFilter(false)
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

  const fetchDataFromAPI = async (search?: string) => {
    setLoading(true)

    let url = `https://api-pagueassim.stalopay.com.br/transactions?perpage=${String(
      itensPorPage
    )}&page=${currentPage}`
    if (search) {
      url += `&nsu_external=${search}`
    }

    const totalUrl = 'https://api-pagueassim.stalopay.com.br/transactions'

    try {
      const [response, totalResponse] = await Promise.all([
        fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser?.token}`
          }
        }),
        fetch(totalUrl, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser?.token}`
          }
        })
      ])

      if (response.ok && totalResponse.ok) {
        const data = await response.json()
        const totalData = await totalResponse.json()
        setTransactions(data.transactions)
        setTotalTransactions(data.total_transactions)
        setTpvGlobal(totalData.total_amountTPV)

        setCurrentPage(data.current_page)
        setTotalAmount(totalData.net_value)
        setAverageTaxApplied(totalData.average_taxApplied)
      } else {
        console.error(`Error fetching paginated data: ${response.statusText}`)
        console.error(`Error fetching total data: ${totalResponse.statusText}`)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (searchValue.trim() === '') {
      fetchDataFromAPI()
    }
  }, [searchValue])

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
  }, [itensPorPage, currentPage])

  console.log('totalpage', totalPages)

  return (
    <>
      <ModalFilterVenda onClose={handleCloseModal} visible={filter} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <S.ContextTitleVendas>
            <S.Title>Vendas</S.Title>

            <S.ContainerCardVendas>
              <Card
                label="Qtd de Vendas"
                label2={totalTransactions.toString()}
              />
              <Card
                label="TPV"
                label2={`${formatCurrencyBR(parseFloat(tpvGlobal))}`}
              />
              <Card
                label="Valor Liq."
                label2={formatCurrencyBR(parseFloat(totalAmount))}
              />
              <Card
                label="Taxa Média apl."
                label2={`${formatTaxa(parseFloat(averageTaxApplied))}%`}
              />
            </S.ContainerCardVendas>
            <S.Input>
              <input
                type="text"
                placeholder="Pesquise por NSU"
                value={searchValue}
                onChange={handleChange}
              />
              <S.SearchIcon className="search-icon" onClick={handleSearch}>
                <MagnifyingGlass />
              </S.SearchIcon>
            </S.Input>
          </S.ContextTitleVendas>

          <S.ContainerButton>
            <S.ButtonTotal>Todos ({totalTransactions})</S.ButtonTotal>

            {state ? <EditableButton /> : ''}
            {/* <S.ButtonFilter onClick={handleOpenModal}> <FunnelSimple />Filtrar</S.ButtonFilter> */}
          </S.ContainerButton>

          <TabelaVendas rows={transactions} />
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
        </>
      )}
    </>
  )
}
