import { useState } from 'react';
import * as S from './styled';
import { checkEmpty } from '@/utils/checkEmpty';
import { useTicketID } from '@/context/id/ticketId';
import { useNavigate } from 'react-router-dom';

export interface RowDataTickets {
  id: number;
  created_at: string;
  number: string;
  title: string;
  seller_name: string;
  final_evaluation: string;
  status: string;
}

type SortField = keyof RowDataTickets;

interface TabelaProps {
  rows: RowDataTickets[];
}

export function TableTickets({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const { setSelectedTicketID } = useTicketID();
  const navigate = useNavigate();

  function formatDateBR(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  function translateStatus(status: string) {
    switch (status) {
      case 'created':
        return 'Criado';
      case 'in processing':
        return 'Em Processamento';
      case 'finish':
        return 'Finalizado';
      default:
        return status; // retorna o status original se não for um dos casos acima
    }
  }

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    let comparison = 0;
    switch (sortField) {
      case 'created_at':
        comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        break;
      case 'number':
        comparison = Number(a.number) - Number(b.number);
        break;
      case 'title':
        comparison = a.title.localeCompare(b.title);
        break;
      case 'seller_name':
        comparison = (a.seller_name || "").localeCompare(b.seller_name || "");
        break;
      default:
        comparison = 0;
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const handleViewMoreClick = async (id: string) => {
    setSelectedTicketID(id);
    await new Promise(resolve => setTimeout(resolve, 20));
    navigate(`/tickets-view`);
  };

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('created_at')}>
            Data
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'created_at' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'created_at' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('number')}>
            Número
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'number' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'number' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('title')}>
            Título
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'title' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'title' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('seller_name')}>
            Estabelecimento
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'seller_name' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'seller_name' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>

          <S.TableHeader >
              Status

          </S.TableHeader>
          <S.TableHeader >


          </S.TableHeader>


          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{formatDateBR(row.created_at)}</S.TableData>
            <S.TableData>{checkEmpty(row.number)}</S.TableData>
            <S.TableData>{checkEmpty(row.title)}</S.TableData>
            <S.TableData>{checkEmpty(row.seller_name)}</S.TableData>
            <S.TableData>{checkEmpty(translateStatus(row.status))}</S.TableData>
            <S.TableData>
              <S.Button onClick={() => handleViewMoreClick(String(row.id))}>Visualizar</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
