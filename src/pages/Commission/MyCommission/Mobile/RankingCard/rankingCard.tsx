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

export function RankingCard({ data }: RankingCardProps) {
  const tenantData = useTenantData();
  return (
    <>
      {Object.entries(data).map(([sellerName, sellerCommissions]) => (
        <React.Fragment key={sellerName}>
          {Object.entries(sellerCommissions).map(([fornecedor, commissionData], index) => (
            <S.CustomCard key={index}>
              <S.CustomHeader primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
              >
                <S.CustomName>{commissionData.la_seller_trading_name}</S.CustomName>
                <S.CustomValue>{formatCurrencyBR(parseFloat(commissionData.total_amount))}</S.CustomValue>
              </S.CustomHeader>
              <S.CustomMainContent>
                <S.CustomLeftContent>
                  <S.CustomDateInfo>
                    <S.CustomTitle primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
                    >
                    Valor total : <span>{formatCurrencyBR(parseFloat(commissionData.total_transaction_amount))}</span>
                    </S.CustomTitle>
                    <S.CustomTags>
                      <S.Container>
                        <S.CustomTagOne><p>{fornecedor}</p></S.CustomTagOne>
                      </S.Container>

                    </S.CustomTags>
                  </S.CustomDateInfo>
                </S.CustomLeftContent>
              </S.CustomMainContent>
            </S.CustomCard>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}
