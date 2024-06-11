import { PaginaView } from '@/components/PaginaView/paginaView';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { CardInfo } from '../../../../components/CardInfo/cardInfo';
import { HeaderTariffs } from './components/HeaderTariffs/headerTariffs';
import { TableTariffs } from './components/TableStock/tableTariffs';
import { TariffsCard } from './Mobile/TariffsCard/tariffsCard';
import { TotalBtn } from '@/components/TotalBtn/totalBtn';
import { baseURL } from '@/config/color';


export function Tariffs() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const { dataUser } = useLogin();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalTariffs, setTotalTariffs] = useState<number>(0);
  const [tariffs, setTariffs] = useState<any[]>([]);
  const [amountDebit, setAmountDebit] = useState<number>(0);
  const [amountCredit, setAmountCredit] = useState<number>(0);

  const fetchData = async (pageNumber: number = currentPage) => {
    setLoading(true);
    let apiUrl = `${baseURL}tariffs/index?perpage=${String(itensPorPage)}&page=${pageNumber}&payable_by=LA`;

    const billingStartDate = localStorage.getItem('@billingStartDate');
    if (billingStartDate && billingStartDate !== 'undefined') {
      apiUrl += `&billing_start_date=${billingStartDate}`;
    }

    const billingEndDate = localStorage.getItem('@billingEndDate');
    if (billingEndDate && billingEndDate !== 'undefined') {
      apiUrl += `&billing_end_date=${billingEndDate}`;
    }


    const billingLicensed = localStorage.getItem('@billingLicensed');
    if (billingLicensed && billingLicensed !== 'undefined') {
      apiUrl += `&responsible_seller_id=${billingLicensed}`;
    }


    const seller_id = localStorage.getItem('@billingEstablishment');
    if (seller_id && seller_id !== 'undefined') {
      apiUrl += `&seller_id=${seller_id}`;
    }



    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dataUser?.token}`
      }
    });
    const { total_tariffs: total, tariffs: data, current_page: page, amount_debit, amount_credit } = response.data;
    setTotalTariffs(total);
    setTariffs(data);
    setCurrentPage(page);
    setAmountDebit(amount_debit);
    setAmountCredit(amount_credit);
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


  const totalPages = Math.ceil(totalTariffs / (itensPorPage || 1));

  useEffect(() => {
    fetchData();
  }, [dataUser, itensPorPage, currentPage]);

  if(loading) {
    return <Loading />
  }

  return (
    <>
          <S.Container>
            <HeaderTariffs />

            <S.ContainerCard>
              <CardInfo  shouldFormat={false} label='Quantidade de Tarifas' value={totalTariffs} />
              <CardInfo  label='Total Crédito' value={amountCredit} />
              <CardInfo  label='Total Débito' value={amountDebit} />
            </S.ContainerCard>

            <S.ContainerButton>
              <TotalBtn total={totalTariffs}/>


            </S.ContainerButton>

            <TableTariffs rows={tariffs} />

            <S.ContainerCardsMobile>
              <TariffsCard data={tariffs} />
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
  );
}
