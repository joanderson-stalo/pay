import { PaginaView } from '@/components/PaginaView/paginaView';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { TicketsCardMobile } from './Mobile/TicketsCardMobile/ticketsCardMobile';
import { baseURL } from '@/config/color';
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal';
import { CustomInput } from '@/components/Input/input';
import { useTenantData } from '@/context';
import { debounce } from 'lodash';
import { TablePayments } from './components/TablePayments/tablePayments';
import { HeaderPayments } from './components/HeaderPayments/headerPayments';
import { TagFilter } from '@/components/TagFilter/tagFilter';

export function Payments() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10)
  const { dataUser } = useLogin();
  const [totalTickets, setTotalTickets] = useState(0);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const tenantData = useTenantData();

  const fetchDataPayments = async (search?: string) => {
    setLoading(true);
    try {
      let apiUrl = `${baseURL}payments/indexPayment?per_page=${String(itensPorPage)}&page=${currentPage}`;

      const capturedInStart = localStorage.getItem('@startDatePayments');
      if (capturedInStart) {
        apiUrl += `&payment_date_start=${capturedInStart}`;
      }

      const capturedInEnd = localStorage.getItem('@endDatePayments');
      if (capturedInEnd) {
        apiUrl += `&payment_date_end=${capturedInEnd}`;
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
    fetchDataPayments();
  }, [dataUser, itensPorPage, currentPage]);



  const handleSaveToLocalStorage = () => {
    if(currentPage !== 1) {
      setCurrentPage(1);
    }
    localStorage.setItem('@startDatePayments', startDate);
    localStorage.setItem('@endDatePayments', endDate);
    if(currentPage === 1) {
      fetchDataPayments();
    }

  };

  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey);
    switch (filterKey) {
      case '@startDatePayments':
        setStartDate('');
        break;
      case '@endDatePayments':
        setEndDate('');
        break;
    }
    fetchDataPayments();
  };



  const activeFilters = [
    localStorage.getItem('@startDatePayments') && localStorage.getItem('@endDatePayments') && {
      title: 'Data',
      onClick: () => {
        handleRemoveFilter('@startDatePayments');
        handleRemoveFilter('@endDatePayments');
        setStartDate('');
        setEndDate('');
      }
    }
  ].filter((filter): filter is { title: string; onClick: () => void } => Boolean(filter));


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
          {activeFilters.length > 0 && (
              <TagFilter filters={activeFilters} />
            )}
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
