import * as S from './styled'
import { useCallback, useEffect, useState } from 'react'
import { PaginaView } from '@/components/PaginaView/paginaView'
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage'
import { Pagination } from '@/components/Pagination/pagination'

import { useLogin } from '@/context/user.login'
import { Loading } from '@/components/Loading/loading'
import { HeaderCommission } from './components/HeaderCommission/headerCommission'
import { CardInfo } from '@/components/CardInfo/cardInfo'
import { ToDayCommisionCard } from './Mobile/ToDayCommisionCard/toDayCommisionCard'
import axios, { AxiosError } from 'axios'
import { baseURL } from '@/config/color'
import { TabelaNetWordkCommission } from './components/TabelaNetWordkCommission/tabelaNetWordkCommission'
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal'
import { CustomInput } from '@/components/Input/input'
import { useTenantData } from '@/context'
import { TagFilter } from '@/components/TagFilter/tagFilter'
import { NoteData } from '@/components/NoteData/noteData'
import { toast } from 'react-toastify'
import { TranslateErrorMessage } from '@/utils/translateErrorMessage'


interface CommissionData {
  ec_seller_document: string;
  la_seller_trading_name: string;
  total_amount: string;
  commission_count:string;
  total_transaction_amount:string;
}

interface SellerCommissions {
  [fornecedor: string]: CommissionData;
}

interface ECCommissions {
  [sellerName: string]: SellerCommissions;
}

interface APIResponse {
  status: number;
  success: boolean;
  total_transaction_amount: string;
  total_commission_count: string;
  total_commission_amount: string;
  commissions_by_EC: ECCommissions;
}


export function NetWorkCommission() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10)
  const [loading, setLoading] = useState<boolean>(false)


  const [currentPage, setCurrentPage] = useState<number>(1)
  const { dataUser } = useLogin()
  const [totalCommissionsByEC, setTotalCommissionsByEC] = useState<number>(0);
  const [totalTransactionAmount, setTotalTransactionAmount] = useState<number>(0);
  const [totalCommissionCount, setTotalCommissionCount] = useState<number>(0);
  const [commissionsByEC, setCommissionsByEC] = useState<ECCommissions>({});
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const tenantData = useTenantData()

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

  const fetchDataFromAPI = useCallback(async (search?: string) => {
    setLoading(true);

    let url = `${baseURL}commisssion/la-network-commission?per_page=${String(itensPorPage)}&page=${currentPage}`;


    const capturedInStart = localStorage.getItem('@startDateNetWorkCommission')
    if (capturedInStart) {
      url += `&transaction_date_start=${capturedInStart}`
    }

    const capturedInEnd = localStorage.getItem('@endDateNetWorkCommission')
    if (capturedInEnd) {
      url += `&transaction_date_end=${capturedInEnd}`
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
      setTotalTransactionAmount(Number(data.total_transaction_amount));
      setTotalCommissionCount(Number(data.total_transaction_count));
      setCommissionsByEC(data.commissions_by_EC);

      let totalCommissions = Object.keys(data.commissions_by_EC).length;
      setTotalCommissionsByEC(totalCommissions);

    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally {
      setLoading(false);
    }
  }, [itensPorPage, currentPage, baseURL, dataUser?.token]);


  const totalPages = Math.ceil(totalCommissionsByEC / (itensPorPage || 1))

  useEffect(() => {
    fetchDataFromAPI()
  }, [fetchDataFromAPI])



  const handleSaveToLocalStorage = async () => {

    if(currentPage !== 1){
      await   setCurrentPage(1)
    }

    await localStorage.setItem('@startDateNetWorkCommission', startDate)
    await localStorage.setItem('@endDateNetWorkCommission', endDate)

    if(currentPage === 1){
      fetchDataFromAPI()
    }

  }


  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey);
    switch (filterKey) {
      case '@startDateNetWorkCommission':
        setStartDate('');
        break;
      case '@endDateNetWorkCommission':
        setEndDate('');
        break;
    }
    fetchDataFromAPI();
  };


  const activeFilters = [
    localStorage.getItem('@startDateNetWorkCommission') && localStorage.getItem('@endDateNetWorkCommission') && {
      title: 'Data',
      onClick: () => {
        handleRemoveFilter('@startDateNetWorkCommission');
        handleRemoveFilter('@endDateNetWorkCommission');
        setStartDate('');
        setEndDate('');
      }
    }
  ].filter((filter): filter is { title: string; onClick: () => void } => Boolean(filter));

  if(loading){
    return <Loading />
  }


  return (

        <>
        <S.Container>

        <HeaderCommission />
          <S.ContextTitleVendas>


            <S.ContainerCardVendas>
              <CardInfo
                label="Valor total da transação"
                value={totalTransactionAmount}
              />
              <CardInfo
                label="Transações totais"
                shouldFormat={false}
                value={totalCommissionCount}
              />

            </S.ContainerCardVendas>

          </S.ContextTitleVendas>

          {Object.keys(commissionsByEC).length > 0 && (<>

            <S.ContainerButton>
          <BtnFilterModal
            onClick={handleSaveToLocalStorage}
            disabled={!startDate || !endDate || endDate <= startDate}
          >

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
        </S.ContainerButton>
          </>) }

          {Object.keys(commissionsByEC).length > 0 && (<>
            <TabelaNetWordkCommission commissions_by_EC={commissionsByEC} />

<S.ContainerCardsMobile>
<ToDayCommisionCard data={commissionsByEC}  />
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


          </>)}


          {Object.keys(commissionsByEC).length === 0 && (<>
            <NoteData />

          </>)}


          </S.Container>
        </>
  )
}
