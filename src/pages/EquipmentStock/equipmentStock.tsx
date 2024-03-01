import { PaginaView } from '@/components/PaginaView/paginaView';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { FunnelSimple } from '@phosphor-icons/react';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { useFilterLicensed } from './hooks/useFilterLicensed';
import { EditableButton } from './components/ButtonEdit/buttonEdit';
import { mockDataTable } from './mock';

import { ModalBilling } from './components/ModalBilling/modalBilling';
import { CardInfo } from '../../components/CardInfo/cardInfo';
import { StockCard } from './Mobile/StockCard/stockCard';
import { TableStock } from './components/TableStock/tableStock';
import { HeaderStock } from './components/HeaderStock/headerStock';
import { TotalBtn } from '@/components/TotalBtn/totalBtn';
import { BtnFilter } from '@/components/BtnFilter/btnFilter';


export function EquipmentStock() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [filter, setFilter] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { state } = useFilterLicensed();
  const { dataUser } = useLogin();
  const [totalSellers, setTotalSellers] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (pageNumber: number = currentPage) => {
    setLoading(true);
    let apiUrl = `https://api-pagueassim.stalopay.com.br/products/index?perpage=${String(itensPorPage)}&page=${pageNumber}`;
    if (searchValue) {
      apiUrl += `&trading_name=${searchValue}`;
    }
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dataUser?.token}`
      }
    });
    setProducts(response.data.products);
    console.log(response.data.products)
    setTotalSellers(response.data.total_products);
    setCurrentPage(response.data.current_page);
    setLoading(false);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleOpenModal = () => {
    setFilter(true);
  };

  const handleCloseModal = () => {
    setFilter(false);
  };

  const totalPages = Math.ceil(totalSellers / (itensPorPage || 1));

  useEffect(() => {

  }, [dataUser, itensPorPage, currentPage]);

  useEffect(() => {
    if (searchValue.trim() === '') {
      fetchData();
    }
  }, [searchValue])


  return (
    <>
      <ModalBilling onClose={handleCloseModal} visible={filter} />
      {loading ? <Loading /> :
        <>
      <S.Container>
      <HeaderStock />

<S.ContainerCard>
<CardInfo  shouldFormat={false} label='Quantidade de POS' value={500}/>
<CardInfo shouldFormat={false} label='POS Estáveis' value={500}/>
<CardInfo shouldFormat={false} label='POS Transacionando' value={500}/>
<CardInfo  shouldFormat={false} label='Média TPV por POS' value={500}/>
</S.ContainerCard>


 <S.ContainerButton>
   <TotalBtn total={totalSellers}/>
   {state ? <EditableButton /> : ''}
   <BtnFilter onClick={handleOpenModal} />
 </S.ContainerButton>



<TableStock rows={products} />

<S.ContainerCardsMobile>
    <StockCard data={mockDataTable} />
</S.ContainerCardsMobile>




 <S.Context>
   <S.Linha />
   <S.ContainerPagina>
     <PaginaView totalItens={itensPorPage} />
     <S.ContainerItens>
       <ItensPorPage itensPorPage={itensPorPage} setItensPorPage={setItensPorPage} />
       <Pagination
         currentPage={currentPage}
         onPageClick={fetchData}
         totalPages={totalPages}
         onNextPage={handleNextPage}
         onPrevPage={handlePrevPage}
       />
     </S.ContainerItens>
   </S.ContainerPagina>
</S.Context>
      </S.Container>


        </>

      }


    </>


  );
}
