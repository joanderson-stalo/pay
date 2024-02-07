import React, { useState } from 'react';
import * as S from './styled';

export interface RowDataTickets {
  id: number;
  data: string;
  numero: number;
  titulo: string;
  estabelecimento: string;
  status: 'Em tratamento' | 'Finalizado';
  comentarios: string;
}

type SortField = 'data' | 'numero' | 'titulo' | 'estabelecimento' | 'status';

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
      case 'numero':
        comparison = a.numero - b.numero;
        break;
      case 'titulo':
        comparison = a.titulo.localeCompare(b.titulo);
        break;
      case 'estabelecimento':
        comparison = a.estabelecimento.localeCompare(b.estabelecimento);
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
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('numero')}>
            Número
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'numero' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'numero' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('titulo')}>
            Título
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'titulo' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'titulo' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('estabelecimento')}>
            Estabelecimento
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'estabelecimento' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'estabelecimento' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('status')}>
            Status
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'status' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'status' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader>Comentários</S.TableHeader>
          <S.TableHeader>Ação</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{formatDateBR(row.data)}</S.TableData>
            <S.TableData>{row.numero}</S.TableData>
            <S.TableData>{row.titulo}</S.TableData>
            <S.TableData>{row.estabelecimento}</S.TableData>
            <S.TableData>
          <S.StatusContainer>
            <S.StatusTableData status={row.status}>
              {row.status}
            </S.StatusTableData>
          </S.StatusContainer>
        </S.TableData>
            <S.CommentTableData>{row.comentarios}</S.CommentTableData>
            <S.TableData>
              <S.Button onClick={() => console.log(`Editar ${row.id}`)}>Editar</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
