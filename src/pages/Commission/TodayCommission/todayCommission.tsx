import * as S from './styled'
import { useCallback, useEffect, useState } from 'react'
import { PaginaView } from '@/components/PaginaView/paginaView'
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage'
import { Pagination } from '@/components/Pagination/pagination'

import { useLogin } from '@/context/user.login'
import { Loading } from '@/components/Loading/loading'
import { HeaderCommission } from './components/HeaderCommission/headerCommission'
import { CardInfo } from '@/components/CardInfo/cardInfo'
import { TabelaToDayCommission } from './components/TabelaToDayCommission/tabelaToDayCommission'
import { ToDayCommisionCard } from './Mobile/ToDayCommisionCard/toDayCommisionCard'
import axios from 'axios'
import { baseURL } from '@/config/color'


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


export function TodayCommission() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10)
  const [loading, setLoading] = useState<boolean>(false)


  const [currentPage, setCurrentPage] = useState<number>(1)
  const { dataUser } = useLogin()
  const [totalCommissionsByEC, setTotalCommissionsByEC] = useState<number>(0);
  const [totalTransactionAmount, setTotalTransactionAmount] = useState<number>(0);
  const [totalCommissionCount, setTotalCommissionCount] = useState<number>(0);
  const [commissionsByEC, setCommissionsByEC] = useState<ECCommissions>({});


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

    let url = `${baseURL}commisssion/la-network-commission?perpage=${String(itensPorPage)}&page=${currentPage}`;


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
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  }, [itensPorPage, currentPage, baseURL, dataUser?.token]);




  const totalPages = Math.ceil(totalCommissionsByEC / (itensPorPage || 1))

  useEffect(() => {
    fetchDataFromAPI()
  }, [itensPorPage, currentPage])


  return (
    <>

      {loading ? (
        <Loading />
      ) : (
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


          <TabelaToDayCommission commissions_by_EC={commissionsByEC} />

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
          </S.Container>
        </>
      )}
    </>
  )
}
