import { useState, useEffect } from 'react';
import * as S from './styled';

export interface RowData {
  id: number;
  registration_date: string;
  cnpj_cpf: string;
  company_name: string;
  tpv: number;
  acquires: ('F1' | 'F2' | 'F3')[];
}


type SortField = 'id' | 'company_name' | 'tpv';

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
      return sortDirection === 'asc' ? a.id - b.id : b.id - a.id;
    } else if (sortField === 'company_name') {
      return sortDirection === 'asc'
        ? a.company_name.localeCompare(b.company_name)
        : b.company_name.localeCompare(a.company_name);
    } else if (sortField === 'tpv') {
      return sortDirection === 'asc' ? a.tpv - b.tpv : b.tpv - a.tpv;
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


  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');  // +1 because month is 0-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }



  return (
  <S.Table>
      <thead>
        <tr>
          <S.TableHeader onClick={() => handleSort('id')}>
            Id
            <SortIndicator direction={getDirectionForField('id')} />
          </S.TableHeader>
          <S.TableHeader>CNPJ/CPF</S.TableHeader>
          <S.TableHeader onClick={() => handleSort('company_name')}>
            Estabelecimento
            <SortIndicator direction={getDirectionForField('company_name')} />
          </S.TableHeader>
          <S.TableHeader>Data de Registro</S.TableHeader>
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
            <S.TableData>{row.cnpj_cpf}</S.TableData>
            <S.TableData>{row.company_name}</S.TableData>
            <S.TableData>{formatDate(row.registration_date)}</S.TableData>
            <S.TableData>R$ {row.tpv.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</S.TableData>
            <S.TableData>
              <S.FornecedorWrapper>
                {row.acquires.map((fornecedor, index) => (
                  <S.FornecedorItem key={index} fornecedor={fornecedor}>
                    {fornecedor}
                  </S.FornecedorItem>
                ))}
              </S.FornecedorWrapper>
            </S.TableData>
            <S.TableData>
            <S.Button onClick={() => handleViewMoreClick(row.id.toString())}>Visão Geral</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
