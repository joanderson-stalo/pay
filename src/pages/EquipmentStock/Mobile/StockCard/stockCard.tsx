import * as S from './styled';

interface StockCardProps {
  data: Array<{
    id: number;
    cadastro: string;
    serial: number | string;
    modelo: string;
    fornecedor: string;
    funcionamento: string;
  }>;
}


export function StockCard(props: StockCardProps) {
  const { data } = props;

  return (
    <>
      {data.map((item) => (
        <S.StockCardWrapper key={item.id}>
          <S.StockCardHeader  funcionamento={item.funcionamento.toLowerCase() as 'quebrado' | 'estável' | 'incompleto'}>
            <S.StockNumber>{item.serial}</S.StockNumber>
            <S.StockReference>{item.modelo}</S.StockReference>
            <S.StockButton>Ver POS</S.StockButton>
          </S.StockCardHeader>

          <S.StockCardContent>
            <S.StockInfo>
              <S.StockTextGroup>
                <S.StockTitle>Fornecedor: </S.StockTitle>
                <S.StockDescriptionActive>{item.fornecedor}</S.StockDescriptionActive>
              </S.StockTextGroup>

              <S.StockTextGroup>
                <S.StockTitle>Cadastro:</S.StockTitle>
                <S.StockDescription>{item.cadastro}</S.StockDescription>
              </S.StockTextGroup>

              <S.StockTextGroup>
                <S.StockTitle>Funcionamento: </S.StockTitle>
                <S.StockStatus funcionamento={item.funcionamento.toLowerCase() as 'quebrado' | 'estável' | 'incompleto'}>{item.funcionamento}</S.StockStatus>
              </S.StockTextGroup>
            </S.StockInfo>
          </S.StockCardContent>
        </S.StockCardWrapper>
      ))}
    </>
  );
}
