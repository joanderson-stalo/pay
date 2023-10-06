import { useState } from 'react';
import * as S from './styled';

export interface RowData {
  id: number;
  nome: string;
  descricao: string;
  tipo: 'Base' | 'Base+Base' | 'Comercial';
}

type SortField = 'nome' | 'descricao' | 'tipo';

interface TabelaProps {
  rows: RowData[];
}

export function TabelaDailyCommission({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('nome');
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
      case 'nome':
      case 'descricao':
      case 'tipo':
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
          <S.TableHeader onClick={() => handleSort('nome')}>Nome</S.TableHeader>
          <S.TableHeader onClick={() => handleSort('descricao')}>Descrição</S.TableHeader>
          <S.TableHeader onClick={() => handleSort('tipo')}>Tipo</S.TableHeader>
          <S.TableHeader></S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.nome}</S.TableData>
            <S.TableData>{row.descricao}</S.TableData>
            <S.PapelData>
            <S.PapelText type={row.tipo}>{row.tipo}</S.PapelText>
              </S.PapelData>
            <S.TableData>
              <S.ButtonEditar onClick={() => handleViewMoreClick(row.id.toString())}>Editar</S.ButtonEditar>
            </S.TableData>
            <S.TableData>
              <S.ButtonRemover onClick={() => handleViewMoreClick(row.id.toString())}>Remover</S.ButtonRemover>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
