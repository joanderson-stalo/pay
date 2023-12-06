import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Bolinha, ContainerGrafico, ContainerText } from './styled';
import { ThemeColor } from '@/config/color';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const getFontSize = () => {
  if (window.innerWidth < 600) return 8;
  if (window.innerWidth < 900) return 10;
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
        stepSize: 25,
        drawBorder: false,
        font: {
          size: getFontSize(),
        },
        callback: (value) => {
          if (value === 0) {
            return value;
          } else {
            return 'R$ ' + value;
          }
        }
      },
      offset: true,
      beginAtZero: false,
      padding: {
        top: 5,
        bottom: 0
      },
      max: 100
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

const labels = ['08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h'];

export function GraficoBar({ dataArray }) {
  const data = {
    labels,
    datasets: [
      {
        label: 'R$',
        data: dataArray.map(Number),
        backgroundColor: `${ThemeColor.primaria}`,
        barThickness:  16,
        borderRadius: 100,
      },
    ],
  };

  return (
    <ContainerGrafico>
      <ContainerText>
        <Bolinha />
        <p>Comissões</p>
      </ContainerText>
      <Bar options={options} data={data}/>
    </ContainerGrafico>
  );
}
