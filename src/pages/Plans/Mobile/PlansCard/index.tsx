import * as S from './styled';

export interface CardData {
  id: number;
  status: string;
  name: string;
  fornecedor: string;
  antecipacao: number; 
  tipo: 'Base' | 'Comercial';
}

interface PlansCardProps {
  cards: CardData[];
}

export function PlansCard({ cards }: PlansCardProps) {
  const renderContent = (content: string | number) => content ? content.toString() : '---';

  return (
    <>
      {cards.map(card => (
        <S.CardWrapper key={card.id}>
          <S.CardHeader>
            <S.HeaderLabel>{renderContent(card.fornecedor)}</S.HeaderLabel>
            <S.ActiveStatusButton isActive={card.status === 'Ativo'}>
  {card.status}
</S.ActiveStatusButton>

            <S.HeaderLabel>{renderContent(card.tipo)}</S.HeaderLabel>
          </S.CardHeader>

          <S.CardContent>
            <S.RightInfoSection>
              <S.InfoBlock>
                <S.InfoTitle>Nome</S.InfoTitle>
                <S.InfoDescription>{renderContent(card.name)}</S.InfoDescription>
              </S.InfoBlock>

              <S.InfoBlock>
                <S.InfoTitle>Com antecipação? <span>{card.antecipacao ? 'Sim' : 'Não'}</span></S.InfoTitle>
              </S.InfoBlock>
            </S.RightInfoSection>

       
          </S.CardContent>
        </S.CardWrapper>
      ))}
    </>
  );
}
