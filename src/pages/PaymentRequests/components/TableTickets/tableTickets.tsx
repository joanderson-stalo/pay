import React, { useState } from 'react';
import * as S from './styled';

export interface RowDataTickets {
  id: number;
  data: string;
  observacoes: string;
  valor: number;
  status: 'Em análise' | 'Cancelado' | 'Concluído';
}

type SortField = 'data' | 'id' | 'observacoes' | 'valor' | 'status';

interface TabelaProps {
  rows: RowDataTickets[];
}

export function TableTickets({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('data');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  function formatDateBR(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
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
      case 'data':
        comparison = a.data.localeCompare(b.data);
        break;
      case 'id':
        comparison = a.id - b.id;
        break;
      case 'observacoes':
        comparison = a.observacoes.localeCompare(b.observacoes);
        break;
      case 'valor':
        comparison = a.valor - b.valor;
        break;
      case 'status':
        comparison = a.status.localeCompare(b.status);
        break;
      default:
        comparison = 0;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('data')}>
            Data
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'data' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'data' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('id')}>
            ID
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'id' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'id' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('observacoes')}>
            Observações
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'observacoes' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'observacoes' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('valor')}>
            Valor
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'valor' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'valor' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('status')}>
            Status
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'status' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'status' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader>Ação</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{formatDateBR(row.data)}</S.TableData>
            <S.TableData>{row.id}</S.TableData>
            <S.TableData>{row.observacoes}</S.TableData>
            <S.TableData>{row.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.TableData>
            <S.TableData>
              <S.StatusContainer>
                <S.StatusTableData status={row.status}>
                  {row.status}
                </S.StatusTableData>
              </S.StatusContainer>
            </S.TableData>
            <S.TableData>
              <S.Button onClick={() => console.log(`Editar ${row.id}`)}>Editar</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
