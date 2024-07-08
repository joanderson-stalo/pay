import { PaginaView } from '@/components/PaginaView/paginaView';
import * as S from './styled';
import { useCallback, useEffect, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal';
import { CustomInput } from '@/components/Input/input';
import { useTenantData } from '@/context';
import { TagFilter } from '@/components/TagFilter/tagFilter';
import { NoteData } from '@/components/NoteData/noteData';
import { HeaderConfrapix } from './components/HeaderConfrapix/headerConfrapix';
import { ConfraPixTable } from './components/ConfraPixTable/confraPixTable';
import { ConfraPixCardMobile } from './Mobile/ConfraPixCardMobile/confraPixCardMobile';

export function ListPix() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [totalPayments, setTotalPayments] = useState(0);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const tenantData = useTenantData();

  const fetchConfrapixTransactions = useCallback(async () => {
    setLoading(true);
    try {
      let apiUrl = `https://api.confrapix.com.br/api/transaction/index?page=${currentPage}`;


      const capturedInStart = localStorage.getItem('@captured_in_startpix')
      if (capturedInStart) {
        apiUrl += `&dateStart=${capturedInStart}`
      }

      const capturedInEnd = localStorage.getItem('@captured_in_endpix')
      if (capturedInEnd) {
        apiUrl += `&dateEnd=${capturedInEnd}`
      }
    

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: 'Bearer 4|1gFqp0l1Uept2708GW31sSnWhKi5y7K3Se2NwkbH19899e31',
        },
      });

      setPayments(response.data.transaction.data || []);
      setTotalPayments(response.data.transaction.total || 0);
    } catch (error) {
      setPayments([]);
      setTotalPayments(0);
    } finally {
      setLoading(false);
    }
  }, [itensPorPage, currentPage]);

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
    fetchConfrapixTransactions();
  }, [fetchConfrapixTransactions]);

  const handleSaveToLocalStorage = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
    localStorage.setItem('@captured_in_startpix', startDate);
    localStorage.setItem('@captured_in_endpix', endDate);
    if (currentPage === 1) {
      fetchConfrapixTransactions();
    }
  };

  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey);
    switch (filterKey) {
      case '@captured_in_startpix':
        setStartDate('');
        break;
      case '@captured_in_endpix':
        setEndDate('');
        break;
    }
    fetchConfrapixTransactions();
  };

  const activeFilters = [
    localStorage.getItem('@captured_in_startpix') && localStorage.getItem('@captured_in_endpix') && {
      title: 'Data',
      onClick: () => {
        handleRemoveFilter('@captured_in_startpix');
        handleRemoveFilter('@captured_in_endpix');
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
        <HeaderConfrapix />

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
            <ConfraPixTable rows={payments} />
            <S.ContainerCardsMobile>
              <ConfraPixCardMobile data={payments} />
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
