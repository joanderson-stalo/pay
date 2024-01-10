import { GraficoBar } from "@/components/graficoBar/graficoBar";
import { Card } from "./components/Card/card";
import { GraficoCicle } from "@/components/graficoCicle/graficoCicle";
import * as S from './styled'
import { TopEstabelecimentos } from "./components/TopEstabelecimento/topEstabelecimentos";
import { LatestSales } from "./components/LatestSales/latestSales";
import { CardInfo } from "../Financial/components/CardInfo/cardInfo";


export function ECHome(){
  return(
    <>
    <S.Container>

    <S.ContainerCards>
    <CardInfo label="Comissão" value={435.00} />
    <CardInfo label="Recebível" value={435.00}  />
    <CardInfo  shouldFormat={false} label="Qtd de POs"value={15} />
    <CardInfo shouldFormat={false} label="Qtd de POs"value={15} />
    </S.ContainerCards>



    <S.ContainerGrafico>
    <GraficoCicle pix='5.000,00' credit='6.000,00' debit='2.000,00' />
    <GraficoBar dataArray={['15', '19', '30', '20.88', '20', '30', '70', '80', '50', '10', '20', '15',]} />
    </S.ContainerGrafico>


    <S.ContainerTable>
    <LatestSales />
    <TopEstabelecimentos />
    </S.ContainerTable>




      
    </S.Container>
 
  </>
  )
}