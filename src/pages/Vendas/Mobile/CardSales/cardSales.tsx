import React from 'react';
import * as S from './styled';
import pix from '@assets/bandeiras/pix.svg';
import visa from '@assets/bandeiras/visa.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import masterCard from '@assets/bandeiras/maestro.svg';
import { useNavigate } from 'react-router-dom';
import { useTransactionVendas } from '@/context/useVendas';

export interface Transaction {
  id: string;
  acquire_id: string;
  nsu_external: string;
  status: string;
  captured_in: string;
  amount: string;
  payment_type: string;
  brand: string;
  company_name: string;
}

interface CardSalesProps {
  transactions: Transaction[];
}

export const CardSales: React.FC<CardSalesProps> = ({ transactions }) => {
  const navigate = useNavigate();
  const { setSelectedTransactionId } = useTransactionVendas();

  const handleCardClick = (transactionId: string) => {
    setSelectedTransactionId(transactionId);
    navigate('/transaction-description');
  };

  const getBrandImageSrc = (brand: string | null) => {
    switch (brand) {
      case 'Visa': return visa;
      case 'Elo': return elo;
      case 'MasterCard': return masterCard;
      case 'Maestro': return maestro;
      case null : return pix;
      default: return undefined;
    }
  };

  return (
    <>
      {transactions.map((transaction) => {
        const formattedAmount = transaction.amount.replace('.', ',');
        const capturedDate = new Date(transaction.captured_in);
        const formattedDate = `${capturedDate.toLocaleDateString('pt-BR')} ${capturedDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;

        return (
          <S.Card key={transaction.id} onClick={() => handleCardClick(transaction.id)}>

            <S.CardHeader>

                <S.BrandImage src={getBrandImageSrc(transaction.brand)} alt={transaction.brand || 'Pix'} />

              <h4>{transaction.payment_type}</h4>
              <S.CardValue>{transaction.nsu_external}</S.CardValue>
              <S.CardAmount>R$ {formattedAmount}</S.CardAmount>
            </S.CardHeader>


            <S.ContainerInfo>
             <div>
             <S.CardTitle>Estabelecimento: <h4>{transaction.company_name}</h4> </S.CardTitle>
              <S.CardDate><h4>Data:</h4>{formattedDate}</S.CardDate>
             </div>
                <S.CardStatus status={transaction.status}>
                  {transaction.status === 'succeeded' ? 'SUCESSO' : 'FALHA'}
                </S.CardStatus>
            </S.ContainerInfo>



          </S.Card>
        );
      })}
    </>
  );
};
