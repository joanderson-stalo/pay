import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styled';
import { useTenantData } from '@/context';

export interface StatementData {
  [date: string]: {
    title: string;
    amount: number;
    tpv: number;
    type: string;
  }[];
}

export function ExtractCardMobile({ data }: { data: StatementData }) {
  const tenantData = useTenantData();

  return (
    <>
      {Object.entries(data).map(([date, statements]) => (
        <S.CardContainer key={date}>
          {statements.map((statement, index) => (
            <div key={index}>
              <S.CardHeader status={statement.type === 'credit' ? 'Entrada' : 'Saída'}>
                <S.TicketNumber>{formatCurrencyBR(statement.amount)}</S.TicketNumber>
                <S.RequestLabel>{date}</S.RequestLabel>
                <S.RequestStatus>{statement.type === 'credit' ? 'Crédito' : 'Saída'}</S.RequestStatus>
              </S.CardHeader>

              <S.CardContent>
                <S.DetailColumn>
                  <S.DetailRow>
                    <S.SectionTitle>Data</S.SectionTitle>
                    <S.SectionDescription>{statement.title}</S.SectionDescription>
                  </S.DetailRow>
                  <S.DetailRow>
                    <S.SectionTitle>TPV</S.SectionTitle>
                    <S.SectionDescription>{formatCurrencyBR(statement.tpv)}</S.SectionDescription>
                  </S.DetailRow>
                </S.DetailColumn>

                <S.DetailColumnBtn>
                  <S.EditButton  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
>Visualizar</S.EditButton>
                </S.DetailColumnBtn>
              </S.CardContent>
            </div>
          ))}
        </S.CardContainer>
      ))}
    </>
  );
}
