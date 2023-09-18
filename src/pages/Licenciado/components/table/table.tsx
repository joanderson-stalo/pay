import { useState, useEffect } from 'react';
import * as S from './styled';

export interface RowData {
  id: number;
  cnpj_cpf: string;
  company_name: string;
  type: string;
  tpv: number;
  commission: string;
  ec_count: number;
  network_index: number | null;
}


type SortField = 'company_name' | 'type' | 'ec_count' | 'commission' | 'tpv';

interface TabelaProps {
  rows: RowData[];
}


export function Tabela({ rows }: TabelaProps) {

  const [sortField, setSortField] = useState<SortField>('company_name');
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
    switch (sortField) {
      case 'company_name':
        return sortDirection === 'asc'
          ? a.company_name.localeCompare(b.company_name)
          : b.company_name.localeCompare(a.company_name);
      case 'tpv':
        return sortDirection === 'asc' ? a.tpv - b.tpv : b.tpv - a.tpv;
      case 'type':
        const typeA = a.type + a.network_index;
        const typeB = b.type + b.network_index;
        return sortDirection === 'asc'
          ? typeA.localeCompare(typeB)
          : typeB.localeCompare(typeA);
      case 'ec_count':
      case 'commission':
        const numA = parseFloat(a[sortField].toString().replace(',', '.'));
        const numB = parseFloat(b[sortField].toString().replace(',', '.'));
        return sortDirection === 'asc' ? numA - numB : numB - numA;
      default:
        return 0;
    }
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
    );
  }

  const getDirectionForField = (field: SortField) => {
    return sortField === field ? sortDirection : undefined;
  }

  const handleViewMoreClick = (id: string) => {
    console.log(`ID da linha: ${id}`);
  };

  useEffect(() => {
    handleSort('company_name');
}, []);

  return (
    <S.Table>
         <thead>
      <tr>
        <S.TableHeader>Id</S.TableHeader>
        <S.TableHeader>CPF/CNPJ</S.TableHeader>
        <S.TableHeader onClick={() => handleSort('company_name')}>
          Nome
          <SortIndicator direction={getDirectionForField('company_name')} />
        </S.TableHeader>
        <S.TableHeader onClick={() => handleSort('type')}> {/* Assumindo que 'nivel' se refere a 'type' */}
          Nível
          <SortIndicator direction={getDirectionForField('type')} />
        </S.TableHeader>
        <S.TableHeader onClick={() => handleSort('ec_count')}>
          Estabelecimentos
          <SortIndicator direction={getDirectionForField('ec_count')} />
        </S.TableHeader>
        <S.TableHeader onClick={() => handleSort('commission')}>
          Comissão
          <SortIndicator direction={getDirectionForField('commission')} />
        </S.TableHeader>
        <S.TableHeader onClick={() => handleSort('tpv')}>
          TPV
          <SortIndicator direction={getDirectionForField('tpv')} />
        </S.TableHeader>
        <S.TableHeader style={{ paddingLeft: '28px' }}>Ver mais</S.TableHeader>
      </tr>
    </thead>
      <tbody>
  {sortedRows.map((seller, index) => (
    <tr key={index}>
      <S.TableData>{seller.id}</S.TableData>
      <S.TableData>{seller.cnpj_cpf}</S.TableData>
      <S.TableData>{seller.company_name}</S.TableData>
      <S.TableData>{seller.type} {seller.network_index}</S.TableData>
      <S.TableData>{seller.ec_count}</S.TableData>
      <S.TableData>R$ {seller.commission}</S.TableData>
      <S.TableData>R$ {seller.tpv}</S.TableData>
      <S.TableData>
        <S.Button onClick={() => handleViewMoreClick(seller.id.toString())}>Dados</S.Button>
      </S.TableData>
    </tr>
  ))}
</tbody>

    </S.Table>
  );
}
