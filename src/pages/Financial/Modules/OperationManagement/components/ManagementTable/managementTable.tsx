import React, { useState } from 'react';
import * as S from './styled';
import { Transaction } from './interface';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { useTenantData } from '@/context';

type SortField = 'QtdTransações' | 'TPV' | 'Comissão' | 'Lucro' | 'Tarifas';

interface TabelaProps {
  rows: Transaction[];
}

export function ManagementTable({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('QtdTransações');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const tenantData = useTenantData();

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortableFields: SortField[] = ['QtdTransações', 'TPV', 'Comissão', 'Lucro', 'Tarifas'];

  const sortedRows = [...rows].sort((a, b) => {
    let comparison = 0;
    if (sortableFields.includes(sortField)) {
      const valueA = parseFloat(a[sortField]);
      const valueB = parseFloat(b[sortField]);
      comparison = valueA - valueB;
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const renderSortingArrows = (field: string) => {
    return sortableFields.includes(field as SortField) && (
      <S.SortContainer>
        <S.SortArrow isActive={sortField === field && sortDirection === 'asc'}>▲</S.SortArrow>
        <S.SortArrow isActive={sortField === field && sortDirection === 'desc'}>▼</S.SortArrow>
      </S.SortContainer>
    );
  };

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader>Documento</S.TableHeader>
          <S.TableHeader>Licenciado</S.TableHeader>
          <S.TableHeader>Fornecedor</S.TableHeader>
          {sortableFields.map(field => (
            <S.TableHeader key={field} style={{cursor: 'pointer'}} onClick={() => handleSort(field)}>
              {field}
              {renderSortingArrows(field)}
            </S.TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((transaction, index) => (
          <tr key={index}>
            <S.TableData>{transaction.Documento}</S.TableData>
            <S.TableData>{transaction.Licenciado}</S.TableData>
            <S.TableData>
              <S.FornecedorWrapper>
                <S.FornecedorItem>
                  {transaction.Fornecedor}
                </S.FornecedorItem>
              </S.FornecedorWrapper>
            </S.TableData>
            <S.TableData>{transaction.QtdTransações}</S.TableData>
            <S.TableData>{formatCurrencyBR(parseFloat(transaction.TPV))}</S.TableData>
            <S.TableData>{formatCurrencyBR(parseFloat(transaction.Comissão))}</S.TableData>
            <S.TableDataLucro  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>{formatCurrencyBR(parseFloat(transaction.Lucro))}</S.TableDataLucro>
            <S.TableData>{formatCurrencyBR(parseFloat(transaction.Tarifas))}</S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
