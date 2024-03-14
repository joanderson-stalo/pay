import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Bolinha, ContainerGrafico, ContainerText } from './styled';
import { useSidebarVisibility } from '@/context/sidebarVisibilityContext';
import { useTenantData } from '@/context';

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
        stepSize: 100,
        drawBorder: false,
        font: {
          size: getFontSize(),
        },
        callback: (tickValue: string | number) => {
          const value = typeof tickValue === 'number' ? tickValue : parseFloat(tickValue);
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
  const { isVisible } = useSidebarVisibility();
  const tenantData = useTenantData();
  
  const sortedHours = Object.keys(hourly_transaction_totals).sort((a, b) => parseInt(a) - parseInt(b));
  
  const labels = sortedHours.map(hour => `${hour}h`);
  const dataValues = sortedHours.map(hour => parseFloat(hourly_transaction_totals[hour]));

  const data = {
    labels,
    datasets: [
      {
        label: 'R$',
        data: dataValues,
        backgroundColor: tenantData.primary_color_identity,
        barThickness: 16,
        borderRadius: 100,
      },
    ],
  };

  return (
    <ContainerGrafico isShow={isVisible}>
      <ContainerText>
        <Bolinha  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} />
        <p>TPV por Hora</p>
      </ContainerText>
      <Bar options={options} data={data}/>
    </ContainerGrafico>
  );
}
