import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js/auto';

export function CustomChart({ dataMesAtual, dataMesSelecionado }: { dataMesAtual: number[]; dataMesSelecionado: number[] }) {
    const data = {
        labels: Array.from({ length: 30 }, (_, i) => i + 1),
        datasets: [
            {
                label: 'Mês Atual',
                data: dataMesAtual,
                backgroundColor: '#10104F',
                borderColor: '#10104F',
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: '#10104F',
            },
            {
                label: 'Mês Selecionado',
                data: dataMesSelecionado,
                backgroundColor: '#B2EAF8',
                borderColor: '#B2EAF8',
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: '#B2EAF8',
            }
        ],
    };

    const options: ChartOptions<'line'> = {
        scales: {
            x: {
                ticks: {
                    callback: function(tickValue, index, values) {
                        if (tickValue === 0) return '1';
                        if (index === 0 || index === values.length - 1 || [5, 10, 15, 20, 25].includes(Number(tickValue))) {
                            return tickValue.toString();
                        }
                        return '';
                    }
                },
                grid: {
                    drawOnChartArea: false,
                }
            },
            y: {
                suggestedMin: 50,
                suggestedMax: 250,
                ticks: {
                    stepSize: 50,
                },
                grid: {
                    drawOnChartArea: false,
                }
            }
        },
        plugins: {
            tooltip: {
                position: 'nearest',
                enabled: true,
                intersect: false,
                yAlign: 'bottom',
                backgroundColor: 'white',
                borderColor: '#E0E0E0',
                borderWidth: 1,
                titleColor: '#3C3C4399',
                titleFont: { size: 12 },
                bodyColor: '#0E0E47',
                bodyFont: { size: 18 },
                titleAlign: 'center',
                bodyAlign: 'center',
                caretPadding: 6,
                boxWidth: 0,
                boxHeight: 0,
                bodySpacing: 0,
                titleSpacing: 0,
                callbacks: {
                    title: function(items) {
                        const item = items[0];
                        return 'Dia ' + item.label;
                    },
                    label: function(tooltipItem) {
                        const value = tooltipItem.parsed.y;
                        return 'R$ ' + value.toFixed(2).replace('.', ',');
                    },
                    labelColor: function() {
                        return {
                            borderColor: 'transparent',
                            backgroundColor: 'transparent'
                        };
                    }
                }
            },
            legend: {
                display: false
            }
        }
    };

    return <Line data={data} options={options} />;
}
