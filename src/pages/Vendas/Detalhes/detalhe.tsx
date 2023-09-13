import { CardDetalhes } from "./components/CardDetalhes/cardDetalhes";
import { CardInfo } from "./components/CardInfo/cardInfo";
import { CardInfo2 } from "./components/CardInfo2/cardInfo2";
import { ComissoesTable } from "./components/ComissoesTable/comissoesTable";
import { HistoricoTableDetalhes } from "./components/historicoTableDetalhes/historicoTableDetalhes";
import * as S from "./styled";




export function Detalhe(){
  return(
    <>
      <S.ContainerDetalhe>
      <S.ContextDetalhes>
      <CardDetalhes />

<S.SectionCard>
  <CardInfo />
  <CardInfo2 />
</S.SectionCard>


<S.SectionTable>
<ComissoesTable />
<HistoricoTableDetalhes />
</S.SectionTable>


      </S.ContextDetalhes>
      </S.ContainerDetalhe>
    </>
  )
}
