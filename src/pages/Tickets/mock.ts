import { RowDataTickets } from "./components/TableTickets/tableTickets";


export const mockDataTable: RowDataTickets[] = [
  {
    id: 1,
    data: '2023-01-01',
    numero: 101,
    titulo: 'Título 1',
    estabelecimento: 'Estabelecimento 1',
    status: 'Em tratamento',
    comentarios: 'Comentário sobre o item 1'
  },
  {
    id: 2,
    data: '2023-01-02',
    numero: 102,
    titulo: 'Título 2',
    estabelecimento: 'Estabelecimento 2',
    status: 'Finalizado',
    comentarios: 'Comentário sobre o item 2'
  },
  {
    id: 3,
    data: '2023-01-03',
    numero: 103,
    titulo: 'Título 3',
    estabelecimento: 'Estabelecimento 3',
    status: 'Em tratamento',
    comentarios: 'Comentário sobre o item 3'
  }
];
