import { GraficoBar } from "@/components/GraficoBar/graficoBar";
import { GraficoCicle } from "@/components/GraficoCicle/graficoCicle";
import * as S from './styled'
import { TopEstabelecimentos } from "./components/TopEstabelecimento/topEstabelecimentos";
import { LatestSales } from "./components/LatestSales/latestSales";
import { useLogin } from "@/context/user.login";
import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading/loading";
import { CardInfo } from "@/components/CardInfo/cardInfo";

interface Transaction {
  captured_in: string;
  payment_type: string;
  brand: string;
  amount: string;
}

interface TopSeller {
  seller_id: number;
  trading_name: string;
  total_amount: string;
}

interface HomeData {
  status: number;
  success: boolean;
  total_sellers_EC: number;
  total_sellers_LA: number;
  transactions_EC_total: number;
  transactions_TPV: string;
  payment_types: { [key: string]: string };
  hourly_transaction_totals: { [key: string]: string };
  commission_TPV: string;
  top_Seller: TopSeller[];
  latest_transactions: Transaction[];
}

export function LAHome() {
  const { dataUser } = useLogin();
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  const fetchHomeLA = async () => {
    setIsLoading(true);
    const url = `https://api-pagueassim.stalopay.com.br/homescreenwlela`;
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`,
        },
      });
      const data: HomeData = await response.json();
      setHomeData(data);
    } catch (error) {
      console.error('Error fetching plans:', error);
    } finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Immediately Invoked Function Expression (IIFE)
    (async () => {
      await fetchHomeLA();
    })();
  }, []);

  // Função para converter a string em um número, removendo as vírgulas
  const convertToNumber = (value: string) => {
    return parseFloat(value.replace(/,/g, ''));
  };

  // Converter o valor da comissão para um número
  const commissionTPV = homeData ? convertToNumber(homeData.commission_TPV) : 0;

  const creditValue = homeData?.payment_types.credit || '0';
  const debitValue = homeData?.payment_types.debit || '0';
  const pixValue = homeData?.payment_types.pix || '0';
  const transactionsTPV = homeData?.transactions_TPV || '0';

  const latestTransactions = homeData?.latest_transactions || [];
  const topSellers = homeData?.top_Seller || [];
  const hourlyTransactionTotals = homeData?.hourly_transaction_totals || {};

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <S.Container>
        <S.ContainerCards>
          <CardInfo label="Comissão" value={commissionTPV} />
          <CardInfo label="Quantidade de EC" shouldFormat={false} value={homeData?.total_sellers_EC || 0} />
          <CardInfo label="Quantidade de LA" shouldFormat={false} value={homeData?.total_sellers_LA || 0} />
        </S.ContainerCards>

        <S.ContainerGrafico>
          <GraficoCicle total={transactionsTPV} pix={pixValue} credit={creditValue } debit={debitValue} />
          <GraficoBar hourly_transaction_totals={hourlyTransactionTotals} />
        </S.ContainerGrafico>

        <S.ContainerTable>
        <LatestSales latest_transactions={latestTransactions}/>
          <TopEstabelecimentos topSellers={topSellers} />
        </S.ContainerTable>
      </S.Container>
    </>
  )
}
