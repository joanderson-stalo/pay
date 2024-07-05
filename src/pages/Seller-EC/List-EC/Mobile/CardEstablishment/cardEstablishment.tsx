import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import {
  OverviewButton,
  EstablishmentCNPJ,
  MainContent,
  SupplierWrapper,
  LicenseWrapper,

  CardHeader,
  EstablishmentId,
  ContentLeft,
  EstablishmentName,
  LicenseName,
  CardWrapper,
  ContentRight,
  TPVWrapper,
  TPVLabel,
  ValueLabel,
  TitleLabel,
  SupplierThree
} from './styled';
import { useEstablishment } from '@/context/useEstablishment';
import { useNavigate } from 'react-router-dom';
import { useTenantData } from '@/context';


export interface AcquireData {
  [key: string]: {
    status_acquire: string;
    acquire_name: string;
  };
}

export interface RowData {
  id: number;
  registration_date: string;
  cnpj_cpf: string;
  trading_name: string;
  tpv: number;
  acquire: AcquireData;
}

interface TabelaProps {
  rows: RowData[];
}

export function formatDateToBR(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function CardEstablishment({ rows }: TabelaProps) {
  const { setEstablishmentId } = useEstablishment();
  const navigate = useNavigate();
  const tenantData = useTenantData();

  const handleViewMoreClick = async (id: string) => {
    setEstablishmentId(id);
    await new Promise(resolve => setTimeout(resolve, 20));
    navigate(`/sellers-ec-detail`);
  };

  return (
    <>
      {rows.map((row, index) => (
        <CardWrapper key={index}>
          <CardHeader primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
            <EstablishmentId>{`${row.id}`}</EstablishmentId>
            <EstablishmentName>{row.trading_name}</EstablishmentName>

          </CardHeader>

          <MainContent>
            <ContentLeft>
              <LicenseWrapper>
              <LicenseName>{formatDateToBR(row.registration_date)}</LicenseName>
              </LicenseWrapper>

              <SupplierWrapper>
                <TitleLabel>Fornecedor:</TitleLabel>
                {Object.keys(row.acquire).map((key) => (
                  <SupplierThree key={key}><p>{key}</p></SupplierThree>
                ))}
              </SupplierWrapper>
            </ContentLeft>

            <ContentRight>
              <TPVWrapper>
                <TPVLabel primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>TPV:</TPVLabel>
                <ValueLabel primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>{formatCurrencyBR(row.tpv)}</ValueLabel>
              </TPVWrapper>

              <OverviewButton primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}
 onClick={() => handleViewMoreClick(row.id.toString())}>Visão geral</OverviewButton>
            </ContentRight>
          </MainContent>
        </CardWrapper>
      ))}
    </>
  );
}
