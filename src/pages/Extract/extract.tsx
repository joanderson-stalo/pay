
import * as S from './styled';
import { useEffect, useState } from 'react';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { CardInfo } from '../../components/CardInfo/cardInfo';
import { HeaderExtract } from './components/HeaderExtract/headerExtract';
import { TableExtract } from './components/TableExtract/tableExtract';
import { ExtractCardMobile } from './Mobile/ExtractCardMobile/extractCardMobile';
import { baseURL } from '@/config/color';
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal';
import { CustomInput } from '@/components/Input/input';
import { useTenantData } from '@/context';
import { TagFilter } from '@/components/TagFilter/tagFilter';
import { NoteData } from '@/components/NoteData/noteData';

export function Extract() {
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalInAccount, setTotalInAccount] = useState<number>(0);
  const [totalInflows, setTotalInflows] = useState<number>(0);
  const [totalOutflows, setTotalOutflows] = useState<number>(0);
  const [inflowsToday, setInflowsToday] = useState<number>(0);
  const [outflowsToday, setOutflowsToday] = useState<number>(0);
  const [statement, setStatement] = useState<any>({});
  const { dataUser } = useLogin();
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

  const tenantData = useTenantData()

  const fetchData = async () => {
    setLoading(true);
    let apiUrl = `${baseURL}getStatementLA`;

    const startDate = localStorage.getItem('@extractStartDate');
    if (startDate && startDate !== 'undefined') {
      apiUrl += `?startDate=${startDate}`;
    }

    const endDate = localStorage.getItem('@extractEndDate');
    if (endDate && endDate !== 'undefined') {
      apiUrl += `&endDate=${endDate}`;
    }

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      const { total_in_account, total_inflows, total_outflows, inflows_today, outflows_today, statement } = response.data;
      setTotalInAccount(total_in_account);
      setTotalInflows(total_inflows);
      setTotalOutflows(total_outflows);
      setInflowsToday(inflows_today);
      setOutflowsToday(outflows_today);
      setStatement(statement);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);


  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey);
    switch (filterKey) {
      case '@extractStartDate':
        setStartDate('');
        break;
      case '@extractEndDate':
        setEndDate('');
        break;
    }
    fetchData();
  };


  const activeFilters = [
    localStorage.getItem('@extractStartDate') && localStorage.getItem('@extractEndDate') && {
      title: 'Data',
      onClick: () => {
        handleRemoveFilter('@extractStartDate');
        handleRemoveFilter('@extractEndDate');
        setStartDate('');
        setEndDate('');
      }
    }
  ].filter((filter): filter is { title: string; onClick: () => void } => Boolean(filter));

  const handleSaveToLocalStorage = async () => {
    if (startDate) localStorage.setItem('@extractStartDate', startDate)
    if (endDate) localStorage.setItem('@extractEndDate', endDate)

      fetchData()
  }

  if(loading) {
    return <Loading />
  }

  return (

        <>
          <S.Container>
            <HeaderExtract />

            <S.ContainerCard>
              <CardInfo  label='Total em conta' value={totalInAccount}/>
              <CardInfo  label='Total de entradas' value={totalInflows}/>
              <CardInfo  label='Total de saídas' value={totalOutflows}/>
              <CardInfo  label='Entradas hoje' value={inflowsToday}/>
              <CardInfo  label='Saídas hoje' value={outflowsToday}/>
            </S.ContainerCard>


            {Object.keys(statement).length > 0 && (<>

              <S.ContainerButton>
            <BtnFilterModal
  onClick={handleSaveToLocalStorage}
  disabled={
    (!startDate || !endDate || endDate <= startDate)
  }
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

          </BtnFilterModal>

          {activeFilters.length > 0 && (
              <TagFilter filters={activeFilters} />
            )}

            </S.ContainerButton>

            <TableExtract statement={statement} />


            <S.ContainerCardsMobile>
              <ExtractCardMobile  data={statement}/>
            </S.ContainerCardsMobile>

            </>)}



            {Object.keys(statement).length === 0 && (<>

            <>
            <NoteData />

            </>

            </>)}

          </S.Container>
        </>
  );
}
