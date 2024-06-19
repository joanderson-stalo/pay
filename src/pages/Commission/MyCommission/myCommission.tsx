import * as S from './styled'
import { useCallback, useEffect, useState } from 'react'
import { PaginaView } from '@/components/PaginaView/paginaView'
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage'
import { Pagination } from '@/components/Pagination/pagination'
import { useLogin } from '@/context/user.login'
import { Loading } from '@/components/Loading/loading'
import { HeaderCommission } from './components/HeaderCommission/headerCommission'
import { TabelaRankingCommission } from './components/TabelaRankingCommission/tabelaRankingCommission'
import { RankingCard } from './Mobile/RankingCard/rankingCard'
import { baseURL } from '@/config/color'
import axios from 'axios'
import { CardInfo } from '@/components/CardInfo/cardInfo'
import { TagFilter } from '@/components/TagFilter/tagFilter'
import { CustomInput } from '@/components/Input/input'
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal'
import { useTenantData } from '@/context'

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

export function MyCommission() {
  const [searchValue, setSearchValue] = useState('')
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10)
  const [filter, setFilter] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)



  const [currentPage, setCurrentPage] = useState<number>(1)

  const { dataUser } = useLogin()
  const [apiData, setApiData] = useState<APIResponse | null>(null)
  const [totalCommissionsByEC, setTotalCommissionsByEC] = useState<number>(0);
  const [totalTransactionAmount, setTotalTransactionAmount] = useState<number>(0);
  const [totalCommissionCount, setTotalCommissionCount] = useState<number>(0);
  const [totalCommissionAmount, setTotalCommissionAmount] = useState<number>(0);
  const [commissionsByEC, setCommissionsByEC] = useState<ECCommissions>({});
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const tenantData = useTenantData()

  const fetchDataFromAPI = useCallback(async (search?: string) => {
    setLoading(true);

    let url = `${baseURL}commisssion/mycommission?perpage=${String(itensPorPage)}&page=${currentPage}`;

    const capturedInStart = localStorage.getItem('@startDateMyCommission')
    if (capturedInStart) {
      url += `&transaction_date_start=${capturedInStart}`
    }

    const capturedInEnd = localStorage.getItem('@endDateMyCommission')
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
      const response = await axios.get<APIResponse>(url, config);
      const { data } = response;

      setTotalTransactionAmount(Number(data.total_transaction_amount));
      setTotalCommissionCount(Number(data.total_commission_count));
      setTotalCommissionAmount(Number(data.total_commission_amount));
      setCommissionsByEC(data.commissions_by_EC);

      let totalCommissions = Object.keys(data.commissions_by_EC).length;
      setTotalCommissionsByEC(totalCommissions);

    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  }, [itensPorPage, currentPage, baseURL, dataUser?.token]);



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

  const totalPages = Math.ceil(totalCommissionsByEC / (itensPorPage || 1))



  useEffect(() => {
    fetchDataFromAPI()
  }, [fetchDataFromAPI])


  const handleSaveToLocalStorage = async () => {
    if(currentPage !== 1){
      await   setCurrentPage(1)
    }


    await localStorage.setItem('@startDateMyCommission', startDate)
    await localStorage.setItem('@endDateMyCommission', endDate)

    if(currentPage === 1){
      fetchDataFromAPI();
    }

  }


  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey);
    switch (filterKey) {
      case '@startDateMyCommission':
        setStartDate('');
        break;
      case '@endDateMyCommission':
        setEndDate('');
        break;
    }
    fetchDataFromAPI();
  };


  const activeFilters = [
    localStorage.getItem('@startDateMyCommission') && localStorage.getItem('@endDateMyCommission') && {
      title: 'Data',
      onClick: () => {
        handleRemoveFilter('@startDateMyCommission');
        handleRemoveFilter('@endDateMyCommission');
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


            <S.ContainerCardVendas>
              <CardInfo
                label="Valor total da transação"
                value={totalTransactionAmount}
              />
              <CardInfo
                label="Valor total da comissão"
                value={totalCommissionAmount}
              />
              <CardInfo
                label="Contagem total de comissões"
                shouldFormat={false}
                value={totalCommissionCount}
              />
            </S.ContainerCardVendas>

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

          <TabelaRankingCommission commissions_by_EC={commissionsByEC}  />


          <S.ContainerCardsMobile>
          <RankingCard data={commissionsByEC} />
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
          </S.Container>
        </>
  )
}
