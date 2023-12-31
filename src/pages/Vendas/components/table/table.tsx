import React, { useState, useEffect } from 'react';
import * as S from './styled';
import pix from '@assets/bandeiras/pix.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import visa from '@assets/bandeiras/visa.svg';
import masterCard from '@assets/bandeiras/master.svg';
import { Transaction } from './interface';
import { useNavigate } from 'react-router-dom';
import { useTransactionVendas } from '@/context/useVendas';

type SortField = 'captured_in' | 'amount';

interface TabelaProps {
  rows: Transaction[];
}

export function TabelaVendas({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('captured_in');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const navigate = useNavigate();
  const { setSelectedTransactionId } = useTransactionVendas();

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
      case 'captured_in':
        const dateA = new Date(a.captured_in);
        const dateB = new Date(b.captured_in);
        comparison = dateA.getTime() - dateB.getTime();
        break;
      case 'amount':
        const valorA = parseFloat(a.amount.replace(',', '.'));
        const valorB = parseFloat(b.amount.replace(',', '.'));
        comparison = valorA - valorB;
        break;
      default:
        break;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const handleButtonClick = (id: string) => {
    setSelectedTransactionId(id);
    navigate('/detalhe');
  };

  useEffect(() => {
    handleSort('captured_in');
  }, []);

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader style={{cursor: 'pointer'}}  onClick={() => handleSort('captured_in')}>
            Data
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'captured_in' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'captured_in' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader>NSU</S.TableHeader>
          <S.TableHeader>Estabelecimento</S.TableHeader>
          <S.TableHeader>Forma de Pagamento</S.TableHeader>
          <S.TableHeader>Bandeira</S.TableHeader>
          <S.TableHeader style={{cursor: 'pointer'}}  onClick={() => handleSort('amount')}>
            Valor
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'amount' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'amount' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader>Status</S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((transaction, index) => {
          const formattedAmount = transaction.amount.replace('.', ',');
          const capturedDate = new Date(transaction.captured_in);
          const formattedDate = capturedDate.toLocaleDateString('pt-BR');
          const formattedTime = capturedDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

          return (
            <tr key={index}>
              <S.TableData>
                {formattedDate} <br />
                {formattedTime}
              </S.TableData>
              <S.TableData>{transaction.nsu_external}</S.TableData>
              <S.TableData>{transaction.company_name}</S.TableData>
              <S.FormaPagamentoData>
                <S.FormaPagamentoText>{transaction.payment_type}</S.FormaPagamentoText>
              </S.FormaPagamentoData>
              <S.TableData>
                <S.FlagContainer>
                  <img
                    src={
                      transaction.brand === null && transaction.payment_type === 'Pix' ? pix :
                      transaction.brand === 'Visa' ? visa :
                      transaction.brand === 'Elo' ? elo :
                      transaction.brand === 'MasterCard' ? masterCard :
                      transaction.brand === 'Maestro' ? maestro :
                      transaction.brand === 'Pix' ? pix : undefined
                    }
                    alt={transaction.brand}
                  />
                  {transaction.brand === null && transaction.payment_type === 'Pix' ? <p>Pix</p> : <p>{transaction.brand}</p>}
                </S.FlagContainer>
              </S.TableData>
              <S.TableData>R$ {formattedAmount}</S.TableData>
              <S.StatusData>
                <S.StatusText status={transaction.status}>
                  {transaction.status === 'succeeded' ? 'SUCESSO' : 'FALHA'}
                </S.StatusText>
              </S.StatusData>
              <S.TableData>
                <S.Button onClick={() => handleButtonClick(transaction.id)}>
                  Visão Geral
                </S.Button>
              </S.TableData>
            </tr>
          );
        })}
      </tbody>
    </S.Table>
  );
}

