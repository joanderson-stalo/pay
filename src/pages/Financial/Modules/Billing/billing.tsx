import { PaginaView } from '@/components/PaginaView/paginaView';
import * as S from './styled';
import { SetStateAction, useEffect, useState } from 'react';
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
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal';
import { CustomInput } from '@/components/Input/input';
import { useTenantData } from '@/context';
import { TagFilter } from '@/components/TagFilter/tagFilter';
import { CustomSelect } from '@/components/Select/select';


export function Billing() {
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

  const fetchData = async (pageNumber: number = currentPage) => {
    setLoading(true);
    let apiUrl = `${baseURL}tariffs/index?perpage=${String(itensPorPage)}&page=${pageNumber}&payable_by=EC`;

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
        const options = data.sellers.map((seller: { trading_name: any; type: any; id: any, cnpj_cpf: any }, index: number) => ({
          value: seller.id,
          label: `${seller.trading_name}-${seller.type}-${seller.cnpj_cpf}`
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
    await   setCurrentPage(1)
    await localStorage.setItem('@billingStartDate', startDate)
    await localStorage.setItem('@billingEndDate', endDate)
    await localStorage.setItem('@billingLicensed', selectedLicenciado)
    await localStorage.setItem('@billingEstablishment', selectedEstablishment)
    fetchData();
  }



  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey);
    switch (filterKey) {
      case '@billingStartDate':
        setStartDate('');
        break;
      case '@billingEndDate':
        setEndDate('');
        break;
      case '@billingLicensed':
        setSelectedLicenciado('');
        break;
      case '@billingEstablishment':
        setSelectedEstablishment('');
        break;
    }
    fetchData();
  };


  const activeFilters = [
    localStorage.getItem('@billingStartDate') && localStorage.getItem('@billingEndDate') && {
      title: 'Data',
      onClick: () => {
        handleRemoveFilter('@billingStartDate');
        handleRemoveFilter('@billingEndDate');
        setStartDate('');
        setEndDate('');
      }
    },
    localStorage.getItem('@billingLicensed') && {
      title: 'Licenciado',
      onClick: () => {
        handleRemoveFilter('@billingLicensed');
        setSelectedLicenciado('');
      }
    },
    localStorage.getItem('@billingEstablishment') && {
      title: 'Estabelecimento',
      onClick: () => {
        handleRemoveFilter('@billingEstablishment');
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
              <TotalBtn total={totalTariffs}/>

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
