import * as S from './styled';

interface Transaction {
  id: string;
  Documento: string;
  Licenciado: string;
  Fornecedor: string;
  QtdTransações: string;
  TPV: string;
  Comissão: string;
  Lucro: string;
  Tarifas: string;
}


interface CardSummaryOperationProps {
  transactions: Transaction[];
}

export function CardSummaryOperation({ transactions }: CardSummaryOperationProps) {
  return (
   <>
 
      {transactions.map((transaction) => (
 
     <>   <S.CardWrapper key={transaction.id}>
           <S.CardHeader >
            <S.HeaderTitle>{transaction.Licenciado}</S.HeaderTitle>
            <S.HeaderCNPJ>{transaction.Documento}</S.HeaderCNPJ>
          </S.CardHeader>

          <S.F1BadgeContainer>
            <S.F1Badge>{transaction.Fornecedor}</S.F1Badge>
          </S.F1BadgeContainer>

          <S.CardContent>
            <S.CardContentSectionLeft>
              <S.CardInfoRow>
                <S.CardInfoLabel>Qtd de Transações:</S.CardInfoLabel>
                <S.CardInfoValue>{transaction.QtdTransações}</S.CardInfoValue>
              </S.CardInfoRow>

              <S.CardInfoRow>
                <S.CardInfoLabel>TPV:</S.CardInfoLabel>
                <S.CardInfoValue>R$ {transaction.TPV}</S.CardInfoValue>
              </S.CardInfoRow>

              <S.CardInfoRow>
                <S.CardInfoLabel>Lucro:</S.CardInfoLabel>
                <S.CardInfoValue>R$ {transaction.Lucro}</S.CardInfoValue>
              </S.CardInfoRow>
            </S.CardContentSectionLeft>

            <S.CardContentSectionRight>
              <S.CardInfoRow>
                <S.CardInfoLabel>Comissão:</S.CardInfoLabel>
                <S.CardInfoValue>R$ {transaction.Comissão}</S.CardInfoValue>
              </S.CardInfoRow>

              <S.CardInfoRow>
                <S.CardInfoLabel>Tarifas:</S.CardInfoLabel>
                <S.CardInfoValue>R$ {transaction.Tarifas}</S.CardInfoValue>
              </S.CardInfoRow>
            </S.CardContentSectionRight>
          </S.CardContent>
          </S.CardWrapper>
     </>
  
      ))}
 
   </>
  );
}
