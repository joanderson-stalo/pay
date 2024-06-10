import { PaginaView } from '@/components/PaginaView/paginaView';
import * as S from './styled';
import { useEffect, useRef, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { TicketsCardMobile } from './Mobile/TicketsCardMobile/ticketsCardMobile';
import { baseURL } from '@/config/color';
import { useTicketsPageContext } from '@/context/pages/ticketsPageContext';
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal';
import { CustomInput } from '@/components/Input/input';
import { useTenantData } from '@/context';
import { TagFilter } from '@/components/TagFilter/tagFilter';
import { useFilterTicket } from './hooks/useFilterTicket';
import { debounce } from 'lodash';
import { TablePayments } from './components/TablePayments/tablePayments';
import { HeaderPayments } from './components/HeaderPayments/headerPayments';

export function Payments() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10)
  const [searchValue, setSearchValue] = useState('');
  const { dataUser } = useLogin();
  const [totalTickets, setTotalTickets] = useState(0);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { currentPage, setCurrentPage } = useTicketsPageContext();

  const { setFalse, setTrue, state } = useFilterTicket();
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const tenantData = useTenantData();

  const fetchDatatickets = async (search?: string) => {
    setLoading(true);
    try {
      let apiUrl = `${baseURL}payments/indexPayment?per_page=${String(itensPorPage)}&page=${currentPage}`;

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
          Authorization: `Bearer ${dataUser?.token}`,
        },
      });

      setTickets(response.data.payments);
      setTotalTickets(response.data.total_payments);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const fetchData = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(totalTickets / Number(itensPorPage));

  useEffect(() => {
    fetchDatatickets();
  }, [dataUser, itensPorPage, currentPage, state]);

  useEffect(() => {
    if (searchValue.trim() === '') {
      fetchDatatickets();
    }
  }, [searchValue]);

  const handleSaveToLocalStorage = () => {
    setCurrentPage(1);
    localStorage.setItem('@startDateTicket', startDate);
    localStorage.setItem('@endDateTicket', endDate);
    setTrue();
  };

  const handleRemoveDateFilter = () => {
    localStorage.removeItem('@startDateTicket');
    localStorage.removeItem('@endDateTicket');
    setStartDate('');
    setEndDate('');
    setFalse();
  };

  const debouncedFetchDataFromAPI = useRef(debounce(fetchDatatickets, 1000)).current;
  const handleChange = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value);
    if (event.target.value.trim() !== '') {
      setCurrentPage(1);
      debouncedFetchDataFromAPI(event.target.value.trim());
    } else {
      debouncedFetchDataFromAPI.cancel();
      fetchDatatickets();
    }
  };



  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <S.Container>
        <HeaderPayments />
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
                onChange={(event) => setStartDate(event.target.value)}
              />
              <CustomInput
                colorInputDefault={tenantData.primary_color_identity}
                colorInputSuccess={tenantData.secondary_color_identity}
                type="date"
                label="Data final"
                value={endDate}
                hasError={!!startDate && (endDate <= startDate || !endDate)}
                onChange={(event) => setEndDate(event.target.value)}
              />
            </S.BtnFilterModalContainer>
          </BtnFilterModal>
          {state && <TagFilter filters={[{ title: 'Data', onClick: handleRemoveDateFilter }]} />}
        </S.ContainerButton>
        < TablePayments rows={tickets} />
        <S.ContainerCardsMobile>
          <TicketsCardMobile data={tickets} />
        </S.ContainerCardsMobile>
        <S.Context>
          <S.Linha />
          <S.ContainerPagina>
            <PaginaView totalItens={totalTickets} />
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
