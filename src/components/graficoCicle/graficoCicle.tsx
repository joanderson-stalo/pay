import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { ContainerGrafico } from './styled';

const centerTextPlugin = {
  id: 'custom_center_text_plugin',
  beforeDraw: (chart: { config: { options: { centerText: string; centerValue: any; }; }; width: any; height: any; ctx: any; }) => {
    if (chart.config.options.centerText && chart.config.options.centerValue) {
      const width = chart.width,
        height = chart.height,
        ctx = chart.ctx;

      ctx.restore();

      // Para o valor
      let fontSize = 24.293;
      ctx.font = `700 ${fontSize}px sans-serif`;
      ctx.fillStyle = "#383838";
      ctx.textBaseline = "middle";

      let text = "R$ " + (chart.config.options.centerValue),
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2 - 10;

      ctx.fillText(text, textX, textY);

      // Para o texto "TPV TOTAL", "TPV DEBITO", "TPV CREDITO"
      fontSize = 14;
      ctx.font = `700 ${fontSize}px sans-serif`;
      ctx.fillStyle = "#383838";

      text = chart.config.options.centerText;
      textX = Math.round((width - ctx.measureText(text).width) / 2);
      textY = height / 2 + 20;

      ctx.fillText(text, textX, textY);

      ctx.save();
    }
  },
};


Chart.register(centerTextPlugin);

interface AppProps {
  debit: string;
  credit: string;
}
export function GraficoCicle({ debit, credit }: AppProps) {
  const total = parseFloat(debit.replace(".", "").replace(",", ".")) + parseFloat(credit.replace(".", "").replace(",", "."));
  const totalStr = total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  const data = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [parseFloat(debit.replace(".", "").replace(",", ".")), parseFloat(credit.replace(".", "").replace(",", "."))],
        backgroundColor: ['#10104F', '#08BBE9'],
        borderColor: ['#10104F', '#08BBE9'],
        borderWidth: 1,
        borderRadius: 100,
        spacing: 5
      },
    ],
  };

  const options = {
    cutout: '80%',
    centerText: "TPV TOTAL",
    centerValue: totalStr,

    onHover: (event: any, elements: string | any[], chart: any) => {
      if (elements.length > 0) {
        const hoveredElementIndex = elements[0].index;
        const hoveredColor = data.datasets[0].backgroundColor[hoveredElementIndex];
        if (hoveredColor === '#10104F') {
          chart.options.centerText = "TPV DEBITO";
          chart.options.centerValue = debit;
        } else if (hoveredColor === '#08BBE9') {
          chart.options.centerText = "TPV CREDITO";
          chart.options.centerValue = credit;
        }
      } else {
        chart.options.centerText = "TPV TOTAL";
        chart.options.centerValue = totalStr;
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
