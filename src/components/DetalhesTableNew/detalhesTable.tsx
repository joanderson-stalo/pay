import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styles';
import { useTenantData } from '@/context';

interface TransactionsGroupedByAcquireId {
  [key: string]: {
    total_amount: number;
    total_transactions: number;
  };
}

interface DetalhesTableProps {
  transactions_grouped_by_acquire_id: TransactionsGroupedByAcquireId;
}

export function DetalhesTable({ transactions_grouped_by_acquire_id }: DetalhesTableProps) {
  const totais = Object.values(transactions_grouped_by_acquire_id).reduce((acc, fornecedor) => ({
    pos: acc.pos + fornecedor.total_transactions,
    transacoes: acc.transacoes + fornecedor.total_transactions,
    tpv: acc.tpv + fornecedor.total_amount,
    comissao: acc.comissao + fornecedor.total_amount
  }), { pos: 0, transacoes: 0, tpv: 0, comissao: 0 });

  const tenantData = useTenantData();

  return (
    <S.Container>
      <S.Header  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Detalhes</S.Header>
      <S.Table>
        <thead>
          <tr>
            <S.TableHeaderCell>Fornecedor</S.TableHeaderCell>
            <S.TableHeaderCell>Transações</S.TableHeaderCell>
            {/* <S.TableHeaderCell>TPV</S.TableHeaderCell> */}
            <S.TableHeaderCell>Comissão</S.TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {Object.entries(transactions_grouped_by_acquire_id).map(([key, fornecedor], index) => (
            <tr key={index}>
              <S.TableCell>{key}</S.TableCell>
              <S.TableCell>{fornecedor.total_transactions}</S.TableCell>
              {/* <S.TableCell>R$ {fornecedor.total_amount}</S.TableCell> */}
              <S.TableCell>{formatCurrencyBR(fornecedor.total_amount)}</S.TableCell>
            </tr>
          ))}
          <S.TotalRow  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
            <S.TableCellTotal>Totais</S.TableCellTotal>
         
            <S.TableCellTotal>{totais.transacoes}</S.TableCellTotal>
            {/* <S.TableCellTotal>R$ {totais.tpv}</S.TableCellTotal> */}
            <S.TableCellTotal>{formatCurrencyBR(totais.comissao)}</S.TableCellTotal>
          </S.TotalRow>
        </tbody>
      </S.Table>
    </S.Container>
  );
}
