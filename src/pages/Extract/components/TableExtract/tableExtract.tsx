import React, { useState } from 'react';
import * as S from './styled';

export interface RowDataTickets {
  id: number;
  data: string;
  titulo: string;
  valor: number;
  tipo: 'Entrada' | 'Saída';
}

type SortField = 'data' | 'titulo' | 'valor' | 'tipo';

interface TabelaProps {
  rows: RowDataTickets[];
}

export function TableExtract({ rows }: TabelaProps) {
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
      case 'titulo':
        comparison = a.titulo.localeCompare(b.titulo);
        break;
      case 'valor':
        comparison = a.valor - b.valor;
        break;
      case 'tipo':
        comparison = a.tipo.localeCompare(b.tipo);
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
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('titulo')}>
            Título
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'titulo' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'titulo' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('valor')}>
            Valor
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'valor' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'valor' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('tipo')}>
            Tipo
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'tipo' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'tipo' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
  {sortedRows.map((row, index) => (
    <tr key={index}>
      <S.TableData>{formatDateBR(row.data)}</S.TableData>
      <S.TableData>{row.titulo}</S.TableData>
      <S.TableData>{row.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.TableData>
      <S.TableData>
        <S.TipoContainer>
          <S.TipoTableData tipo={row.tipo}>{row.tipo}</S.TipoTableData>
        </S.TipoContainer>
      </S.TableData>
      <S.TableData>
        <S.Button onClick={() => console.log(`Editar ${row.id}`)}>Visualizar</S.Button>
      </S.TableData>
    </tr>
  ))}
</tbody>
    </S.Table>
  );
}
