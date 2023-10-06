import { useState } from 'react';
import * as S from './styled';

export interface RowData {
  id: number;
  nome: string;
  posicao: string,
  papel: string;
  comissao_total: number;
  tpv_total: number;
  fornecedor: ('F1' | 'F2' | 'F3')[];
}

type SortField = 'comissao_total' | 'tpv_total' | 'posicao';

interface TabelaProps {
  rows: RowData[];
}

export function TabelaDailyCommission({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('posicao');
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
      case 'comissao_total':
      case 'tpv_total':
        comparison = a[sortField] - b[sortField];
        break;
      case 'posicao':
        comparison = a[sortField].localeCompare(b[sortField]);
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
          <S.TableHeader onClick={() => handleSort('posicao')}>Posição<SortIndicator direction={getDirectionForField('posicao')} /></S.TableHeader>
          <S.TableHeader>Nome</S.TableHeader>
          <S.TableHeader>Papel</S.TableHeader>
          <S.TableHeader onClick={() => handleSort('comissao_total')}>Comissão Total<SortIndicator direction={getDirectionForField('comissao_total')} /></S.TableHeader>
          <S.TableHeader onClick={() => handleSort('tpv_total')}>TPV Total<SortIndicator direction={getDirectionForField('tpv_total')} /></S.TableHeader>
          <S.TableHeader>Fornecedor</S.TableHeader>
          <S.TableHeader>Ver dados</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.posicao} °</S.TableData>
            <S.TableData>{row.nome}</S.TableData>
            <S.PapelData>
                <S.PapelText>{row.papel}</S.PapelText>
              </S.PapelData>
            <S.TableData>R$ {row.comissao_total}</S.TableData>
            <S.TableData>R$ {row.tpv_total}</S.TableData>
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
