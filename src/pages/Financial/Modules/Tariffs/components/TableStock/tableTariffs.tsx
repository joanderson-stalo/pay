import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';

export interface RowData {
  id: number;
  data: string;
  estabelecimento: string;
  licenciado: string;
  serial: number | string;
  valor: string;
  tipo: string;
  comentarios: string;
}

type SortField = 'data' | 'estabelecimento' | 'licenciado' | 'valor';

interface TabelaProps {
  rows: RowData[];
}

export function TableTariffs({ rows }: TabelaProps) {
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
      case 'estabelecimento':
        comparison = a.estabelecimento.localeCompare(b.estabelecimento);
        break;
      case 'licenciado':
        comparison = a.licenciado.localeCompare(b.licenciado);
        break;
      case 'valor':
        comparison = parseFloat(a.valor) - parseFloat(b.valor);
        break;
      default:
        break;
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
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('estabelecimento')}>
            Estabelecimento
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'estabelecimento' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'estabelecimento' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('licenciado')}>
            Licenciado
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'licenciado' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'licenciado' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader>Serial</S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('valor')}>
            Valor
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'valor' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'valor' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader>Tipo</S.TableHeader>
          <S.TableHeader>Comentários</S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{formatDateBR(row.data)}</S.TableData>
            <S.TableData>{row.estabelecimento}</S.TableData>
            <S.TableData>{row.licenciado}</S.TableData>
            <S.TableData>{row.serial}</S.TableData>
            <S.CustomTableHeader tipo={row.tipo} >{formatCurrencyBR(Number(row.valor))}</S.CustomTableHeader >
            <S.TableData>{row.tipo}</S.TableData>
            <S.CommentTableData>{row.comentarios}</S.CommentTableData>
            <S.TableData>
              <S.Button onClick={() => false}>Editar</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
