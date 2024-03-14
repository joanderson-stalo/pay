import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styled';
import { useTenantData } from '@/context';

interface Transaction {
  id: number;
  fornecedor: string;
  qtdTransacoes: number;
  tpv: string;
  aReceber: string;
  aPagar: string;
  lucro: string;
}

interface CardOperationSummaryProps {
  transactions: Transaction[];
}

export function CardOperationSummary({ transactions }: CardOperationSummaryProps) {
  const tenantData = useTenantData();


  return (
        <>
      {transactions.map((transaction) => (
        <S.Card key={transaction.id}>
          <S.CardHeader>
            <S.CardIdentifier>{transaction.fornecedor}</S.CardIdentifier>
            <S.CardStats>
              <S.CardStatsDescription>Qtd Transações:</S.CardStatsDescription>
              <S.CardStatsNumber>{transaction.qtdTransacoes}</S.CardStatsNumber>
            </S.CardStats>
          </S.CardHeader>

          <S.CardContent>
            <S.CardContentColumn>
              <S.CardRow>
                <S.CardLabel>TPV:</S.CardLabel>
                <S.CardValue>{formatCurrencyBR(parseFloat(transaction.tpv))}</S.CardValue>
              </S.CardRow>

              <S.CardRow>
                <S.CardLabel>A receber:</S.CardLabel>
                <S.CardValue>{formatCurrencyBR(parseFloat(transaction.aReceber))}</S.CardValue>
              </S.CardRow>
            </S.CardContentColumn>

            <S.CardContentColumn>
              <S.CardRow>
                <S.CardLabel>A pagar:</S.CardLabel>
                <S.CardValue>{formatCurrencyBR(parseFloat(transaction.aPagar))}</S.CardValue>
              </S.CardRow>

              <S.CardRow>
                <S.CardHighlightLabel  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Lucro:</S.CardHighlightLabel>
                <S.CardHighlightValue  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>{formatCurrencyBR(parseFloat(transaction.lucro))}</S.CardHighlightValue>
              </S.CardRow>
            </S.CardContentColumn>
          </S.CardContent>
        </S.Card>
      ))}
    </>
  );
}
