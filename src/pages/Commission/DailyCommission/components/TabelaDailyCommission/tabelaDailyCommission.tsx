import { useState } from 'react';
import * as S from './styled';

export interface RowData {
  id: number;
  data: string;  // Assumindo que este campo tem data e hora
  nsu: string;
  nome: string;
  papel: string;
  valor_da_venda: number;
  comissao: number;
  fornecedor: ('F1' | 'F2' | 'F3')[];
}

type SortField = 'data' | 'nome' | 'valor_da_venda' | 'comissao';

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

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
}

export function TabelaDailyCommission({ rows }: TabelaProps) {
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

  const sortedRows = [...rows].sort((a, b) => {
    let comparison = 0;

    switch (sortField) {
      case 'data':
        comparison = new Date(a.data).getTime() - new Date(b.data).getTime();
        break;
      case 'nome':
        comparison = a[sortField].localeCompare(b[sortField]);
        break;
      case 'valor_da_venda':
      case 'comissao':
        comparison = a[sortField] - b[sortField];
        break;
      default:
        return 0;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  function SortIndicator({ direction }: { direction: 'asc' | 'desc' | undefined }) {
    return (
      <S.SortContainer>
        <S.SortArrow isActive={direction !== 'asc'}>▲</S.SortArrow>
        <S.SortArrow isActive={direction !== 'desc'}>▼</S.SortArrow>
      </S.SortContainer>
    );
  }

  const getDirectionForField = (field: SortField) => {
    return sortField === field ? sortDirection : undefined;
  }

  const handleViewMoreClick = (id: string) => {
    console.log(`View more for ID: ${id}`);
  };

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader onClick={() => handleSort('data')}>Data<SortIndicator direction={getDirectionForField('data')} /></S.TableHeader>
          <S.TableHeader>NSU</S.TableHeader>
          <S.TableHeader onClick={() => handleSort('nome')}>Nome<SortIndicator direction={getDirectionForField('nome')} /></S.TableHeader>
          <S.TableHeader>Papel</S.TableHeader>
          <S.TableHeader onClick={() => handleSort('valor_da_venda')}>Valor da Venda<SortIndicator direction={getDirectionForField('valor_da_venda')} /></S.TableHeader>
          <S.TableHeader onClick={() => handleSort('comissao')}>Comissão<SortIndicator direction={getDirectionForField('comissao')} /></S.TableHeader>
          <S.TableHeader>Fornecedor</S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>
              {formatDate(row.data)}
              <br />
              {formatTime(row.data)}
            </S.TableData>
            <S.TableData>{row.nsu}</S.TableData>
            <S.TableData>{row.nome}</S.TableData>
            <S.PapelData>
                <S.PapelText>{row.papel}</S.PapelText>
              </S.PapelData>
            <S.TableData>R$ {row.valor_da_venda}</S.TableData>
            <S.TableData>R$ {row.comissao}</S.TableData>
            <S.TableData>
              <S.FornecedorWrapper>
                {row.fornecedor.map((fornecedor, idx) => (
                  <S.FornecedorItem key={idx} fornecedor={fornecedor}>
                    {fornecedor}
                  </S.FornecedorItem>
                ))}
              </S.FornecedorWrapper>
            </S.TableData>
            <S.TableData>
              <S.Button onClick={() => handleViewMoreClick(row.id.toString())}>Ver Venda</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
