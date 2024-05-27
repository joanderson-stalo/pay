import { DotsNine } from '@phosphor-icons/react';
import * as S from './styled';
export function MyRequestsComponents(){
  return(
    <>
     <S.Wrapper>
     <S.NumberRequests>Número do pedido: #50</S.NumberRequests>
      <S.NumberStatus>Pedido em separação</S.NumberStatus>
     </S.Wrapper>
      <S.ContainerRequests>
          <div>
            <h3>Data do pedido</h3>
            <p>14/04/2023</p>
          </div>
          <S.ButtonRequest><DotsNine /> Detalhes</S.ButtonRequest>
      </S.ContainerRequests>
    </>
  )
}
