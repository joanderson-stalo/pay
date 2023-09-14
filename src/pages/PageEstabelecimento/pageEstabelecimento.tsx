
import { GraficoCicle } from '@/components/graficoCicle/graficoCicle'
import { DetalhesTable } from './components/detalhesTable/detalhesTable'
import { HistoricoTable } from './components/historicoTable/historicoTable'
import * as S from './styled'
import { GraficoBar } from '@/components/graficoBar/graficoBar'
import { Pagination } from '@/components/Pagination/pagination'
import {EditableButton} from '@/components/ButtonEdit/buttonEdit'

export function PageEstabelecimento(){
  const fazerRequisicao = (valor: number) => {
    console.log(`Requisição feita com o valor ${valor}`);
  };

  const fetchData = async (pageNumber: number) => {

    console.log(`Fetching data for page ${pageNumber}`)
  }

  const handleNextPage = (pageNumber: number) => {
    fetchData(pageNumber)
  }

  const handlePrevPage = (pageNumber: number) => {
    fetchData(pageNumber)
  }



  return(
      <>
        <S.ContainerInfo>
      <S.Title>Padaria Trevo 4 Folhas <span>| 03.458.698/0001-96</span></S.Title>
      <S.ContainerButton>
        <S.ButtonVisualizar>Visualizar como</S.ButtonVisualizar>
        <S.EditarCadastro>Editar cadastro</S.EditarCadastro>
      </S.ContainerButton>
    </S.ContainerInfo>


    <S.ContainerGrafico>
      <GraficoCicle credit='600,20' debit='200,20' />
      <div style={{width: '510px', height: '20px'}}>
      <GraficoBar dataArray={['15', '19', '30', '50', '20', '30', '70', '80', '50', '10', '20', '15']} />
      </div>
    </S.ContainerGrafico>

        <S.ContainerTable>
          <DetalhesTable />
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
          <HistoricoTable />
          <Pagination
          currentPage={1}
        onPageClick={fetchData}
        totalPages={10}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
          </div>
        </S.ContainerTable>
      </>
  )
}
