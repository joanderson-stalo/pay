import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styled';

interface RowData {
  id: number;
  nome: string;
  posicao: string;
  papel: string;
  comissao_total: number;
  tpv_total: number;
  fornecedor: ('F1' | 'F2' | 'F3')[];
}

interface RankingCardProps {
  data: RowData[];
}

export function RankingCard({ data }: RankingCardProps) {
  return (
    <>
      {data.map((item, index) => (
        <S.CustomCard key={index}>
          <S.CustomHeader>
            <S.CustomId>{item.posicao}</S.CustomId>
            <S.CustomName>{item.nome}</S.CustomName>
            <S.CustomValue>{formatCurrencyBR(item.comissao_total)}</S.CustomValue>
          </S.CustomHeader>

          <S.CustomMainContent>
            <S.CustomLeftContent>
              <S.CustomDateInfo>
                <S.CustomTitle>TPV Mensal: <span>{formatCurrencyBR(item.tpv_total)}</span></S.CustomTitle>
                <S.CustomTags>
                  <S.Container>
                    {item.fornecedor.map((fornecedor, idx) => (
                      <S.CustomTagOne key={idx}><p>{fornecedor}</p></S.CustomTagOne>
                    ))}
                  </S.Container>
                  <S.CustomTagOne><p>{item.papel}</p></S.CustomTagOne>
                </S.CustomTags>
              </S.CustomDateInfo>
            </S.CustomLeftContent>

            <S.CustomViewButton>Ver venda</S.CustomViewButton>
          </S.CustomMainContent>
        </S.CustomCard>
      ))}
    </>
  );
}
