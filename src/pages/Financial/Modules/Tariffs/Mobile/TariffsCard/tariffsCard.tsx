import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styled';
import { useTariff } from '@/context/useTariff';
import { useNavigate } from 'react-router-dom';
import { useTenantData } from '@/context';

export interface RowData {
  id: number;
  reference_date: string;
  seller_name: string;
  responsible_seller_name: string;
  serial_terminal: number | string;
  amount: string;
  type: string;
  comment: string;
}

interface TariffsCardsProps {
  data: RowData[];
}

export function TariffsCard({ data }: TariffsCardsProps) {

  function formatDateBR(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  const { setTariffId } = useTariff();
  const navigate = useNavigate()

  const handleViewMoreClick = async (id: string) => {
    setTariffId(id);
    await new Promise(resolve => setTimeout(resolve, 20));

    navigate(`/editRate`);
};

const tenantData = useTenantData();

  return (
    <>
      {data.map((rowData) => (
        <S.TariffCardWrapper key={rowData.id}>
          <S.TariffCardHeader primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} tipo={rowData.type}>
            <S.RequestNumber>{rowData.serial_terminal}</S.RequestNumber>
            {/* <S.IssueDate>{rowData.responsible_seller_name}</S.IssueDate> */}
            <S.Amount>{formatCurrencyBR(Number(rowData.amount))}</S.Amount>
          </S.TariffCardHeader>

          <S.TariffCardContent>
            <S.LicenseeInfoSection>
              <S.InfoBlock>
                <S.TariffCardTitle>Licenciado:</S.TariffCardTitle>
                <S.TariffCardDescription>{rowData.seller_name}</S.TariffCardDescription>
              </S.InfoBlock>

              <S.InfoBlock>
                <S.TariffCardTitle>Comentários</S.TariffCardTitle>
                <S.TariffCardDescription>{rowData.comment}</S.TariffCardDescription>
              </S.InfoBlock>
            </S.LicenseeInfoSection>

            <S.TariffDetailsSection>
              <S.DetailBlock>
                <S.TariffCardTitle>Data:</S.TariffCardTitle>
                <S.TariffCardDescription>{formatDateBR(rowData.reference_date)}</S.TariffCardDescription>
              </S.DetailBlock>

              <S.DetailBlock>
                <S.TariffCardTitle>Tipo:</S.TariffCardTitle>
                <S.TariffCardDescription>{rowData.type}</S.TariffCardDescription>
              </S.DetailBlock>

              <S.EditButton  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
 onClick={() => handleViewMoreClick(rowData.id.toString())}>Editor</S.EditButton>
            </S.TariffDetailsSection>
          </S.TariffCardContent>
        </S.TariffCardWrapper>
      ))}
    </>
  );
}
