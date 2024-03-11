import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { useTariff } from '@/context/useTariff';
import { useNavigate } from 'react-router-dom';

export interface RowData {
  id: number;
  reference_date: string;
  seller_name: string;
  responsible_seller_name: string;
  serial_terminal: number | string;
  amount: string;
  type: string;
  comment: string;
}

type SortField = 'reference_date' | 'seller_name' | 'responsible_seller_name' | 'amount';

interface TabelaProps {
  rows: RowData[];
}

export function TableTariffs({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('reference_date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const { setTariffId } = useTariff();
  const navigate = useNavigate()

  function formatDateBR(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

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
      case 'reference_date':
        comparison = a.reference_date.localeCompare(b.reference_date);
        break;
      case 'seller_name':
        comparison = a.seller_name.localeCompare(b.seller_name);
        break;
      case 'responsible_seller_name':
        comparison = a.responsible_seller_name.localeCompare(b.responsible_seller_name);
        break;
      case 'amount':
        comparison = parseFloat(a.amount) - parseFloat(b.amount);
        break;
      default:
        break;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });


  const handleViewMoreClick = async (id: string) => {
    setTariffId(id);
    await new Promise(resolve => setTimeout(resolve, 20));
    
    navigate(`/editRate`);
};

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('reference_date')}>
            Data
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'reference_date' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'reference_date' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('seller_name')}>
            Estabelecimento
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'seller_name' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'seller_name' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('responsible_seller_name')}>
            Licenciado
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'responsible_seller_name' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'responsible_seller_name' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader>Serial</S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('amount')}>
            Valor
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'amount' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'amount' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader>Tipo</S.TableHeader>
          <S.TableHeader>Comentários</S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{formatDateBR(row.reference_date)}</S.TableData>
            <S.TableData>{row.seller_name}</S.TableData>
            <S.TableData>{row.responsible_seller_name}</S.TableData>
            <S.TableData>{row.serial_terminal}</S.TableData>
            <S.CustomTableHeader>{formatCurrencyBR(Number(row.amount))}</S.CustomTableHeader >
            <S.TableData>{row.type}</S.TableData>
            <S.CommentTableData>{row.comment}</S.CommentTableData>
            <S.TableData>
              <S.Button onClick={() => handleViewMoreClick(row.id.toString())}>Editar</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
