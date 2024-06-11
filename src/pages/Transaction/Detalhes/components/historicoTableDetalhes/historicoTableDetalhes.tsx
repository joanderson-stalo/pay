import { useTenantData } from '@/context';
import * as S from './styled';

interface Liquidation {
  amount: number;
  status: string;
  dueDate: string;
  executedDate: string;
  receiptDocumentLink: string | null;
  id: string | null;
}

interface HistoricoTableDetalhesProps {
  liquidations: Liquidation[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function HistoricoTableDetalhes({ liquidations }: HistoricoTableDetalhesProps) {
  const tenantData = useTenantData();

  return (
    <S.HistoricoContainer>
      <S.HistoricoHeader primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Histórico de conciliações</S.HistoricoHeader>
      <S.HistoricoTable>
        <thead>
          <tr>
            <S.HistoricoTableHeaderCell>Data</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Valor</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Status</S.HistoricoTableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {liquidations.map((liquidation, index) => (
            <tr key={index}>
              <S.HistoricoTableCell>{formatDate(liquidation.executedDate)}</S.HistoricoTableCell>
              <S.HistoricoTableCell>{formatCurrency(liquidation.amount)}</S.HistoricoTableCell>
              <S.HistoricoTableCell>{liquidation.status.toLocaleLowerCase() === 'payed' ? 'pago' : liquidation.status}</S.HistoricoTableCell>
            </tr>
          ))}
        </tbody>
      </S.HistoricoTable>
    </S.HistoricoContainer>
  );
};
