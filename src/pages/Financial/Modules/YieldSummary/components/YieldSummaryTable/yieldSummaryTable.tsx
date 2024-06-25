import * as S from './styled';
import { Transaction } from './interface';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';

interface TabelaProps {
  rows: Transaction[];
}

export function YieldSummaryTable({ rows }: TabelaProps) {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader>Fornecedor</S.TableHeader>
          <S.TableHeader>Quantidade Transações</S.TableHeader>
          <S.TableHeader>Comissão</S.TableHeader>
          <S.TableHeader>TPV</S.TableHeader>
          <S.TableHeader>Total recebido</S.TableHeader>
          <S.TableHeader>A pagar</S.TableHeader>
          <S.TableHeader>Lucro final</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {rows.map((transaction, index) => (
          <tr key={index}>
            <S.TableData>{transaction.fornecedor}</S.TableData>
            <S.TableData>{transaction.qtdTransacoes}</S.TableData>
            <S.TableData>{transaction.qtdTransacoes}</S.TableData>
            <S.TableData>{formatCurrencyBR(parseFloat(transaction.tpv))}</S.TableData>
            <S.TableData>{formatCurrencyBR(parseFloat(transaction.aReceber))}</S.TableData>
            <S.TableData>{formatCurrencyBR(parseFloat(transaction.aPagar))}</S.TableData>
            <S.TableData>{formatCurrencyBR(parseFloat(transaction.lucro))}</S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
