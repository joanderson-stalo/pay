import { RowData } from "./components/TabelaDailyCommission/tabelaDailyCommission";


export const mockData: RowData[] = [
  {
    id: 1,
    data: '2023-09-19T13:54:41.000000Z',
    nsu: 'NSU001',
    nome: 'John Doe',
    papel: 'LA1',
    valor_da_venda: 1000.50,
    comissao: 100.05,
    fornecedor: ['F1']
  },
  {
    id: 2,
    data: '2023-09-21',
    nsu: 'NSU002',
    nome: 'Jane Smith',
    papel: 'EC',
    valor_da_venda: 2000.00,
    comissao: 150.50,
    fornecedor: ['F2', 'F3']
  },
  {
    id: 3,
    data: '2023-09-22',
    nsu: 'NSU003',
    nome: 'Alice Johnson',
    papel: 'LA1',
    valor_da_venda: 1500.75,
    comissao: 125.60,
    fornecedor: ['F1', 'F3']
  },
  {
    id: 4,
    data: '2023-09-23',
    nsu: 'NSU004',
    nome: 'Bob White',
    papel: 'LA1',
    valor_da_venda: 1750.30,
    comissao: 140.25,
    fornecedor: ['F2']
  }
];
