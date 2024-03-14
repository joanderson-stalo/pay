import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

import { Totals, Transaction } from './interface';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { useTransactionVendas } from '@/context/useTransaction';
import { useTenantData } from '@/context';


type SortField = 'meta' | 'tpv' | 'gap' | 'comissao';

interface TabelaProps {
  rows: Transaction[];
  totals: Totals;
}

export function SalesSummaryTable({ rows, totals }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('meta');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const navigate = useNavigate();
  const { setSelectedTransactionId } = useTransactionVendas();

  const handleSort = (field: SortField) => {
    setSortDirection(field === sortField && sortDirection === 'asc' ? 'desc' : 'asc');
    setSortField(field);
  };

  const sortedRows = [...rows].sort((a, b) => {
    let comparison = 0;
    let valorA, valorB;
    switch (sortField) {
      case 'meta':
        valorA = parseFloat(a.meta.replace(',', '.'));
        valorB = parseFloat(b.meta.replace(',', '.'));
        comparison = valorA - valorB;
        break;
      case 'tpv':
        valorA = parseFloat(a.tpv.replace(',', '.'));
        valorB = parseFloat(b.tpv.replace(',', '.'));
        comparison = valorA - valorB;
        break;
      case 'gap':
        valorA = parseFloat(a.gap.replace(',', '.'));
        valorB = parseFloat(b.gap.replace(',', '.'));
        comparison = valorA - valorB;
        break;
      case 'comissao':
        valorA = parseFloat(a.comissao.replace(',', '.'));
        valorB = parseFloat(b.comissao.replace(',', '.'));
        comparison = valorA - valorB;
        break;
      default:
        break;
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  useEffect(() => {
    handleSort('meta');
  }, []);

  function SortIndicator({ isActive }: { isActive: boolean }) {
    return (
      <S.SortContainer>
        <S.SortArrow isActive={isActive && sortDirection === 'asc'}>▲</S.SortArrow>
        <S.SortArrow isActive={isActive && sortDirection === 'desc'}>▼</S.SortArrow>
      </S.SortContainer>
    );
  }

  const tenantData = useTenantData();

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader>Fornecedor</S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('meta')}>
            Meta
            <SortIndicator isActive={sortField === 'meta'} />
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('tpv')}>
            TPV
            <SortIndicator isActive={sortField === 'tpv'} />
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('gap')}>
            GAP
            <SortIndicator isActive={sortField === 'gap'} />
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('comissao')}>
            Comissão
            <SortIndicator isActive={sortField === 'comissao'} />
          </S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((transaction, index) => (
          <tr key={index}>
            <S.TableData>{transaction.fornecedor}</S.TableData>
            <S.TableData>{formatCurrencyBR(parseFloat(transaction.meta))}</S.TableData>
            <S.TableData>{formatCurrencyBR(parseFloat(transaction.tpv))}</S.TableData>
            <S.TableData>{formatCurrencyBR(parseFloat(transaction.gap))}</S.TableData>
            <S.TableData>{formatCurrencyBR(parseFloat(transaction.comissao))}</S.TableData>
          </tr>
        ))}
      </tbody>
      <tfoot>
      <S.TableFooterRow  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
     <S.TableDataWhite>TOTAL</S.TableDataWhite>
          <S.TableDataWhite>{formatCurrencyBR(parseFloat(totals.meta))}</S.TableDataWhite>
          <S.TableDataWhite>{formatCurrencyBR(parseFloat(totals.tpv))}</S.TableDataWhite>
          <S.TableDataWhite>{formatCurrencyBR(parseFloat(totals.gap))}</S.TableDataWhite>
          <S.TableDataWhite>{formatCurrencyBR(parseFloat(totals.comissao))}</S.TableDataWhite>
        </S.TableFooterRow>
      </tfoot>
    </S.Table>
  );
}
