// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { Bolinha, ContainerGrafico, ContainerText } from './styled';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export const options = {
//   responsive: true,
//   scales: {
//     x: {
//       grid: {
//         display: false,
//         drawBorder: false,
//         drawOnChartArea: false,
//         drawTicks: false,
//         borderColor: 'transparent'
//       },
//       borderColor: 'transparent',
//       ticks: {
//         display: true,
//       }
//     },
//     y: {
//       grid: {
//         display: false,
//         drawBorder: false
//       },
//       borderColor: 'transparent',
//       ticks: {
//         display: true,
//         stepSize: 25,
//         drawBorder: false,
//         callback: (value: string | number) => {
//           if (value === 0) {
//             return value;
//           } else {
//             return 'R$ ' + value;
//           }
//         }
//       },
//       offset: true,
//       beginAtZero: false,
//       padding: {
//         top: 5,
//         bottom: 20
//       },
//       max: 100
//     }
//   },
//   plugins: {
//     legend: {
//       display: false,
//     },
//   },
//   elements: {
//     bar: {
//       borderWidth: 1,
//       borderRadius: {
//         topLeft: 100,
//         topRight: 100,
//         bottomLeft: 0,
//         bottomRight: 0,
//       },
//       borderSkipped: false,
//     },
//   },
// };

// const labels = ['08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h'];

// interface AppProps {
//   dataArray: string[];
// }

// export function GraficoBar({dataArray}: AppProps) {
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'R$',
//         data: dataArray.map(Number),  // Convertendo as strings para números
//         backgroundColor: '#10104F',
//         barThickness: 15,
//         borderRadius: 100,
//       },
//     ],
//   };

//   return (
//     <>
//       <ContainerGrafico>
//         <ContainerText>
//           <Bolinha />
//           <p>Comissões</p>
//         </ContainerText>
//         <Bar options={options} data={data} />
//       </ContainerGrafico>
//     </>
//   );
// }

