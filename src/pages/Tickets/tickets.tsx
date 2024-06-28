import { PaginaView } from '@/components/PaginaView/paginaView'
import * as S from './styled'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage'
import { Pagination } from '@/components/Pagination/pagination'
import { useLogin } from '@/context/user.login'
import axios, { AxiosError } from 'axios'
import { Loading } from '@/components/Loading/loading'
import { CardInfo } from '../../components/CardInfo/cardInfo'
import { TicketsCardMobile } from './Mobile/TicketsCardMobile/ticketsCardMobile'
import { HeaderTickets } from './components/HeaderTickets/headerTickets'
import { TableTickets } from './components/TableTickets/tableTickets'
import { baseURL } from '@/config/color'
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal'
import { CustomInput } from '@/components/Input/input'
import { useTenantData } from '@/context'
import { TagFilter } from '@/components/TagFilter/tagFilter'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { NoteData } from '@/components/NoteData/noteData'
import { TranslateErrorMessage } from '@/utils/translateErrorMessage'
import { toast } from 'react-toastify'


export function Tickets() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10)
  const [searchValue, setSearchValue] = useState('')
  const { dataUser } = useLogin()
  const [totalTickets, setTotalTickets] = useState(0)
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState<boolean>(true)
  const [openTickets, setOpenTickets] = useState<number>(0)
  const [closedTickets, setClosedTickets] = useState<number>(0)
  const [processingTickets, setProcessingTickets] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFocused, setIsFocused] = useState(false);
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [triggerSearch, setTriggerSearch] = useState(false);

  const tenantData = useTenantData()

  const fetchDatatickets = useCallback(async (search?: string) => {
    setLoading(true);
    try {
      let apiUrl = `${baseURL}tickets/index?per_page=${String(itensPorPage)}&page=${currentPage}`;

      const capturedInStart = localStorage.getItem('@startDateTicket');
      if (capturedInStart) {
        apiUrl += `&start_date=${capturedInStart}`;
      }

      const capturedInEnd = localStorage.getItem('@endDateTicket');
      if (capturedInEnd) {
        apiUrl += `&end_date=${capturedInEnd}`;
      }

      if (search) {
        apiUrl += `&number=${search}`;
      }

      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      });

      setTickets(response.data.tickets);
      setTotalTickets(response.data.total_tickets);
      setOpenTickets(response.data.open_tickets);
      setClosedTickets(response.data.completed_tickets);
      setProcessingTickets(response.data.processing_tickets);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally {
      setLoading(false);
    }
  }, [itensPorPage, currentPage, baseURL, dataUser?.token, searchValue]);



  const handleNextPage = async () => {
 await   setCurrentPage(prevPage => prevPage + 1)
  }

  const handlePrevPage = async () => {
    if (currentPage > 1) {
      await   setCurrentPage(prevPage => prevPage - 1)
    }
  }


  const fetchData = async (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const totalPages = Math.ceil(totalTickets / (itensPorPage || 1))

  const handleSaveToLocalStorage = async () => {
    if(currentPage !== 1){
      await   setCurrentPage(1)
    }
    await localStorage.setItem('@startDateTicket', startDate)
    await localStorage.setItem('@endDateTicket', endDate)

    if(currentPage === 1){
      fetchDatatickets();
    }

  }

  const handleRemoveDateFilter = () => {
    localStorage.removeItem('@startDateTicket')
    localStorage.removeItem('@endDateTicket')
    setStartDate('')
    setEndDate('')
    fetchDatatickets();
  }


  const handleChange = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value)
  }

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      setTriggerSearch(current => !current);
      if (currentPage !== 1) {
        setCurrentPage(1);
      }
    }
  };

  const activeFilters = [
    localStorage.getItem('@startDateTicket') && localStorage.getItem('@endDateTicket') && {
      title: 'Data',
      onClick: () => {
        handleRemoveDateFilter();
        setStartDate('');
        setEndDate('');
      }
    }
  ].filter((filter): filter is { title: string; onClick: () => void } => Boolean(filter));

  useEffect(() => {
    if (searchValue.trim() !== '' && triggerSearch) {
      fetchDatatickets(searchValue);
      setTriggerSearch(false);
    }
  }, [searchValue, currentPage, triggerSearch, fetchDatatickets]);


  useEffect(() => {
    if (searchValue.trim() === '') {
      fetchDatatickets(searchValue);
    }
    }, [fetchDatatickets, searchValue]);


  if (loading) {
    return <Loading />
  }

  return (
    <>
      <S.Container>
        <HeaderTickets />

        <S.ContainerCard>
          <CardInfo
            shouldFormat={false}
            label="Em Aberto"
            value={openTickets}
          />
          <CardInfo
            shouldFormat={false}
            label="Em Processamento"
            value={processingTickets}
          />
          <CardInfo
            shouldFormat={false}
            label="Finalizados"
            value={closedTickets}
          />
        </S.ContainerCard>

        {tickets.length > 0 && (<>
          <S.Input isFocused={isFocused}>
              <input
                type="text"
                placeholder="Digite o número do ticket..."
                value={searchValue}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
              />
              <S.SearchIcon isFocused onClick={handleSearch}>
                <MagnifyingGlass />
              </S.SearchIcon>
            </S.Input>

        </>) }

        <S.ContainerButton>

<BtnFilterModal
  disabled={!startDate || !endDate || endDate <= startDate}
  onClick={handleSaveToLocalStorage}
>
  <S.BtnFilterModalContainer>
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
  </S.BtnFilterModalContainer>
</BtnFilterModal>

{activeFilters.length > 0 && (
    <TagFilter filters={activeFilters} />
  )}
</S.ContainerButton>

        {tickets.length > 0 && (<>


<TableTickets rows={tickets} />

<S.ContainerCardsMobile>
<TicketsCardMobile data={tickets} />
</S.ContainerCardsMobile>

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

        </>) }


        {tickets.length === 0 && (<>
          <NoteData />

        </>) }


      </S.Container>
    </>
  )
}
