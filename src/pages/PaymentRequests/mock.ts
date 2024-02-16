import { RowDataTickets } from "./components/TableTickets/tableTickets";

export const mockDataTable: RowDataTickets[] = [
  {
    id: 1,
    data: '2023-01-01',
    observacoes: 'Observação sobre o item 1',
    valor: 100.00,
    status: 'Em análise' 
  },
  {
    id: 2,
    data: '2023-01-02',
    observacoes: 'Observação sobre o item 2',
    valor: 200.50,
    status: 'Cancelado'
  },
  {
    id: 3,
    data: '2023-01-03',
    observacoes: 'Observação sobre o item 3',
    valor: 300.75,
    status: 'Concluído'
  }
];
