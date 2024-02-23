import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import pix from '@assets/bandeiras/pix.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import visa from '@assets/bandeiras/visa.svg';
import masterCard from '@assets/bandeiras/master.svg';
import React from 'react';

interface Sale {
  captured_in: string;
  payment_type: string;
  brand: string;
  amount: string;
}

interface LatestSalesProps {
  latest_transactions: Sale[];
}

export function LatestSales({ latest_transactions }: LatestSalesProps) {
  const navigate = useNavigate();

  const formatDateAndTime = (dateTimeStr: string) => {
    const date = new Date(dateTimeStr);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('pt-BR', options);
    const formattedTime = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate}\n${formattedTime}`;
  };

  const sortedTransactions = [...latest_transactions].sort((a, b) => new Date(b.captured_in).getTime() - new Date(a.captured_in).getTime()).slice(0, 6);

  const handleButtonClick = () => {
    localStorage.setItem('selectedItem', '4');
    navigate('/vendas');
  };

  return (
    <>
      <S.Container>
        <S.Header>
          <h2>Últimas vendas</h2>
          <button onClick={handleButtonClick}>Ver todos</button>
        </S.Header>
        <S.Table>
          <thead>
            <tr>
              <S.TableHeader>Data e Hora</S.TableHeader>
              <S.TableHeader>Forma</S.TableHeader>
              <S.TableHeader>Bandeira</S.TableHeader>
              <S.TableHeader>Valor</S.TableHeader>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((item, index) => (
              <tr key={index}>
                <S.TableCell>
                 {formatDateAndTime(item.captured_in)}
                </S.TableCell>
                <S.TableCell>
                  {item.payment_type === 'credit' ? 'crédito' :
                  item.payment_type === 'debit' ? 'débito' :
                  item.payment_type === 'pix' ? 'pix' : ''}
                </S.TableCell>
                <S.TableContainerImg>
                  <img
                    src={
                      item.brand.toLowerCase() === 'visa' ? visa :
                      item.brand.toLowerCase() === 'elo' ? elo :
                      item.brand.toLowerCase() === 'mastercard' ? masterCard :
                      item.brand.toLowerCase() === 'maestro' ? maestro :
                      item.brand.toLowerCase() === 'pix' ? pix : undefined
                    }
                    alt={item.brand}
                  />
                </S.TableContainerImg>
                <S.TableCell>{formatCurrencyBR(parseFloat(item.amount))}</S.TableCell>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Container>
    </>
  );
}
