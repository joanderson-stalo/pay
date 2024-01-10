import { Doughnut } from 'react-chartjs-2';
import Chart, { ChartData, ChartOptions, Title, Tooltip, Legend } from 'chart.js/auto';
import { ContainerGrafico } from './styled';
import { ThemeColor } from '@/config/color';

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
  beforeDraw: (chart: any) => {
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

Chart.register(Title, Tooltip, Legend, centerTextPlugin);

interface AppProps {
  debit: string;
  credit: string;
  pix: string;
}

export function GraficoCicle({ debit, credit, pix }: AppProps) {
  const total = parseFloat(debit.replace(".", "").replace(",", ".")) +
    parseFloat(credit.replace(".", "").replace(",", ".")) +
    parseFloat(pix.replace(".", "").replace(",", "."));
  const totalStr = "R$ " + total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  const data: ChartData<'doughnut'> = {
    labels: ['Crédito', 'Débito', 'Pix'],
    datasets: [
      {
        data: [
          parseFloat(debit.replace(".", "").replace(",", ".")),
          parseFloat(credit.replace(".", "").replace(",", ".")),
          parseFloat(pix.replace(".", "").replace(",", "."))
        ],
        backgroundColor: [ThemeColor.primaria, ThemeColor.secundaria, '#045469'],
        borderColor: [ThemeColor.primaria, ThemeColor.secundaria, '#045469'],
        borderWidth: 1,
        borderRadius: 100,
        spacing: 2
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
          padding: 20
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
          },
        },
      },
    },
    onHover: (event: any, elements: any, chart: any) => {
      if (!chart) return;
      const customOptions = chart.options as CustomChartOptions;
      if (elements.length > 0) {
        const hoveredElementIndex = elements[0].index;
        const hoveredColor = Array.isArray(data.datasets[0].backgroundColor)
          ? data.datasets[0].backgroundColor[hoveredElementIndex]
          : data.datasets[0].backgroundColor;
    
        if (hoveredColor === ThemeColor.primaria) {
          customOptions.centerText = "TPV DEBITO";
          customOptions.centerValue = "R$ " + debit;
        } else if (hoveredColor === ThemeColor.secundaria) {
          customOptions.centerText = "TPV CREDITO";
          customOptions.centerValue = "R$ " + credit;
        } else if (hoveredColor === '#045469') {
          customOptions.centerText = "TPV PIX";
          customOptions.centerValue = "R$ " + pix;
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
