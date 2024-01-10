import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { PaginaView } from '@/components/PaginaView/paginaView';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { useLogin } from '@/context/user.login';
import { Loading } from '@/components/Loading/loading';
import { TablePlans } from './components/TablePlans/tablePlans';
import { HeaderPlans } from './components/HeaderPlans/headerPlans';
import { PlansCard } from './Mobile/PlansCard';

interface Plan {
  id: number;
  name: string;
  anticipation: number;
  anticipation_fee: string;
  status: string;
  level_seller: string;
}

interface RowData {
  id: number;
  status: string;
  name: string;
  antecipacao: number;
  planoBase: string;
  fornecedor: string;
  tipo: 'Base' | 'Comercial';
}

export function Plans() {
  const [searchValue, setSearchValue] = useState('');
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState<RowData[]>([]);
  const { dataUser } = useLogin();

  const fetchPlans = async () => {
    setLoading(true);
    const url = `https://api-pagueassim.stalopay.com.br/plan/index?perpage=${itensPorPage}&page=${currentPage}`;

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`,
        },
      });
      const data = await response.json();
      const transformedPlans = data.plans.map((plan: Plan) => ({
        id: plan.id,
        status: plan.status,
        name: plan.name,
        antecipacao: plan.anticipation,
      }));
      setPlans(transformedPlans);
      setTotalPages(data.last_page);
    } catch (error) {
      console.error('Error fetching plans:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, [itensPorPage, currentPage, searchValue]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>

            <HeaderPlans />
     

          <S.Container>
          <TablePlans rows={plans} />

          <S.ContainerCardsMobile >
          <PlansCard cards={plans} />
          </S.ContainerCardsMobile>
         


          <S.Context>
            <S.Linha />
            <S.ContainerPagina>
              <PaginaView totalItens={itensPorPage} />
              <S.ContainerItens>
                <ItensPorPage
                  itensPorPage={itensPorPage}
                  setItensPorPage={setItensPorPage}
                />
                <Pagination
                  onPageClick={fetchPlans}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onNextPage={handleNextPage}
                  onPrevPage={handlePrevPage}
                />
              </S.ContainerItens>
            </S.ContainerPagina>
          </S.Context>


          </S.Container>
  
        </>
      )}
    </>
  );
}
