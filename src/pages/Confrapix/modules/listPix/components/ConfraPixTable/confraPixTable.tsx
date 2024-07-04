import * as S from './styled';
import { checkEmpty } from '@/utils/checkEmpty';
import { useNavigate } from 'react-router-dom';
import { useOrderPix } from '@/context/id/orderPixID';

export interface RowDataPayments {
  id: number;
  amount: string;
  created_at: string;
  status: string;
  customer_name: string;
}

interface TabelaProps {
  rows: RowDataPayments[];
}

export function ConfraPixTable({ rows }: TabelaProps) {
  const navigate = useNavigate();
  const { setSelectedOrderPixID } = useOrderPix();

  function formatDateBR(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  function formatCurrencyBRL(value: string) {
    const numberValue = Number(value);
    return isNaN(numberValue)
      ? 'R$ 0,00'
      : new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(numberValue);
  }

  const statusMap: { [key: string]: string } = {
    aguardando: 'Aguardando',
    concluido: 'Concluido'
  };

  const handleViewMoreClick = async (id: number) => {
    await new Promise(resolve => setTimeout(resolve, 20));
    setSelectedOrderPixID(id.toString());
    navigate(`/confrapix-details`);
  };

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader>ID</S.TableHeader>
          <S.TableHeader>Nome do cliente</S.TableHeader>
          <S.TableHeader>Data da transação</S.TableHeader>
          <S.TableHeader>Valor</S.TableHeader>
          <S.TableHeader>Situação</S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.id}</S.TableData>
            <S.TableData>{checkEmpty(row.customer_name)}</S.TableData>
            <S.TableData>{formatDateBR(row.created_at)}</S.TableData>
            <S.TableData>{formatCurrencyBRL(row.amount)}</S.TableData>
            <S.TableData>
              <S.StatusTableData status={statusMap[row.status.toLowerCase()]}>
                {statusMap[row.status.toLowerCase()]}
              </S.StatusTableData>
            </S.TableData>
            <S.TableData>
              <S.Button status={row.status.toLowerCase()} onClick={() => handleViewMoreClick(row.id)}>
                Detalhes
              </S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
