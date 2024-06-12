import { useState } from 'react';
import * as S from './styled';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';

interface CommissionData {
  ec_seller_document: string;
  la_seller_trading_name: string;
  total_amount: string;
  commission_count: string;
  total_transaction_amount: string;
}

interface SellerCommissions {
  [fornecedor: string]: CommissionData;
}

interface ECCommissions {
  [sellerName: string]: SellerCommissions;
}

interface TabelaProps {
  commissions_by_EC: ECCommissions;
}

export function TabelaNetWordkCommission({ commissions_by_EC }: TabelaProps) {
  const [sortField, setSortField] = useState<'nome' | 'sellerName' | 'comissao_total' | 'tpv_total'>('nome');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: 'nome' | 'sellerName' | 'comissao_total' | 'tpv_total') => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedRows = Object.entries(commissions_by_EC).flatMap(([sellerName, sellerCommissions]) =>
    Object.entries(sellerCommissions).map(([fornecedor, commissionData]) => ({
      posicao: commissionData.ec_seller_document,
      nome: commissionData.la_seller_trading_name,
      comissao_total: parseFloat(commissionData.total_amount),
      tpv_total: parseFloat(commissionData.total_transaction_amount),
      fornecedor: fornecedor.split(','),
      commission_count: commissionData.commission_count,
      sellerName
    }))
  ).sort((a, b) => {
    let comparison = 0;

    switch (sortField) {
      case 'nome':
        comparison = (a.nome || '').localeCompare(b.nome || '');
        break;
      case 'sellerName':
        comparison = (a.sellerName || '').localeCompare(b.sellerName || '');
        break;
      case 'comissao_total':
        comparison = a.comissao_total - b.comissao_total;
        break;
      case 'tpv_total':
        comparison = a.tpv_total - b.tpv_total;
        break;
      default:
        return 0;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  function SortIndicator({ direction }: { direction: 'asc' | 'desc' | undefined }) {
    return (
      <S.SortContainer>
        <S.SortArrow isActive={direction === 'asc'}>▲</S.SortArrow>
        <S.SortArrow isActive={direction === 'desc'}>▼</S.SortArrow>
      </S.SortContainer>
    );
  }

  const getDirectionForField = (field: 'nome' | 'sellerName' | 'comissao_total' | 'tpv_total') => {
    return sortField === field ? sortDirection : undefined;
  };

  return (
    <S.Table>
      <thead>
        <tr>

          <S.TableHeader onClick={() => handleSort('sellerName')}>Estabelecimento<SortIndicator direction={getDirectionForField('sellerName')} /></S.TableHeader>
          <S.TableHeader>Fornecedor</S.TableHeader>
          <S.TableHeader onClick={() => handleSort('comissao_total')}>Valor da comissões<SortIndicator direction={getDirectionForField('comissao_total')} /></S.TableHeader>
          <S.TableHeader onClick={() => handleSort('tpv_total')}>Valor total <SortIndicator direction={getDirectionForField('tpv_total')} /></S.TableHeader>
          <S.TableHeader>Comissão</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.sellerName}</S.TableData>
            <S.TableData>
              <S.FornecedorWrapper>
                {row.fornecedor.map((fornecedor, idx) => (
                  <S.FornecedorItem  key={idx} >
                    {fornecedor}
                  </S.FornecedorItem>
                ))}
              </S.FornecedorWrapper>
            </S.TableData>
            <S.TableData>{formatCurrencyBR(row.comissao_total)}</S.TableData>
            <S.TableData>{formatCurrencyBR(row.tpv_total)}</S.TableData>
            <S.TableData>{row.commission_count}</S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
