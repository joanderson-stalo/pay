

import { PaginaView } from '@/components/PaginaView/paginaView';
import { EstabelecimentoHeader } from './components/estabelecimentoHeader/estabelecimentoHeader';
import { Tabela } from './components/table/table';
import { tableRows } from './data';
import * as S from './styled';
import { useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { FunnelSimple } from '@phosphor-icons/react';
import { ModalFilter } from './components/ModalFilter/modalSucesso';

export function Estabelecimento() {

  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [filter, setFilter] = useState(false)

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

  const handleOpenModal = () => {
    setFilter(true)
  }

  const handleCloseModal = () => {
    setFilter(false)
  }



  return (
    <>
    <ModalFilter onClose={handleCloseModal}  visible={filter} />
      <EstabelecimentoHeader />
      <S.ContainerButton>
        <S.ButtonTotal>Todos (150)</S.ButtonTotal>
        <S.ButtonFilter onClick={handleOpenModal}> <FunnelSimple />Filtrar</S.ButtonFilter>
      </S.ContainerButton>
      <Tabela rows={tableRows} />

      <S.Context>
      <S.Linha />
      <S.ContainerPagina>
        <PaginaView totalItens={itensPorPage} />
        <S.ContainerItens>
        <ItensPorPage itensPorPage={itensPorPage} setItensPorPage={setItensPorPage} fazerRequisicao={fazerRequisicao} />
        <Pagination
        onPageClick={fetchData}
        totalPages={10}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
        </S.ContainerItens>
      </S.ContainerPagina>
      </S.Context>
    </>
  );
}
