import { Totals, Transaction } from './components/salesSummaryTable/interface';

export const mockRows: Transaction[] = [
  {
    id: 1,
    fornecedor: 'F1',
    meta: '85000,00',
    tpv: '90000,00',
    gap: '5000,00',
    comissao: '6.000,00'
  },
  {
    id: 2,
    fornecedor: 'F2',
    meta: '85000,00',
    tpv: '90000,00',
    gap: '5000,00',
    comissao: '4.000,00'
  },
  {
    id: 3,
    fornecedor: 'F3',
    meta: '85000,00',
    tpv: '90000,00',
    gap: '5000,00',
    comissao: '7000,00'
  }
];


export const mockTotals: Totals = {
  meta: '210000.00',
  tpv: '218000.00',
  gap: '5000.00',
  comissao: '17000.00'
};
