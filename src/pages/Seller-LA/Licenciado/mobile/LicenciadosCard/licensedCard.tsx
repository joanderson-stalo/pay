import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { StyledGeneralButton, StyledCNPJ, StyledContentMain, StyledContentLeft, StyledContentRight, StyledHeader, StyledId, StyledEstablishmentName, StyledTPVContainer, StyledTPVLabel, StyledTPVValue, StyledTitle, StyledWrapper } from './styled';
import { useLicensed } from '@/context/useLicensed';
import { useNavigate } from 'react-router-dom';
import { useTenantData } from '@/context';

interface RowData {
  id: number;
  cnpj_cpf: string;
  trading_name: string;
  type: string;
  tpv: number;
  commission: string;
  ec_count: number;
  network_index: number | null;
}

interface LicensedCardProps {
  rows: RowData[];
}



export function LicensedCard({ rows }: LicensedCardProps) {

  const { setLicensedId } = useLicensed();
  const navigate = useNavigate();
  const tenantData = useTenantData();

  const handleViewMoreClick = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 20));
    setLicensedId(id)
    navigate(`/sellers-la-detail`);
  };
  return (
    <>
      {rows.map((rowData, index) => (
        <StyledWrapper key={index}>
          <StyledHeader primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
            <StyledId>{rowData.id}</StyledId>
            <StyledEstablishmentName>{rowData.trading_name}</StyledEstablishmentName>
          </StyledHeader>

          <StyledContentMain>
            <StyledContentLeft>
              <StyledTitle>Tipo: {rowData.type}</StyledTitle>
              <StyledTitle>Estabelecimentos: {rowData.ec_count}</StyledTitle>
              <StyledTitle>Comissão: {formatCurrencyBR(Number(rowData.commission))}</StyledTitle>
            </StyledContentLeft>

            <StyledContentRight>
              <StyledTPVContainer>
                <StyledTPVLabel primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>TPV:</StyledTPVLabel>
                <StyledTPVValue>{formatCurrencyBR(rowData.tpv)}</StyledTPVValue>
              </StyledTPVContainer>

              <StyledGeneralButton primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={() => handleViewMoreClick(rowData.id.toString())}>Visão geral</StyledGeneralButton>
            </StyledContentRight>
          </StyledContentMain>
        </StyledWrapper>
      ))}
    </>
  );
}
