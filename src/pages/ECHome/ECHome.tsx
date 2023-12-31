import { GraficoBar } from "@/components/graficoBar/graficoBar";
import { Card } from "./components/Card/card";
import { GraficoCicle } from "@/components/graficoCicle/graficoCicle";
import * as S from './styled'
import { TopEstabelecimentos } from "./components/TopEstabelecimento/topEstabelecimentos";
import { UltimasVendas } from "./components/UltimasVendas/ultimasVendas";
import { CardUserLogged } from "../UserListLogged/components/Mobile/CardUserLoggerd/cardUserLoggerd";


export function ECHome(){
  return(
    <>
    <S.Container>
    <S.Title>Hoje</S.Title>

    <S.ContainerCards>
    <Card label="Comissão" label2="R$ 435,00" />
    <Card label="Recebível" label2="R$ 216,50" />
    <Card label="Qtd de ECs" label2="15" />
    <Card label="Qtd de POs" label2="15" />
    </S.ContainerCards>



    <S.ContainerGrafico>
    <GraficoCicle pix='5.000,00' credit='6.000,20' debit='2.000,20' />
    <GraficoBar dataArray={['15', '19', '30', '50', '20', '30', '70', '80', '50', '10', '20', '15']} />
    </S.ContainerGrafico>


    <S.ContainerTable>
    <TopEstabelecimentos />
    <UltimasVendas />
    </S.ContainerTable>



<S.MobileContainerGrafico>

<GraficoCicle pix='5.000,00' credit='6.000,20' debit='2.000,20' />
<div>
    <Card label="Comissão" label2="R$ 435,00" />
    <Card label="Recebível" label2="R$ 216,50" />
    <Card label="Qtd de ECs" label2="15" />
    <Card label="Qtd de POs" label2="15" />
    </div>
</S.MobileContainerGrafico>


   <S.MobileContainerTable>
    <UltimasVendas />
   <TopEstabelecimentos />
    <GraficoBar dataArray={['15', '19', '30', '50', '20', '30', '70', '80', '50', '10', '20', '15']} />
   </S.MobileContainerTable>
      
    </S.Container>
 
  </>
  )
}