import { useState } from 'react';
import * as S from './styled';
import { checkEmpty } from '@/utils/checkEmpty';
import { useTicketID } from '@/context/id/ticketId';
import { useNavigate } from 'react-router-dom';
import { Info } from '@phosphor-icons/react';

export interface RowDataPayments {
  id: number;
  receiver_tranding_name: string;
  amount_nf: string;
  created_at: string;
  status: string;
}

type SortField = keyof RowDataPayments;

interface TabelaProps {
  rows: RowDataPayments[];
}

export function TablePayments({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const { setSelectedTicketID } = useTicketID();
  const navigate = useNavigate();

  function formatDateBR(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  function formatCurrencyBRL(value: string) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(value));
  }

  const statusMap: { [key: string]: string } = {
    requested: 'Pagamento em análise',
    closed: 'Pagamento efetuado',
    returned: 'Pagamento recusado'
  };

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

    if (sortField === 'created_at') {
      comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    } else if (sortField === 'id' || sortField === 'amount_nf') {
      comparison = Number(a[sortField]) - Number(b[sortField]);
    } else {
      comparison = a[sortField].localeCompare(b[sortField]);
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const handleViewMoreClick = async (id: number) => {
    setSelectedTicketID(String(id));
    await new Promise(resolve => setTimeout(resolve, 20));
    navigate(`/tickets-view`);
  };

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('id')}>
            ID
            <S.TooltipIcon data-tooltip="Identificação única da transação">
              <Info  />
            </S.TooltipIcon>
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('receiver_tranding_name')}>
            Licenciado
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('amount_nf')}>
            Valor da Nota Fiscal
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('created_at')}>
            Data da Solicitação
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('status')}>
            Situação
            <S.TooltipIcon data-tooltip="Status atual do pagamento">
              <Info size={16} />
            </S.TooltipIcon>
          </S.TableHeader>
          <S.TableHeader>

          </S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.id}</S.TableData>
            <S.TableData>{checkEmpty(row.receiver_tranding_name)}</S.TableData>
            <S.TableData>{formatCurrencyBRL(checkEmpty(row.amount_nf))}</S.TableData>
            <S.TableData>{formatDateBR(row.created_at)}</S.TableData>
            <S.TableData><S.StatusTableData status={statusMap[row.status]}>{statusMap[row.status]}</S.StatusTableData></S.TableData>
            <S.TableData>
        <S.Button status={row.status}  onClick={() => handleViewMoreClick(row.id)}>
          {row.status === 'returned' ? 'Atualizar pagamento' : 'Detalhes'}
        </S.Button>
      </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
