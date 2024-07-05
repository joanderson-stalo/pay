import { PaginaView } from '@/components/PaginaView/paginaView';
import * as S from './styled';
import { SetStateAction, useCallback, useEffect, useState } from 'react';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { CardInfo } from '../../../../components/CardInfo/cardInfo';
import { HeaderTariffs } from './components/HeaderTariffs/headerTariffs';
import { TableTariffs } from './components/TableStock/tableTariffs';
import { TariffsCard } from './Mobile/TariffsCard/tariffsCard';

import { baseURL } from '@/service/api';
import { TagFilter } from '@/components/TagFilter/tagFilter';
import { CustomSelect } from '@/components/Select/select';
import { CustomInput } from '@/components/Input/input';
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal';
import { useTenantData } from '@/context';
import { NoteData } from '@/components/NoteData/noteData';


export function Tariffs() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10);
  const { dataUser } = useLogin();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalTariffs, setTotalTariffs] = useState<number>(0);
  const [tariffs, setTariffs] = useState<any[]>([]);
  const [amountDebit, setAmountDebit] = useState<number>(0);
  const [amountCredit, setAmountCredit] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [fetchedOptions, setFetchedOptions] = useState([]);
  const [fetchedOptionsEC, setFetchedOptionsEC] = useState([]);
  const [selectedLicenciado, setSelectedLicenciado] = useState<string>( '');
  const [selectedEstablishment, setSelectedEstablishment] = useState<string>('');
  const tenantData = useTenantData()

  const fetchData = useCallback(async (pageNumber: number = currentPage) => {
    setLoading(true);
    let apiUrl = `${baseURL}tariffs/index?per_page=${String(itensPorPage)}&page=${pageNumber}&payable_by=LA`;

    const billingStartDate = localStorage.getItem('@tariffsStartDate');
    const billingEndDate = localStorage.getItem('@tariffsEndDate');
    const billingLicensed = localStorage.getItem('@tariffsLicensed');
    const seller_id = localStorage.getItem('@tariffsEstablishment');

    if (billingStartDate && billingStartDate !== 'undefined') {
      apiUrl += `&billing_start_date=${billingStartDate}`;
    }

    if (billingEndDate && billingEndDate !== 'undefined') {
      apiUrl += `&billing_end_date=${billingEndDate}`;
    }

    if (billingLicensed && billingLicensed !== 'undefined') {
      apiUrl += `&responsible_seller_id=${billingLicensed}`;
    }

    if (seller_id && seller_id !== 'undefined') {
      apiUrl += `&seller_id=${seller_id}`;
    }

    try {
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
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [currentPage, itensPorPage, baseURL, dataUser?.token]);


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
  }, [fetchData]);



  const fetchLA = async () => {
    try {
      const response = await axios.get(`${baseURL}seller/indexla`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      const data = response.data;

      if (data && data.sellers) {
        const options = data.sellers.map((seller: { trading_name: any; type: any; id: any, document: any }, index: number) => ({
          value: seller.id,
          label: `${seller.trading_name}-${seller.type}-${seller.document}`
        }));

        setFetchedOptions(options);
      }
    } catch (error) {

    }
  };


  const fetchDataEC = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}seller/indexec`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
      const data = response.data.sellers;
      if (data) {
        const options = data.map((seller: { id: any; company_name: any; }) => ({
          value: seller.id,
          label: seller.company_name
        }));
        setFetchedOptionsEC(options);
      }
    } catch (error: any) {

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLA();
    fetchDataEC();
  }, []);

  const handleSaveToLocalStorage = async () => {
    if(currentPage !== 1) {
      await   setCurrentPage(1)
    }

    await localStorage.setItem('@tariffsStartDate', startDate)
    await localStorage.setItem('@tariffsEndDate', endDate)
    await localStorage.setItem('@tariffsLicensed', selectedLicenciado)
    await localStorage.setItem('@tariffsEstablishment', selectedEstablishment)

    if(currentPage === 1) {
      fetchData();
    }

  }



  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey);
    switch (filterKey) {
      case '@tariffsStartDate':
        setStartDate('');
        break;
      case '@tariffsEndDate':
        setEndDate('');
        break;
      case '@tariffsLicensed':
        setSelectedLicenciado('');
        break;
      case '@tariffsEstablishment':
        setSelectedEstablishment('');
        break;
    }
    fetchData();
  };


  const activeFilters = [
    localStorage.getItem('@tariffsStartDate') && localStorage.getItem('@tariffsEndDate') && {
      title: 'Data',
      onClick: () => {
        handleRemoveFilter('@tariffsStartDate');
        handleRemoveFilter('@tariffsEndDate');
        setStartDate('');
        setEndDate('');
      }
    },
    localStorage.getItem('@tariffsLicensed') && {
      title: 'Licenciado',
      onClick: () => {
        handleRemoveFilter('@tariffsLicensed');
        setSelectedLicenciado('');
      }
    },
    localStorage.getItem('@tariffsEstablishment') && {
      title: 'Estabelecimento',
      onClick: () => {
        handleRemoveFilter('@tariffsEstablishment');
        setSelectedEstablishment('');
      }
    }

  ].filter((filter): filter is { title: string; onClick: () => void } => Boolean(filter));

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



<BtnFilterModal
onClick={handleSaveToLocalStorage}
disabled={(!startDate || !endDate || endDate <= startDate) && !selectedLicenciado && !selectedEstablishment}
>

<CustomInput
  colorInputDefault={tenantData.primary_color_identity}
  colorInputSuccess={tenantData.secondary_color_identity}
  type="date"
  label="Data inicial"
  value={startDate}
  hasError={!!endDate && startDate > endDate}
  onChange={event => setStartDate(event.target.value)}
/>
<CustomInput
  colorInputDefault={tenantData.primary_color_identity}
  colorInputSuccess={tenantData.secondary_color_identity}
  type="date"
  label="Data final"
  value={endDate}
  hasError={!!startDate && (endDate <= startDate || !endDate)}
  onChange={event => setEndDate(event.target.value)}
/>

<CustomSelect
      optionsData={{ options: fetchedOptions }}
      placeholder="Digite aqui ou clique para ver a lista"
      label="Licenciado Autorizado"
      onChange={(selectedOption: { value: SetStateAction<string> }) =>
        setSelectedLicenciado(selectedOption.value)
      }
    />


<CustomSelect
      optionsData={{ options: fetchedOptionsEC }}
      placeholder="Digite aqui ou clique para ver a lista"
      label="Estabelecimento"
      onChange={(selectedOption: { value: SetStateAction<string> }) =>
        setSelectedEstablishment(selectedOption.value)
      }
    />


</BtnFilterModal>
{activeFilters.length > 0 && (
<TagFilter filters={activeFilters} />
)}

</S.ContainerButton>





            {tariffs.length > 0 && (<>

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

            </>)}

            {tariffs.length === 0 && (<>
              <NoteData />

            </>)}

          </S.Container>
        </>
  );
}
