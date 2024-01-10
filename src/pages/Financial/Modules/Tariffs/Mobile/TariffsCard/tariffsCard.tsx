import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styled';

export interface RowData {
  id: number;
  data: string;
  estabelecimento: string;
  licenciado: string;
  serial: number | string;
  valor: string;
  tipo: string;
  comentarios: string;
}

interface TariffsCardsProps {
  data: RowData[];
}

export function TariffsCard({ data }: TariffsCardsProps) {

  function formatDateBR(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }


  return (
    <>
      {data.map((rowData) => (
        <S.TariffCardWrapper key={rowData.id}>
          <S.TariffCardHeader tipo={rowData.tipo}>
            <S.RequestNumber>{rowData.serial}</S.RequestNumber>
            <S.IssueDate>{rowData.licenciado}</S.IssueDate>
            <S.Amount>{formatCurrencyBR(Number(rowData.valor))}</S.Amount>
          </S.TariffCardHeader>

          <S.TariffCardContent>
            <S.LicenseeInfoSection>
              <S.InfoBlock>
                <S.TariffCardTitle>Licenciado:</S.TariffCardTitle>
                <S.TariffCardDescription>{rowData.licenciado}</S.TariffCardDescription>
              </S.InfoBlock>

              <S.InfoBlock>
                <S.TariffCardTitle>Comentários</S.TariffCardTitle>
                <S.TariffCardDescription>{rowData.comentarios}</S.TariffCardDescription>
              </S.InfoBlock>
            </S.LicenseeInfoSection>

            <S.TariffDetailsSection>
              <S.DetailBlock>
                <S.TariffCardTitle>Data:</S.TariffCardTitle>
                <S.TariffCardDescription>{formatDateBR(rowData.data)}</S.TariffCardDescription>
              </S.DetailBlock>

              <S.DetailBlock>
                <S.TariffCardTitle>Tipo:</S.TariffCardTitle>
                <S.TariffCardDescription>{rowData.tipo}</S.TariffCardDescription>
              </S.DetailBlock>

              <S.EditButton>Editor</S.EditButton>
            </S.TariffDetailsSection>
          </S.TariffCardContent>
        </S.TariffCardWrapper>
      ))}
    </>
  );
}
