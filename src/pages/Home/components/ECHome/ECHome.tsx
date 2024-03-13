import { GraficoCicle } from "@/components/GraficoCicleNew/graficoCicle";
import * as S from './styled';
import { CustomChart } from "@/components/GraficoDelinha/graficolinha";
import { MonthYearSelector } from "@/components/MonthYearPicker/MonthYearPicker";
import { useEffect, useState } from "react";
import { Indicator } from "./components/Indicator/Indicator";
import { CardInfo } from "@/components/CardInfo/cardInfo";
import { useLogin } from "@/context/user.login";
import { Loading } from "@/components/Loading/loading";
import { LatestSales } from "../LAHome/components/LatestSales/latestSales";
import { baseURL } from "@/config/color";

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

export function ECHome(){
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const dataMesAtual = [60, 85, 90, 95, 100, 105, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 0, 230, 240, 290, 240, 230, 220, 210, 200, 190, 180, 170, 160];
  const dataMesSelecionado = [ 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 210, 190, 170, 150, 130, 110, 90, 70, 50, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120];

  const storedMonthYear = localStorage.getItem('@selectedMonthYear');
  const initialMonthYear = storedMonthYear || getDefaultMonthYear();

  function getDefaultMonthYear() {
    const currentDate = new Date();
    return `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
  }
  const [selectedYear, setSelectedYear] = useState<string>(initialMonthYear);

  const handleYearChange = (newYear: string) => {
    setSelectedYear(newYear);
  };

  const { dataUser } = useLogin();

  const fetchHomeEC = async () => {
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
      console.error('Error fetching plans:', error);
    } finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchHomeEC();
    })();
  }, []);

  const latestTransactions = homeData?.latest_transactions || [];

  return (
    <>
    {isLoading &&  <Loading  />} 
      <S.Container>
        <S.ContainerInfo>
          <S.ContainerCard>
            <CardInfo label="Saldo" value={616.50} />
            <CardInfo label="Recebível" value={616.50} />
            <CardInfo label="Qtd de Vendas" value={616.50} />
          </S.ContainerCard>
          <GraficoCicle
            pix={homeData?.payment_types.pix || '0'}
            credit={homeData?.payment_types.credit || '0'}
            debit={homeData?.payment_types.debit || '0'}
            total={homeData?.transactions_TPV || '0'}
          />
          <LatestSales latest_transactions={latestTransactions}/>
        </S.ContainerInfo>
        <S.ContainerGrafico>
          <S.ContainerInfoGrafico>
            <S.ContainerTitle>
              <h4>Comparativo Mensal</h4>
              <S.ContainerTooltip>
                <S.TooltipIcon />
                <S.TooltipText>Mensagem de informação.</S.TooltipText>
              </S.ContainerTooltip>
            </S.ContainerTitle>
            <S.ContainerCalendar>
              <Indicator />
              <Indicator label="Mês selecionado" />
              <MonthYearSelector selectedYear={selectedYear} onYearChange={handleYearChange} />
            </S.ContainerCalendar>
          </S.ContainerInfoGrafico>
          <CustomChart dataMesAtual={dataMesAtual} dataMesSelecionado={dataMesSelecionado} />
        </S.ContainerGrafico>
      </S.Container>
    </>
  );
}
