import { useState, useEffect } from 'react';
import * as S from './styled';

export interface RowData {
  id: string;
  cnpj: string;
  estabelecimento: string;
  licenciado: string;
  tpv: string;
  fornecedor: ('F1' | 'F2' | 'F3')[];
}

type SortField = 'id' | 'licenciado' | 'tpv' | 'estabelecimento';

interface TabelaProps {
  rows: RowData[];
}

export function Tabela({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('id');
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
    if (sortField === 'id') {
      return sortDirection === 'asc'
        ? a.id.localeCompare(b.id)
        : b.id.localeCompare(a.id);
    }  else if (sortField === 'licenciado') {
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


  function SortIndicator({
    direction
  }: {
    direction: 'asc' | 'desc' | undefined
  }) {
    return (
      <S.SortContainer>
        <S.SortArrow isActive={direction !== 'desc'}>▲</S.SortArrow>
        <S.SortArrow isActive={direction !== 'asc'}>▼</S.SortArrow>
      </S.SortContainer>
    )
  }

  const getDirectionForField = (field: SortField) => {
    return sortField === field ? sortDirection : undefined;
  }



  const handleViewMoreClick = (id: string) => {
    console.log(`ID da linha: ${id}`);
};



  useEffect(() => {
    handleSort('id');
  }, []);


  return (
    <S.Table>
          <thead>
        <tr>
          <S.TableHeader onClick={() => handleSort('id')}>
            Id
            <SortIndicator direction={getDirectionForField('id')} />
          </S.TableHeader>
          <S.TableHeader>CNPJ</S.TableHeader>
          <S.TableHeader onClick={() => handleSort('estabelecimento')}>
            Estabelecimento
            <SortIndicator direction={getDirectionForField('estabelecimento')} />
          </S.TableHeader>
          <S.TableHeader onClick={() => handleSort('licenciado')}>
            Licenciado
            <SortIndicator direction={getDirectionForField('licenciado')} />
          </S.TableHeader>
          <S.TableHeader onClick={() => handleSort('tpv')}>
            TPV
            <SortIndicator direction={getDirectionForField('tpv')} />
          </S.TableHeader>
          <S.TableHeader>Fornecedor</S.TableHeader>
          <S.TableHeader style={{ paddingLeft: '28px' }}>Ver mais</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.id}</S.TableData>
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
            <S.Button onClick={() => handleViewMoreClick(row.id)}>Visão Geral</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
