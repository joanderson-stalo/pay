import { Transaction } from './components/OperationManagementTable/interface';

export const mockRows: Transaction[] = [
  {
    id: 1,
    fornecedor: 'F1',
    qtdTransacoes: 120,
    tpv: '90000,00',
    aReceber: '20000,00',
    aPagar: '15000,00',
    lucro: '5000,00',
  },
  {
    id: 2,
    fornecedor: 'F2',
    qtdTransacoes: 95,
    tpv: '90000,00',
    aReceber: '18000,00',
    aPagar: '12000,00',
    lucro: '6000,00',
  },
  {
    id: 3,
    fornecedor: 'F3',
    qtdTransacoes: 110,
    tpv: '90000,00',
    aReceber: '220000,00',
    aPagar: '17000,00',
    lucro: '5000,00',
  }
];
