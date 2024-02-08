import { useState } from 'react';
import * as S from './styled';

export interface RowData {
  id: number;
  data: string;
  licenciado: string;
  transacoes: number;
  tpv: number;
  comissao: number;
  fornecedor: 'F1' | 'F2' | 'F3';
}

type SortField = 'data' | 'licenciado' | 'transacoes' | 'tpv' | 'comissao';

interface TabelaProps {
  rows: RowData[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatToBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function SortIndicator({ direction }: { direction: 'asc' | 'desc' | undefined }) {
  return (
    <S.SortContainer>
      <S.SortArrow isActive={direction !== 'asc'}>▲</S.SortArrow>
      <S.SortArrow isActive={direction !== 'desc'}>▼</S.SortArrow>
    </S.SortContainer>
  );
}

export function TabelaToDayCommission({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('data');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getDirectionForField = (field: SortField) => sortField === field ? sortDirection : undefined;

  const sortedRows = [...rows].sort((a, b) => {
    let comparison = 0;
    switch (sortField) {
      case 'data':
        comparison = new Date(a.data).getTime() - new Date(b.data).getTime();
        break;
      case 'licenciado':
        comparison = a.licenciado.localeCompare(b.licenciado);
        break;
      case 'transacoes':
      case 'tpv':
      case 'comissao':
        comparison = a[sortField] - b[sortField];
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
          <S.TableHeader onClick={() => handleSort('data')}>Data<SortIndicator direction={getDirectionForField('data')} /></S.TableHeader>
          <S.TableHeader onClick={() => handleSort('licenciado')}>Licenciado<SortIndicator direction={getDirectionForField('licenciado')} /></S.TableHeader>
          <S.TableHeader onClick={() => handleSort('transacoes')}>Transações<SortIndicator direction={getDirectionForField('transacoes')} /></S.TableHeader>
          <S.TableHeader onClick={() => handleSort('tpv')}>TPV<SortIndicator direction={getDirectionForField('tpv')} /></S.TableHeader>
          <S.TableHeader onClick={() => handleSort('comissao')}>Comissão<SortIndicator direction={getDirectionForField('comissao')} /></S.TableHeader>
          <S.TableHeader>Fornecedor</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row) => (
          <tr key={row.id}>
            <S.TableData>{formatDate(row.data)}</S.TableData>
            <S.TableData>{row.licenciado}</S.TableData>
            <S.TableData>{row.transacoes}</S.TableData>
            <S.TableData>{formatToBRL(row.tpv)}</S.TableData>
            <S.TableData>{formatToBRL(row.comissao)}</S.TableData>
            <S.TableData>
              <S.FornecedorWrapper>
                <S.FornecedorItem fornecedor={row.fornecedor}>
                  {row.fornecedor}
                </S.FornecedorItem>
              </S.FornecedorWrapper>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
