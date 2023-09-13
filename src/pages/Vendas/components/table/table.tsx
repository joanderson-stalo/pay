import { useState, useEffect } from 'react';
import * as S from './styled';
import pix from '@assets/bandeiras/pix.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import visa from '@assets/bandeiras/visa.svg';
import masterCard from '@assets/bandeiras/master.svg';

export interface Transaction {
  acquire_id: string;
  nsu_external: string;
  status: string;
  captured_in: string;
  amount: string;
  payment_type: string;
  brand: string;
}

type SortField = 'captured_in' | 'amount';

interface TabelaProps {
  rows: Transaction[];
}

export function TabelaVendas({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('captured_in');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  }

  const sortedRows = [...rows].sort((a, b) => {
    if (sortField === 'captured_in') {
      const dateA = new Date(a.captured_in).getTime();
      const dateB = new Date(b.captured_in).getTime();
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    } else if (sortField === 'amount') {
      const valorA = parseFloat(a.amount.replace(',', '.'));
      const valorB = parseFloat(b.amount.replace(',', '.'));
      return sortDirection === 'asc' ? valorA - valorB : valorB - valorA;
    }
    return 0;
  });

  const handleButtonClick = (id: string) => {
    console.log('Botão clicado para o ID:', id);
  }

  useEffect(() => {
    handleSort('captured_in');
  }, []);

  function SortIndicator({
    direction
  }: {
    direction: 'asc' | 'desc' | undefined;
  }) {
    return (
      <S.SortContainer>
        <S.SortArrow isActive={direction !== 'desc'}>▲</S.SortArrow>
        <S.SortArrow isActive={direction !== 'asc'}>▼</S.SortArrow>
      </S.SortContainer>
    );
  }

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader onClick={() => handleSort('captured_in')}>
            Data
            <SortIndicator
              direction={sortField === 'captured_in' ? sortDirection : undefined}
            />
          </S.TableHeader>
          <S.TableHeader>NSU</S.TableHeader>
          <S.TableHeader>Estabelecimento</S.TableHeader>
          <S.TableHeader>Forma de Pagamento</S.TableHeader>
          <S.TableHeader>Bandeira</S.TableHeader>
          <S.TableHeader onClick={() => handleSort('amount')}>
            Valor
            <SortIndicator
              direction={sortField === 'amount' ? sortDirection : undefined}
            />
          </S.TableHeader>
          <S.TableHeader>Status</S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((transaction, index) => {

          // Formatting amount with ',' as decimal separator
          const formattedAmount = transaction.amount.replace('.', ',');

          // Extracting date and time from 'captured_in' field
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
              <S.TableData>Bruno</S.TableData>
              <S.FormaPagamentoData>
                <S.FormaPagamentoText>{transaction.payment_type}</S.FormaPagamentoText>
              </S.FormaPagamentoData>
              <S.TableData>
                <S.FlagContainer>
                  <img
                    src={
                      transaction.brand === 'Visa' ? visa :
                      transaction.brand === 'Elo' ? elo :
                      transaction.brand === 'MasterCard' ? masterCard :
                      transaction.brand === 'Maestro' ? maestro :
                      transaction.brand === 'Pix' ? pix : undefined
                    }
                    alt={transaction.brand}
                  />
                  <p> {transaction.brand}</p>
                </S.FlagContainer>
              </S.TableData>
              <S.TableData>R$ {formattedAmount}</S.TableData>
              <S.StatusData>
                <S.StatusText status={transaction.status}>
                  {transaction.status === 'succeeded' ? 'SUCESSO' : 'FALHA'}
                </S.StatusText>
              </S.StatusData>
              <S.TableData>
                <S.Button onClick={() => handleButtonClick(transaction.acquire_id)}>
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
