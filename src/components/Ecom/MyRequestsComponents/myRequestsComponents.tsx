import { DotsNine } from '@phosphor-icons/react';
import * as S from './styled';
export function MyRequestsComponents(){
  return(
    <>
     <S.Wrapper>
     <S.NumberRequests>Número do pedido: #50</S.NumberRequests>
      <S.NumberStatus status='Pedido em separação'>Pedido em separação</S.NumberStatus>
     </S.Wrapper>
      <S.ContainerRequests>

        <S.WrapperInfo>
            <S.ContentInfo>
              <S.TitleInfo>Data do pedido</S.TitleInfo>
              <S.Info>14/04/2023</S.Info>
            </S.ContentInfo>
            <S.ContentInfo>
              <S.TitleInfo>Total</S.TitleInfo>
              <S.Info>R$ 234,67</S.Info>
            </S.ContentInfo>

        </S.WrapperInfo>





          <S.ButtonRequest><DotsNine /> Detalhes</S.ButtonRequest>
      </S.ContainerRequests>
    </>
  )
}
