import { useTenantData } from '@/context';
import * as S from './styled';

export interface Commission {
  seller_name: string;
  seller_type: string;
  fee: number;
  markup: number;
  amount: number;
}

interface ComissoesTableProps {
  commissions: Commission[];
}

export function ComissoesTable({ commissions }: ComissoesTableProps) {
  const totalFee = commissions.reduce((total, commission) => total + commission.fee, 0);
  const totalAmount = commissions.reduce((total, commission) => total + commission.amount, 0);
  const tenantData = useTenantData();

  return (
    <S.HistoricoContainer>
      <S.HistoricoHeader  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
>Comissões Geradas</S.HistoricoHeader>
      <S.HistoricoTable>
        <thead>
          <tr>
            <S.HistoricoTableHeaderCell ></S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Papel</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Taxa</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Markup</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Valor</S.HistoricoTableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {commissions.map((commission, index) => (
            <tr key={index}>
              <S.HistoricoTableCell>{commission.seller_name}</S.HistoricoTableCell>
              <S.HistoricoTableCell> <S.HistoricoTableCellPapelText label={commission.seller_type.toLocaleUpperCase()} >{commission.seller_type}</S.HistoricoTableCellPapelText></S.HistoricoTableCell>
              <S.HistoricoTableCell>{commission.fee.toLocaleString('pt-BR')}%</S.HistoricoTableCell>
              <S.HistoricoTableCell>{commission.markup.toLocaleString('pt-BR')}%</S.HistoricoTableCell>
              <S.HistoricoTableCell>R$ {commission.amount.toLocaleString('pt-BR', {maximumFractionDigits: 2})}</S.HistoricoTableCell>
            </tr>
          ))}
          <S.TotalRow  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
>
            <S.HistoricoTableHeaderCellTotal>Total</S.HistoricoTableHeaderCellTotal>
            <S.HistoricoTableHeaderCellTotal></S.HistoricoTableHeaderCellTotal>
            <S.HistoricoTableHeaderCellTotal>{totalFee.toLocaleString('pt-BR', {maximumFractionDigits: 2})}%</S.HistoricoTableHeaderCellTotal>
            <S.HistoricoTableHeaderCellTotal></S.HistoricoTableHeaderCellTotal>
            <S.HistoricoTableHeaderCellTotal>R$ {totalAmount.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</S.HistoricoTableHeaderCellTotal>
          </S.TotalRow>
        </tbody>
      </S.HistoricoTable>
    </S.HistoricoContainer>
  );
};
