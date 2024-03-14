import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ChartData, ChartOptions, TooltipItem } from 'chart.js/auto';
import { ContainerGrafico } from './styled';
import { useTenantData } from '@/context';

interface CustomChartOptions extends ChartOptions<'doughnut'> {
  centerText?: string;
  centerValue?: string;
}

const getFontSizeValue = (): number => {
  if (window.innerWidth < 600) return 18;
  if (window.innerWidth < 900) return 20;
  if (window.innerWidth < 1100) return 22;
  return 24.293;
};

const getFontSizeText = (): number => {
  if (window.innerWidth < 600) return 14;
  if (window.innerWidth < 900) return 12;
  if (window.innerWidth < 1100) return 13;
  return 14;
};

const centerTextPlugin = {
  id: 'custom_center_text_plugin',
  beforeDraw: (chart: ChartJS<'doughnut', number[], string>) => {
    const { width, height, ctx, options } = chart;
    if (!options) return;
    ctx.restore();
    const fontSizeValue = getFontSizeValue();
    const fontSizeText = getFontSizeText();
    ctx.font = `700 ${fontSizeValue}px sans-serif`;
    ctx.fillStyle = "#383838";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const customOptions = options as CustomChartOptions;
    const textValue = customOptions.centerValue || "";
    const textLabel = customOptions.centerText || "";
    const textX = width / 2;
    const textY = height / 2 - fontSizeText / 2;
    ctx.fillText(textValue, textX, textY - fontSizeValue * 0.8);
    ctx.font = `700 ${fontSizeText}px sans-serif`;
    ctx.fillText(textLabel, textX, textY + fontSizeValue * 1.2);
    ctx.save();
  },
};

ChartJS.register(centerTextPlugin);

interface AppProps {
  debit: string;
  credit: string;
  pix: string;
  total: string;
}

export function GraficoCicle({ debit, credit, pix, total }: AppProps) {
  const totalFloat = parseFloat(total);
  const tenantData = useTenantData();
  const totalStr = totalFloat.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const data: ChartData<'doughnut', number[], string> = {
    labels: ['Débito', 'Crédito', 'Pix'],
    datasets: [
      {
        data: [
          parseFloat(debit.replace('.', '').replace(',', '.')),
          parseFloat(credit.replace('.', '').replace(',', '.')),
          parseFloat(pix.replace('.', '').replace(',', '.'))
        ],
        backgroundColor: [tenantData.primary_color_identity, tenantData.secondary_color_identity, '#045469'],
        borderColor: [tenantData.primary_color_identity, tenantData.secondary_color_identity, '#045469'],
        borderWidth: 1,
        borderRadius: 100,
        spacing: 2,
      },
    ],
  };

  const options: CustomChartOptions = {
    cutout: '80%',
    centerText: "TPV TOTAL",
    centerValue: totalStr,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          pointStyle: 'circle',
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'doughnut'>) => {
            const value = context.raw as number;
            const formattedValue = (value / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
            return `R$ ${formattedValue}`;
          },
        },
      },
    },
    onHover: (event, elements, chart) => {
      if (!chart) return;
      const customOptions = chart.options as CustomChartOptions;
      if (elements.length > 0) {
        const hoveredElementIndex = elements[0].index;
        const hoveredColor = Array.isArray(data.datasets[0].backgroundColor)
          ? data.datasets[0].backgroundColor[hoveredElementIndex]
          : data.datasets[0].backgroundColor;
        if (hoveredColor === tenantData.primary_color_identity) {
          customOptions.centerText = "TPV DÉBITO";
          customOptions.centerValue = "R$ " + parseFloat(debit).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        } else if (hoveredColor === tenantData.secondary_color_identity) {
          customOptions.centerText = "TPV CRÉDITO";
          customOptions.centerValue = "R$ " + parseFloat(credit).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        } else if (hoveredColor === '#045469') {
          customOptions.centerText = "TPV PIX";
          customOptions.centerValue = "R$ " + parseFloat(pix).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        }
      } else {
        customOptions.centerText = "TPV TOTAL";
        customOptions.centerValue = totalStr;
      }
      chart.update();
    },
  };

  return (
    <ContainerGrafico>
      <Doughnut data={data} options={options} />
    </ContainerGrafico>
  );
}
