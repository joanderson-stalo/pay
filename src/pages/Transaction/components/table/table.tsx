import React, { useState, useEffect } from 'react';
import * as S from './styled';
import pix from '@assets/bandeiras/pix.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import amex from '@assets/bandeiras/amex.svg'
import visa from '@assets/bandeiras/visa.svg';
import masterCard from '@assets/bandeiras/master.svg';
import hyper from '@assets/Card/hypers.svg'
import { ITransaction } from './interface';
import { useNavigate } from 'react-router-dom';
import { useTransactionVendas } from '@/context/useTransaction';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { useTenantData } from '@/context';


type SortField = 'captured_in' | 'amount';

interface TabelaProps {
  rows: ITransaction[];
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
    navigate('/transaction-description');
  };

  useEffect(() => {
    handleSort('captured_in');
  }, []);

  const tenantData = useTenantData();

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader style={{cursor: 'pointer', width: "9%"}}  onClick={() => handleSort('captured_in')}>
            Data
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'captured_in' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'captured_in' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ width: "13%"}}>NSU</S.TableHeader>
          <S.TableHeader style={{ width: "20%"}} >Estabelecimento</S.TableHeader>
          <S.TableHeader style={{ width: "20%"}}>Forma de Pagamento</S.TableHeader>
          <S.TableHeader style={{ width: "9%"}}>Bandeira</S.TableHeader>
          <S.TableHeader style={{cursor: 'pointer', width: "9%"}}  onClick={() => handleSort('amount')}>
            Valor
            <S.SortContainer>
              <S.SortArrow isActive={sortField === 'amount' && sortDirection === 'asc'}>▲</S.SortArrow>
              <S.SortArrow isActive={sortField === 'amount' && sortDirection === 'desc'}>▼</S.SortArrow>
            </S.SortContainer>
          </S.TableHeader>
          <S.TableHeader style={{ width: "9%"}} >Status</S.TableHeader>
          <S.TableHeader style={{ width: "5%"}}></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((transaction, index) => {

          const capturedDate = new Date(transaction.captured_in);
          const formattedDate = capturedDate.toLocaleDateString('pt-BR');
          const formattedTime = capturedDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

          return (
            <tr key={index}>
              <S.TableData>
                {formattedDate} <br />
                {formattedTime}
              </S.TableData>
              <S.TableData style={{maxWidth: "110px"}}>{transaction.nsu_internal}</S.TableData>
              <S.TableData style={{maxWidth: "150px"}} >{transaction.company_name}</S.TableData>
              <S.FormaPagamentoData>
  <S.FormaPagamentoText>
  {transaction.payment_type.toLocaleLowerCase() === 'credit' ? 'Crédito' : (transaction.payment_type.toLocaleLowerCase() === 'debit' ? 'Débito' : 'Pix')}
  </S.FormaPagamentoText>
</S.FormaPagamentoData>

              <S.TableData>
                <S.FlagContainer>
                  <img
                    src={
                      transaction.brand.toLocaleLowerCase() === null && transaction.payment_type === 'Pix' ? pix :
                      transaction.brand.toLocaleLowerCase() === 'visa' ? visa :
                      transaction.brand.toLocaleLowerCase() === 'elo' ? elo :
                      transaction.brand.toLocaleLowerCase() === 'mastercard' ? masterCard :
                      transaction.brand.toLocaleLowerCase() === 'maestro' ? maestro :
                      transaction.brand.toLocaleLowerCase() === 'hipercard' ?  hyper :
                      transaction.brand.toLocaleLowerCase() === 'amex' ?  amex :
                      transaction.brand.toLocaleLowerCase() === 'pix' ? pix : undefined
                    }
                    alt={transaction.brand}
                  />
                </S.FlagContainer>
              </S.TableData>
              <S.TableData> {formatCurrencyBR(Number(transaction.amount))}</S.TableData>
              <S.StatusData>
                <S.StatusText status={transaction.status}>
                  {transaction.status === 'succeeded' ? 'Sucesso' : 'Falha'}
                </S.StatusText>
              </S.StatusData>
              <S.TableData>
                <S.Button  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={() => handleButtonClick(transaction.id)}>
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

