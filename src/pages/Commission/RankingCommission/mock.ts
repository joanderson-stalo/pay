import { RowData } from "./components/TabelaRankingCommission/tabelaDailyCommission";

export const mockData: RowData[] = [
  {
    id: 1,
    posicao: '1',
    nome: 'John Doe',
    papel: 'LA1',
    comissao_total: 100.05,
    tpv_total: 1000.50,
    fornecedor: ['F1']
  },
  {
    id: 2,
    posicao: '2',
    nome: 'Jane Smith',
    papel: 'EC',
    comissao_total: 150.50,
    tpv_total: 2000.00,
    fornecedor: ['F2', 'F3']
  },
  {
    id: 3,
    posicao: '3',
    nome: 'Alice Johnson',
    papel: 'LA1',
    comissao_total: 125.60,
    tpv_total: 1500.75,
    fornecedor: ['F1', 'F3']
  },
  {
    id: 4,
    posicao: '4',
    nome: 'Bob White',
    papel: 'LA1',
    comissao_total: 140.25,
    tpv_total: 1750.30,
    fornecedor: ['F2']
  }
];
