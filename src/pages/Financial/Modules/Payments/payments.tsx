import { PaginaView } from '@/components/PaginaView/paginaView';
import * as S from './styled';
import { useCallback, useEffect, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { TicketsCardMobile } from './Mobile/TicketsCardMobile/ticketsCardMobile';
import { baseURL } from '@/service/api';
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal';
import { CustomInput } from '@/components/Input/input';
import { useTenantData } from '@/context';
import { TablePayments } from './components/TablePayments/tablePayments';
import { HeaderPayments } from './components/HeaderPayments/headerPayments';
import { TagFilter } from '@/components/TagFilter/tagFilter';
import { NoteData } from '@/components/NoteData/noteData';

export function Payments() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const { dataUser } = useLogin();
  const [totalPayments, setTotalPayments] = useState(0);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const tenantData = useTenantData();

  const fetchDataPayments = useCallback(async () => {
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

      setPayments(response.data.payments);
      setTotalPayments(response.data.total_payments);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }, [itensPorPage, currentPage, dataUser?.token]);

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

  const totalPages = Math.ceil(totalPayments / Number(itensPorPage));

  useEffect(() => {
    fetchDataPayments();
  }, [fetchDataPayments]);

  const handleSaveToLocalStorage = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
    localStorage.setItem('@startDatePayments', startDate);
    localStorage.setItem('@endDatePayments', endDate);
    if (currentPage === 1) {
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

        {payments.length > 0 ? (
          <>
            <TablePayments rows={payments} />
            <S.ContainerCardsMobile>
              <TicketsCardMobile data={payments} />
            </S.ContainerCardsMobile>
            <S.Context>
              <S.Linha />
              <S.ContainerPagina>
                <PaginaView totalItens={totalPayments} />
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
          </>
        ) : (
         <NoteData />
        )}
      </S.Container>
    </>
  );
}
