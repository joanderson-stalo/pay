import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Bolinha, ContainerGrafico, ContainerText } from './styled';
import { ThemeColor } from '@/config/color';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface GraficoBarProps {
  hourly_transaction_totals: { [hour: string]: string };
}

const getFontSize = (): number => {
  if (window.innerWidth < 600) return 12;
  if (window.innerWidth < 900) return 12;
  if (window.innerWidth < 1100) return 12;
  return 14;
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
        borderColor: 'transparent'
      },
      borderColor: 'transparent',
      ticks: {
        display: true,
        font: {
          size: getFontSize(),
        }
      }
    },
    y: {
      grid: {
        display: false,
        drawBorder: false
      },
      borderColor: 'transparent',
      ticks: {
        display: true,
        stepSize: 10000000, // Ajuste conforme a necessidade
        drawBorder: false,
        font: {
          size: getFontSize(),
        },
        callback: (value: number) => {
          return 'R$ ' + value.toLocaleString('pt-BR');
        }
      },
      offset: true,
      beginAtZero: true,
      padding: {
        top: 5,
        bottom: 0
      },
    }
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    bar: {
      borderWidth: 1,
      borderRadius: {
        topLeft: 100,
        topRight: 100,
        bottomLeft: 0,
        bottomRight: 0,
      },
      borderSkipped: false,
    },
  },
};

export function GraficoBar({ hourly_transaction_totals }: GraficoBarProps) {
  // Transformando o objeto recebido em arrays de labels e dados
  const labels = Object.keys(hourly_transaction_totals).map(hour => `${hour}h`);
  const dataValues = Object.values(hourly_transaction_totals).map(value => parseFloat(value));

  const data = {
    labels,
    datasets: [
      {
        label: 'R$',
        data: dataValues,
        backgroundColor: ThemeColor.primaria,
        barThickness: 16,
        borderRadius: 100,
      },
    ],
  };

  return (
    <ContainerGrafico>
      <ContainerText>
        <Bolinha />
        <p>Comissões por Hora</p>
      </ContainerText>
      <Bar options={options} data={data}/>
    </ContainerGrafico>
  );
}
