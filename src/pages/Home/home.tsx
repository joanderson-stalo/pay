import  { useState, useEffect, useMemo } from 'react';
import { MonthYearSelector } from '@/components/MonthYearPicker/MonthYearPicker';
import { CustomChart } from '@/components/GraficoDelinha/graficolinha';
import { TopEstabelecimentos } from './components/topEstabelecimentos';
import { UltimasVendas } from './components/ultimasVendas';

export function Home() {
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

  
  const dataMesAtual = [60, 85, 90, 95, 100, 105, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 0, 230, 240, 290, 240, 230, 220, 210, 200, 190, 180, 170, 160];
  const dataMesSelecionado = [80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 210, 190, 170, 150, 130, 110, 90, 70, 50, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120];

  useEffect(() => {
    localStorage.setItem('@selectedMonthYear', selectedYear);
  }, [selectedYear]);

  return (
    <div>
      {/* Passando o ano selecionado como prop */}
      <MonthYearSelector selectedYear={selectedYear} onYearChange={handleYearChange} />
      <CustomChart dataMesAtual={dataMesAtual} dataMesSelecionado={dataMesSelecionado} />
      <TopEstabelecimentos />
      <UltimasVendas />
    </div>
  );
}
