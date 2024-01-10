import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styled';

interface DailyCommissionCardProps {
  id: number;
  data: string;
  nsu: string;
  nome: string;
  papel: string;
  valor_da_venda: number;
  comissao: number;
  fornecedor: string;
}

interface DailyCommissionCardListProps {
  data: DailyCommissionCardProps[];
}

export function DailyCommissionCard({ data }: DailyCommissionCardListProps) {
  return (
    <>
      {data.map((item, index) => (
        <S.CustomCard key={index}>
          <S.CustomHeader>
            <S.CustomId>{item.fornecedor}-{item.nsu}</S.CustomId>
            <S.CustomName>{item.nome}</S.CustomName>
            <S.CustomValue>{formatCurrencyBR(item.comissao)}</S.CustomValue>
          </S.CustomHeader>

          <S.CustomMainContent>
            <S.CustomLeftContent>
              <S.CustomDateInfo>
                <S.CustomTitle>Data: <span>{item.data}</span></S.CustomTitle>
                <S.CustomTags>
                  <S.CustomTagOne><p>{item.fornecedor}</p></S.CustomTagOne>
                  <S.CustomTagOne><p>{item.papel}</p></S.CustomTagOne>
                </S.CustomTags>
              </S.CustomDateInfo>
            </S.CustomLeftContent>

            <S.CustomRightContent>
              <S.CustomSaleInfo>
                <S.CustomTitle>Valor da Venda:</S.CustomTitle>
                <S.CustomSaleValue>{formatCurrencyBR(item.valor_da_venda)}</S.CustomSaleValue>
              </S.CustomSaleInfo>
            </S.CustomRightContent>

            <S.CustomViewButton>Ver venda</S.CustomViewButton>
          </S.CustomMainContent>
        </S.CustomCard>
      ))}
    </>
  );
}
