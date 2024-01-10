import { useState, useEffect } from 'react';
import * as S from './styled';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';


export interface RowData {
  id: number;
  cadastro: string;
  serial: number | string;
  modelo: string;
  fornecedor: string;
  funcionamento: string;
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
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={handleSort}>
            Cadastro
            <SortIndicator direction={sortDirection} />
          </S.TableHeader>
          <S.TableHeader>Serial</S.TableHeader>
          <S.TableHeader>Modelo</S.TableHeader>
          <S.TableHeader>Fornecedor</S.TableHeader>
          <S.TableHeader>Funcionamento</S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{formatDateBR(row.cadastro)}</S.TableData>
            <S.TableData>{row.serial}</S.TableData>
            <S.TableData>{row.modelo}</S.TableData>
            <S.TableData>{row.fornecedor}</S.TableData>
            <S.FuncionamentoTableData funcionamento={row.funcionamento.toLowerCase() as 'quebrado' | 'estável' | 'incompleto'}>
  {row.funcionamento}
</S.FuncionamentoTableData>

            <S.TableData>
              <S.Button onClick={() => false}>Ver POS</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}


