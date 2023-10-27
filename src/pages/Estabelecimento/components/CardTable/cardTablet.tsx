import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useEstablishmentDetail } from '@/hooks/useEstablishmentDetail';

export interface RowData {
  id: number;
  registration_date: string;
  cnpj_cpf: string;
  trading_name: string;
  tpv: number;
  acquires: ('F1' | 'F2' | 'F3')[];
}

interface CardProps {
  data?: RowData;
}

export function CardTablet({ data = {
  id: 0,
  registration_date: '',
  cnpj_cpf: '',
  trading_name: '',
  tpv: 0,
  acquires: []
} }: CardProps) {
  const navigate = useNavigate();
  const { setDetailNumber } = useEstablishmentDetail();

  const handleViewMoreClick = async (id: number) => {
    setDetailNumber(id);
    await new Promise(resolve => setTimeout(resolve, 20));
    navigate(`/establishmentdetail`);
  };

  if (!data) {
    return null;  // Renderiza nada se data for undefined ou null.
  }

  return (
    <S.CardWrapper>
      <S.CardHeader>
        <S.CardId>#{data.id}</S.CardId>
        <S.CardTradingName>{data.trading_name}</S.CardTradingName>
        <S.CardCNPJCPF>{data.cnpj_cpf}</S.CardCNPJCPF>
      </S.CardHeader>
      <S.CardContent>
        <S.CardLicenciado>
          Licenciado: <span>{data.trading_name}</span>
        </S.CardLicenciado>
        <S.CardTPV>
          TPV: R$ {data.tpv.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </S.CardTPV>
      </S.CardContent>
      <S.CardFooter>
        <S.FornecedorWrapper>
          {data.acquires.map((fornecedor, index) => (
            <S.FornecedorItem key={index}>{fornecedor}</S.FornecedorItem>
          ))}
        </S.FornecedorWrapper>
        <S.CardButton onClick={() => handleViewMoreClick(data.id)}>Visão Geral</S.CardButton>
      </S.CardFooter>
    </S.CardWrapper>
  );
}
