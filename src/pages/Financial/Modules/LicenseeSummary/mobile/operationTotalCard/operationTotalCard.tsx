import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styled';
import { useTenantData } from '@/context';

export interface Totals {
  meta: string;
  tpv: string;
  gap: string;
  comissao: string;
}

export function OperationTotalCard(totals: Totals) {
  const { comissao, gap, meta, tpv } = totals;
  const tenantData = useTenantData();

  return (
    <S.CardWrapper >
      <S.CardHeader  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
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
            <S.ActiveTextTitle  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} >Comissão:</S.ActiveTextTitle>
            <S.ActiveTextValue  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
>{formatCurrencyBR(parseFloat(comissao))}</S.ActiveTextValue>
          </S.TextGroup >
        </S.ContentSide>
      </S.MainContent>
    </S.CardWrapper>
  );
}
