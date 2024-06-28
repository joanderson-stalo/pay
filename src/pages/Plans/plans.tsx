import { useCallback, useEffect, useState } from 'react';
import * as S from './styled';
import { PaginaView } from '@/components/PaginaView/paginaView';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { useLogin } from '@/context/user.login';
import { Loading } from '@/components/Loading/loading';
import { TablePlans } from './components/TablePlans/tablePlans';
import { HeaderPlans } from './components/HeaderPlans/headerPlans';
import { PlansCard } from './Mobile/PlansCard';

import { baseURL } from '@/config/color';
import { MagnifyingGlass } from '@phosphor-icons/react';
import axios from 'axios';
import { NoteData } from '@/components/NoteData/noteData';

interface Plan {
  id: number;
  name: string;
  anticipation: number;
  anticipation_fee: string;
  status: string;
  level_seller: string;
  plan_id_base: string;
  acquires: string[];
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
  const [isFocused, setIsFocused] = useState(false)
  const { dataUser } = useLogin();
  const [triggerSearch, setTriggerSearch] = useState(false);

  const fetchPlans = useCallback(
    async (search?: string) => {
      setLoading(true);

      let url = `${baseURL}plan/index?perpage=${itensPorPage}&page=${currentPage}`;

      if (search) {
        url += `&name=${searchValue}`;
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      };

      try {
        const response = await axios.get(url, config);
        const transformedPlans = response.data.plans.map((plan: Plan) => ({
          id: plan.id,
          status: plan.status,
          name: plan.name,
          antecipacao: plan.anticipation,
          tipo: plan.level_seller,
          fornecedor: plan.acquires,
          planoBase: plan.plan_id_base,
        }));
        setPlans(transformedPlans);
        setTotalPages(response.data.last_page);
      } catch (error) {

      } finally {
        setLoading(false);
      }
    },
    [itensPorPage, currentPage, baseURL, dataUser?.token, searchValue]
  );

  useEffect(() => {
    if (searchValue.trim() === '') {
      fetchPlans(searchValue);
    }
  }, [fetchPlans, searchValue]);

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

  const fetchData = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value)
  }

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      setTriggerSearch(current => !current);
      if (currentPage !== 1) {
        setCurrentPage(1);
      }
    }
  };

  useEffect(() => {
    if (searchValue.trim() !== '' && triggerSearch) {
      fetchPlans(searchValue);
      setTriggerSearch(false);
    }
  }, [searchValue, currentPage, triggerSearch, fetchPlans]);

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <S.Container>
        <HeaderPlans />

        {plans.length > 0 && (
          <>
            <S.Input isFocused={isFocused}>
              <input
                type="text"
                placeholder="Pesquise por nome do estabelecimento"
                value={searchValue}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <S.SearchIcon isFocused onClick={handleSearch}>
                <MagnifyingGlass />
              </S.SearchIcon>
            </S.Input>

            <TablePlans rows={plans} />

            <S.ContainerCardsMobile>
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
                    onPageClick={fetchData}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNextPage={handleNextPage}
                    onPrevPage={handlePrevPage}
                  />
                </S.ContainerItens>
              </S.ContainerPagina>
            </S.Context>
          </>
        )}

        {plans.length === 0 && (
            <NoteData />
        )}
      </S.Container>
    </>
  );
}
