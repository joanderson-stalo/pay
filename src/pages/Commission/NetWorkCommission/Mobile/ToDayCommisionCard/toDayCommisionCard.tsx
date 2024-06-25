import * as React from 'react';
import * as S from './styled';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { useTenantData } from '@/context';

interface CommissionData {
  ec_seller_document: string;
  la_seller_trading_name: string;
  total_amount: string;
  commission_count: string;
  total_transaction_amount: string;
}

interface SellerCommissions {
  [fornecedor: string]: CommissionData;
}

interface ECCommissions {
  [sellerName: string]: SellerCommissions;
}

interface RankingCardProps {
  data: ECCommissions;
}

export function ToDayCommisionCard({ data }: RankingCardProps) {

  const tenantData = useTenantData();
  return (
    <>
      {Object.entries(data).map(([sellerName, sellerCommissions]) => (
        <React.Fragment key={sellerName}>
          {Object.entries(sellerCommissions).map(([fornecedor, commissionData], index) => (
            <S.CardWrapper key={index}>
              <S.CardHeader primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
                <S.DateLabel>{sellerName}</S.DateLabel>
                <S.EstablishmentName>{commissionData.la_seller_trading_name}</S.EstablishmentName>
                <S.CommissionAmount>{formatCurrencyBR(Number(commissionData.total_amount))}</S.CommissionAmount>
              </S.CardHeader>

              <S.ContentMain>
                <S.Info>


                  <S.DivText>
                    <S.Title primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Valor Total:</S.Title>
                    <S.Subvalue>{formatCurrencyBR(Number(commissionData.total_transaction_amount))}</S.Subvalue>
                  </S.DivText>

                  <S.WrapperTag>
                    <S.Tag>{fornecedor}</S.Tag>
                  </S.WrapperTag>
                </S.Info>
              </S.ContentMain>
            </S.CardWrapper>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}
