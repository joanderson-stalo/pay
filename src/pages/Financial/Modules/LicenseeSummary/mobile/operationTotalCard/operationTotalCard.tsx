import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styled';

export interface Totals {
  meta: string;
  tpv: string;
  gap: string;
  comissao: string;
}

export function OperationTotalCard(totals: Totals) {
  const { comissao, gap, meta, tpv } = totals;

  return (
    <S.CardWrapper>
      <S.CardHeader>
        <S.SupplierId>Total</S.SupplierId>
      </S.CardHeader>

      <S.MainContent>
        <S.ContentSide>
          <S.TextGroup>
            <S.TextTitle>Meta:</S.TextTitle>
            <S.TextValue>{formatCurrencyBR(parseFloat(meta))}</S.TextValue>
          </S.TextGroup>

          <S.TextGroup>
            <S.TextTitle>TPV:</S.TextTitle>
            <S.TextValue>{formatCurrencyBR(parseFloat(tpv))}</S.TextValue>
          </S.TextGroup>
        </S.ContentSide>

        <S.ContentSide>
          <S.TextGroup>
            <S.TextTitle>GAP:</S.TextTitle>
            <S.TextValue>{formatCurrencyBR(parseFloat(gap))}</S.TextValue>
          </S.TextGroup>

          <S.TextGroup>
            <S.ActiveTextTitle>Comissão:</S.ActiveTextTitle>
            <S.ActiveTextValue>{formatCurrencyBR(parseFloat(comissao))}</S.ActiveTextValue>
          </S.TextGroup>
        </S.ContentSide>
      </S.MainContent>
    </S.CardWrapper>
  );
}
