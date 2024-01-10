import { Transaction } from "./components/ManagementTable/interface";

export const mockRowsMock: Transaction[] = [
  {
    id: '1',
    Documento: '123456789',
    Licenciado: 'Licenciado A',
    Fornecedor: 'F1',
    QtdTransações: '120',
    TPV: '90000,00',
    Comissão: '1000,00',
    Lucro: '5000,00',
    Tarifas: '500,00'
  },
  {
    id: '2',
    Documento: '987654321',
    Licenciado: 'Licenciado B',
    Fornecedor: 'F2',
    QtdTransações: '95',
    TPV: '85000,00',
    Comissão: '850,00',
    Lucro: '6000,00',
    Tarifas: '450,00'
  },
  {
    id: '3',
    Documento: '456123789',
    Licenciado: 'Licenciado C',
    Fornecedor: 'F3',
    QtdTransações: '110',
    TPV: '92000,00',
    Comissão: '1100,00',
    Lucro: '5000,00',
    Tarifas: '550,00'
  }
];
