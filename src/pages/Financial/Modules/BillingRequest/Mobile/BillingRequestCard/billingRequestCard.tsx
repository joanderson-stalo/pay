import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import * as S from './styled';
import { convertDateFormat } from '@/utils/convertDateFormat';

export interface BillingData {
  id: number;
  data: string;
  estabelecimento: string;
  licenciado: string;
  serial: string;
  valor: number;
  tipo: string;
  comentarios: string;
}

interface BillingRequestCardProps {
  data: BillingData[];
}

export function BillingRequestCard({ data }: BillingRequestCardProps) {
  
  function formatDateBR(dateString: string | number | Date) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }


  return (
    <>
      {data.map((item) => (
        <S.Card key={item.id}>
          <S.CardHeader>
            <S.RequestID>{item.serial}</S.RequestID>
            <S.DateLabel>{item.estabelecimento}</S.DateLabel>
            <S.Price>{formatCurrencyBR(item.valor)}</S.Price>
          </S.CardHeader>

          <S.CardBody>
            <S.RightSection>
              <S.InfoBlock>
                <S.InfoTitle>Licenciado:</S.InfoTitle>
                <S.InfoDescription>{item.licenciado}</S.InfoDescription>
              </S.InfoBlock>

              <S.InfoBlock>
                <S.InfoTitle>Comentários</S.InfoTitle>
                <S.InfoDescription>{item.comentarios}</S.InfoDescription>
              </S.InfoBlock>
            </S.RightSection>

            <S.LeftSection>
              <S.LeftInfoBlock>
                <S.InfoTitle>Data:</S.InfoTitle>
                <S.InfoDescription>{formatDateBR(item.data)}</S.InfoDescription>
              </S.LeftInfoBlock>

              <S.LeftInfoBlock>
                <S.InfoTitle>Tipo:</S.InfoTitle>
                <S.InfoDescription>{item.tipo}</S.InfoDescription>
              </S.LeftInfoBlock>

              <S.EditButton>Editar</S.EditButton>
            </S.LeftSection>
          </S.CardBody>
        </S.Card>
      ))}
    </>
  );
}
