import { useCallback, useEffect, useState } from "react";
import { useLogin } from "@/context/user.login";
import { Loading } from "@/components/Loading/loading";
import { CardInfo } from "@/components/CardInfo/cardInfo";
import { GraficoCicle } from '@/components/GraficoCicleNew/graficoCicle';
import { LatestSales } from "../LAHome/components/LatestSales/latestSales";
import { baseURL } from '@/service/api';
import * as S from './styled';
import { TitleH } from "@/components/Title/title";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { TranslateErrorMessage } from "@/utils/translateErrorMessage";

interface Transaction {
  captured_in: string;
  payment_type: string;
  brand: string;
  amount: string;
}

interface PaymentTypes {
  pix: string;
  debit: string;
  credit: string;
}

interface HomeData {
  status: number;
  success: boolean;
  transactions_EC_total: number;
  transactions_TPV: string;
  payment_types: PaymentTypes;
  hourly_transaction_totals: any[];
  latest_transactions: Transaction[];
}

export function ECHome() {
  const { dataUser } = useLogin();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [homeData, setHomeData] = useState<HomeData | null>(null);


  const fetchHomeEC = useCallback(async () => {
    setIsLoading(true);
    const url = `${baseURL}homescreenec`;
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
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally {
      setIsLoading(false);
    }
  }, [dataUser?.token]);

  useEffect(() => {
    fetchHomeEC();
  }, [fetchHomeEC]);

  const latestTransactions = homeData?.latest_transactions || [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <S.Container>
      <TitleH title="Resumo" />

          <S.ContainerCard>
            <CardInfo label="Saldo" value={616.50} />
            <CardInfo label="Recebível" value={616.50} />
            <CardInfo label="Quantidade de Vendas" value={616.50} />
          </S.ContainerCard>





        <S.ContainerGrafico>

        <GraficoCicle
            pix={homeData?.payment_types.pix || '0'}
            credit={homeData?.payment_types.credit || '0'}
            debit={homeData?.payment_types.debit || '0'}
            total={homeData?.transactions_TPV || '0'}
          />
          
          <LatestSales latest_transactions={latestTransactions}/>

        </S.ContainerGrafico>
      </S.Container>
    </>
  );
}
