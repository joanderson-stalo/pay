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

export function RankingCommission() {
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

  const fetchDataFromAPI = useCallback(async (search?: string) => {
    setLoading(true);

    let url = `${baseURL}commisssion/mycommission?perpage=${String(itensPorPage)}&page=${currentPage}`;



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

 

  useEffect(() => {
    if (searchValue.trim() === '') {
      fetchDataFromAPI()
    }
  }, [searchValue])



  const totalPages = Math.ceil(totalCommissionsByEC / (itensPorPage || 1))



  useEffect(() => {
    fetchDataFromAPI()
  }, [itensPorPage, currentPage])

  console.log('totalpage', totalPages)

  return (
    <>
    
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  )
}
