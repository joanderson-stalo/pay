import React from 'react';
import * as S from './styled';
import pix from '@assets/bandeiras/pix.svg';
import visa from '@assets/bandeiras/visa.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import masterCard from '@assets/bandeiras/master.svg';
import { useNavigate } from 'react-router-dom';
import { useTransactionVendas } from '@/context/useTransaction';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { useTenantData } from '@/context';

export interface Transaction {
  id: string;
  acquire_id: string;
  nsu_internal: string;
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
  const tenantData = useTenantData();

  const handleCardClick = (transactionId: string) => {
    setSelectedTransactionId(transactionId);
    navigate('/transaction-description');
  };

  const getBrandImageSrc = (brand: string | null) => {
    switch (brand?.toLocaleLowerCase()) {
      case 'visa': return visa;
      case 'elo': return elo;
      case 'mastercard': return masterCard;
      case 'maestro': return maestro;
      case 'pix' : return pix;
      case null : return pix;
      default: return undefined;
    }
  };

  return (
    <>
      {transactions.map((transaction) => {
        const capturedDate = new Date(transaction.captured_in);
        const formattedDate = `${capturedDate.toLocaleDateString('pt-BR')} ${capturedDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;

        return (
          <S.Card key={transaction.id} onClick={() => handleCardClick(transaction.id)}>

            <S.CardHeader secundary='' primary={tenantData.primary_color_identity}>

                <S.BrandImage src={getBrandImageSrc(transaction.brand)} alt={transaction.brand || 'Pix'} />


              <S.CardValue>{transaction.nsu_internal}</S.CardValue>
              <S.CardAmount>{formatCurrencyBR(Number(transaction.amount))}</S.CardAmount>
            </S.CardHeader>


            <S.ContainerInfo>
             <div>
             <S.CardTitle>Estabelecimento: <h4>{transaction.company_name}</h4> </S.CardTitle>
              <S.CardDate><h4>Data:</h4>{formattedDate}</S.CardDate>
              <S.Tag>
                {transaction.payment_type === 'debit' &&  'Débito'  || 'credit' && 'Crédito' || 'pix' && 'Pix'
                }</S.Tag>
             </div>
                <S.CardStatus status={transaction.status}>
                  {transaction.status === 'succeeded' ? 'Sucesso' : 'Falha'}
                </S.CardStatus>
            </S.ContainerInfo>



          </S.Card>
        );
      })}
    </>
  );
};
