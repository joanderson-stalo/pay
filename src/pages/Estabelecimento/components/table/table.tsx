import { useState, useEffect } from 'react';
import * as S from './styled';
import up from '@assets/icons/arrow-up.svg';
import down from '@assets/icons/arrow-down.svg';

export interface RowData {
  dataInscricao: string;
  cnpj: string;
  estabelecimento: string;
  licenciado: string;
  tpv: string;
  fornecedor: ('F1' | 'F2' | 'F3')[];
}

type SortField = 'dataInscricao' | 'licenciado' | 'tpv' | 'estabelecimento';

interface TabelaProps {
  rows: RowData[];
}

export function Tabela({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('dataInscricao');
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
    if (sortField === 'dataInscricao') {
      const dateA = new Date(a.dataInscricao).getTime();
      const dateB = new Date(b.dataInscricao).getTime();

      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    } else if (sortField === 'licenciado') {
      return sortDirection === 'asc'
        ? a.licenciado.localeCompare(b.licenciado)
        : b.licenciado.localeCompare(a.licenciado);
    } else if (sortField === 'tpv') {
      const tpvA = parseFloat(a.tpv.replace(',', '.'));
      const tpvB = parseFloat(b.tpv.replace(',', '.'));

      return sortDirection === 'asc' ? tpvA - tpvB : tpvB - tpvA;
    } else if (sortField === 'estabelecimento') {
      return sortDirection === 'asc'
        ? a.estabelecimento.localeCompare(b.estabelecimento)
        : b.estabelecimento.localeCompare(a.estabelecimento);
    }

    return 0;
  });

  useEffect(() => {
    handleSort('dataInscricao');
  }, []);


  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader onClick={() => handleSort('dataInscricao')}>
            Data de Inscrição {sortDirection === 'asc' ? '↑' : '↓'}
          </S.TableHeader>
          <S.TableHeader>CNPJ</S.TableHeader>
          <S.TableHeader onClick={() => handleSort('estabelecimento')}>
            Estabelecimento {sortDirection === 'asc' ? '↑' : '↓'}
          </S.TableHeader>
          <S.TableHeader onClick={() => handleSort('licenciado')}>
            Licenciado {sortDirection === 'asc' ? '↑' : '↓'}
          </S.TableHeader>
          <S.TableHeader onClick={() => handleSort('tpv')}>
            TPV {sortDirection === 'asc' ? '↑' : '↓'}
          </S.TableHeader>
          <S.TableHeader>Fornecedor</S.TableHeader>
          <S.TableHeader style={{ paddingLeft: '28px' }}>Ação</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.dataInscricao}</S.TableData>
            <S.TableData>{row.cnpj}</S.TableData>
            <S.TableData>{row.estabelecimento}</S.TableData>
            <S.TableData>{row.licenciado}</S.TableData>
            <S.TableData>R$ {row.tpv}</S.TableData>
            <S.TableData>
              <S.FornecedorWrapper>
                {row.fornecedor.map((fornecedor, index) => (
                  <S.FornecedorItem key={index} fornecedor={fornecedor}>
                    {fornecedor}
                  </S.FornecedorItem>
                ))}
              </S.FornecedorWrapper>
            </S.TableData>
            <S.TableData>
              <S.Button>Dados</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
