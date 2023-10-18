
import { GraficoCicle } from '@/components/graficoCicle/graficoCicle'
import { DetalhesTable } from './components/detalhesTable/detalhesTable'
import { HistoricoTable } from './components/historicoTable/historicoTable'
import * as S from './styled'
import { GraficoBar } from '@/components/graficoBar/graficoBar'
import { Pagination } from '@/components/Pagination/pagination'
import { useNavigate } from 'react-router-dom'
import { useEstablishmentDetail } from '@/hooks/useEstablishmentDetail'
import { CaretLeft } from '@phosphor-icons/react'

export function EstablishmentDetail(){

  const navigate = useNavigate();
  const {detailNumber} = useEstablishmentDetail()

  const navigateToManageAccessLicensed = () => {
    navigate('/manageAccessEstablishment');
  }

  const navigateToEditRegistrationLA = () => {
    navigate('/editRegistrationEC');
}


console.log('oii', detailNumber);


  const fetchData = async (pageNumber: number) => {

    console.log(`Fetching data for page ${pageNumber}`)
  }

  const handleNextPage = (pageNumber: number) => {
    fetchData(pageNumber)
  }

  const handlePrevPage = (pageNumber: number) => {
    fetchData(pageNumber)
  }

  const handEstabelecimentos = () => {
    navigate('/estabelecimentos')
  }


  return(
      <>
       <S.ButtonBlack onClick={handEstabelecimentos}><CaretLeft size={18} />Voltar</S.ButtonBlack>
        <S.ContainerInfo>
      <S.Title>Padaria Trevo 4 Folhas <span>| 03.458.698/0001-96</span></S.Title>
      <S.ContainerButton>
        <S.ButtonVisualizar>Visualizar como</S.ButtonVisualizar>
        <S.EditarCadastro onClick={navigateToEditRegistrationLA}>Editar cadastro</S.EditarCadastro>
      </S.ContainerButton>
    </S.ContainerInfo>


    <S.ContainerGrafico>
      <GraficoCicle credit='6.000,20' debit='2.000,20' />
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

        <S.ContainerHits>
        <S.ButtonHits onClick={navigateToManageAccessLicensed}>Gerenciar acessos</S.ButtonHits>
        </S.ContainerHits>
      </>
  )
}
