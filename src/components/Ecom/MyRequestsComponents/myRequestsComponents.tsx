import { DotsNine } from '@phosphor-icons/react';
import * as S from './styled';

interface Sale {
  id: number;
  status: string;
  amount: number;
  created_at: string;
}

interface MyRequestsProps {
  sales: Sale[];
}

export function MyRequestsComponents({ sales }: MyRequestsProps) {
  return (
    <>
      {sales.map((sale) => (
        <div key={sale.id}>
          <S.Wrapper>
            <S.NumberRequests>Número do pedido: #{sale.id}</S.NumberRequests>
            <S.NumberStatus >{sale.status}</S.NumberStatus>
          </S.Wrapper>
          <S.ContainerRequests>
            <S.WrapperInfo>
              <S.ContentInfo>
                <S.TitleInfo>Data do pedido</S.TitleInfo>
                <S.Info>{new Date(sale.created_at).toLocaleDateString()}</S.Info>
              </S.ContentInfo>
              <S.ContentInfo>
                <S.TitleInfo>Total</S.TitleInfo>
                <S.Info>
                  {sale.amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </S.Info>
              </S.ContentInfo>
            </S.WrapperInfo>
            <S.ButtonRequest>
              <DotsNine /> Detalhes
            </S.ButtonRequest>
          </S.ContainerRequests>
        </div>
      ))}
    </>
  );
}
