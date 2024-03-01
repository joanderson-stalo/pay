import { useState, useEffect } from 'react';
import * as S from './styled';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';

interface RowData {
  id: number;
  cadastro: string;
  serial_number: number | string;
  model: string;
  acquire: string;
  status: string;
}

interface TabelaProps {
  rows: RowData[];
}

export function TableStock({ rows }: TabelaProps) {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  function formatDateBR(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  const handleSort = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const sortedRows = [...rows].sort((a, b) => {
    let factor = sortDirection === 'asc' ? 1 : -1;
    return factor * a.cadastro.localeCompare(b.cadastro);
  });

  function SortIndicator({ direction }: { direction: 'asc' | 'desc' }) {
    return (
      <S.SortContainer>
        <S.SortArrow isActive={direction === 'asc'}>▲</S.SortArrow>
        <S.SortArrow isActive={direction === 'desc'}>▼</S.SortArrow>
      </S.SortContainer>
    );
  }

  useEffect(() => {
    handleSort();
  }, []);

  return (
    <S.Table>
      <thead>
        <tr>
        <S.TableHeader>Serial</S.TableHeader>
        <S.TableHeader>Modelo</S.TableHeader>
        <S.TableHeader>Estabelecimento</S.TableHeader>
        <S.TableHeader>Proprietário</S.TableHeader>


          <S.TableHeader>Fornecedor</S.TableHeader>
          <S.TableHeader>Funcionamento</S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.serial_number}</S.TableData>
            <S.TableData>{row.model}</S.TableData>
            <S.TableData></S.TableData>
            <S.TableData></S.TableData>


            <S.TableData><S.FornecedorStatus>{row.acquire}</S.FornecedorStatus></S.TableData>
            <S.TableData>{row.status.toLocaleLowerCase()}</S.TableData>
            <S.TableData>
              <S.Button onClick={() => false}>Ver POS</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
