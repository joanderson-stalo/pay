import { Card } from "./components/Card/card";
import { GraficoCicle } from "@/components/graficoCicle/graficoCicle";
import * as S from './styled';
import { UltimasVendas } from "./components/UltimasVendas/ultimasVendas";
import { CustomChart } from "@/components/GraficoDelinha/graficolinha";
import { MonthYearSelector } from "@/components/MonthYearPicker/MonthYearPicker";
import { useState } from "react";
import { Indicator } from "./components/Indicator/Indicator";




export function LAHome(){
  const dataMesAtual = [60, 85, 90, 95, 100, 105, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 0, 230, 240, 290, 240, 230, 220, 210, 200, 190, 180, 170, 160];
  const dataMesSelecionado = [80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 210, 190, 170, 150, 130, 110, 90, 70, 50, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120];

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

  return (
    <>
      <S.Title>Hoje</S.Title>

      <S.ContainerInfo>
        <S.ContainerCard>
          <Card label="Saldo" label2="R$ 8.835,00" />
          <Card label="Recebível" label2="R$ 616,50" />
          <Card label="Qtd de Vendas" label2="835" />
        </S.ContainerCard>

        <GraficoCicle pix='5.000,00' credit='6.000,20' debit='2.000,20' />
        <UltimasVendas />
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
    </>
  );
}
