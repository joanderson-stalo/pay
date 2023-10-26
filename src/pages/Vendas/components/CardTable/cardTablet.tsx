import pix from '@assets/bandeiras/pix.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import visa from '@assets/bandeiras/visa.svg';
import masterCard from '@assets/bandeiras/master.svg';
import * as S from './styled';
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

interface CardTableProps {
  rows: Transaction[];
}

const navigate = useNavigate();
const { setSelectedTransactionId } = useTransactionVendas();

const handleButtonClick = (id: string) => {
  setSelectedTransactionId(id);
  navigate('/detalhe');
};

export function CardTable({ rows }: CardTableProps) {
  return (
    <div>
      {rows.map(transaction => (
        <S.StyledCardTable key={transaction.id}>
          <S.Title>
            <strong>#{transaction.id}</strong> {transaction.company_name}
          </S.Title>
          <S.BrandLogo>
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
            <S.Amount>
              R$ {transaction.amount.replace('.', ',')}
            </S.Amount>
          </S.BrandLogo>
          <S.PaymentType>
            {transaction.payment_type}
          </S.PaymentType>
          <S.StatusAndButton success={transaction.status === 'succeeded'}>
            <div>
              {transaction.status === 'succeeded' ? 'SUCESSO' : 'FALHA'}
            </div>
            <S.Button onClick={() => handleButtonClick(transaction.id)}>
              Visão Geral
            </S.Button>
          </S.StatusAndButton>
        </S.StyledCardTable>
      ))}
    </div>
  );
}
