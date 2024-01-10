import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styled';

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
                <S.CardHighlightLabel>Lucro:</S.CardHighlightLabel>
                <S.CardHighlightValue>{formatCurrencyBR(parseFloat(transaction.lucro))}</S.CardHighlightValue>
              </S.CardRow>
            </S.CardContentColumn>
          </S.CardContent>
        </S.Card>
      ))}
    </>
  );
}
