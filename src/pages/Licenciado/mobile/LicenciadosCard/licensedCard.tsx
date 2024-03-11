import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { StyledGeneralButton, StyledCNPJ, StyledContentMain, StyledContentLeft, StyledContentRight, StyledHeader, StyledId, StyledEstablishmentName, StyledTPVContainer, StyledTPVLabel, StyledTPVValue, StyledTitle, StyledWrapper } from './styled';
import { useLicensed } from '@/context/useLicensed';
import { useNavigate } from 'react-router-dom';

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

  const handleViewMoreClick = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 20));
    setLicensedId(id)
    navigate(`/sellers-la-detail`);
  };
  return (
    <>
      {rows.map((rowData, index) => (
        <StyledWrapper key={index}>
          <StyledHeader>
            <StyledId>{rowData.id}</StyledId>
            <StyledEstablishmentName>{rowData.trading_name}</StyledEstablishmentName>
          </StyledHeader>

          <StyledContentMain>
            <StyledContentLeft>
              <StyledTitle>Type: {rowData.type}</StyledTitle>
              <StyledTitle>Estabelecimentos: {rowData.ec_count}</StyledTitle>
              <StyledTitle>Comissão: {formatCurrencyBR(Number(rowData.commission))}</StyledTitle>
            </StyledContentLeft>

            <StyledContentRight>
              <StyledTPVContainer>
                <StyledTPVLabel>TPV:</StyledTPVLabel>
                <StyledTPVValue>{formatCurrencyBR(rowData.tpv)}</StyledTPVValue>
              </StyledTPVContainer>

              <StyledGeneralButton onClick={() => handleViewMoreClick(rowData.id.toString())}>Visão Geral</StyledGeneralButton>
            </StyledContentRight>
          </StyledContentMain>
        </StyledWrapper>
      ))}
    </>
  );
}
