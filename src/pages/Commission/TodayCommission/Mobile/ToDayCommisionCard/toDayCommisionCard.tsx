import * as S from './styled';

interface RowData {
  id: number;
  data: string;
  licenciado: string;
  transacoes: number;
  tpv: number;
  comissao: number;
  fornecedor: 'F1' | 'F2' | 'F3';
}

interface NewToDayCommissionCardProps {
  mockData: RowData[];
}

export function ToDayCommisionCard({ mockData }: NewToDayCommissionCardProps) {
  return (
    <>
      {mockData.map((rowData) => (
        <S.CardWrapper key={rowData.id}>
          <S.CardHeader>
            <S.DateLabel>{new Date(rowData.data).toLocaleDateString('pt-BR')}</S.DateLabel>
            <S.EstablishmentName>{rowData.licenciado}</S.EstablishmentName>
            <S.CommissionAmount>R$ {rowData.comissao.toLocaleString('pt-BR')}</S.CommissionAmount>
          </S.CardHeader>

          <S.ContentMain>
            <S.Info>
              <S.DivText>
                <S.Title>Transactions: </S.Title>
                <S.Subvalue>{rowData.transacoes}</S.Subvalue>
              </S.DivText>

              <S.DivText>
                <S.Title>TPV:</S.Title>
                <S.Subvalue>R$ {rowData.tpv.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</S.Subvalue>
              </S.DivText>

              <S.WrapperTag>
                <S.Tag>{rowData.fornecedor}</S.Tag>
              </S.WrapperTag>
            </S.Info>
          </S.ContentMain>
        </S.CardWrapper>
      ))}
    </>
  );
}
