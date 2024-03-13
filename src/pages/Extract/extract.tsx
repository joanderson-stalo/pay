
import * as S from './styled';
import { useEffect, useState } from 'react';
import { FunnelSimple } from '@phosphor-icons/react';
import { useLogin } from '@/context/user.login';
import axios from 'axios';
import { Loading } from '@/components/Loading/loading';
import { useFilterLicensed } from './hooks/useFilterLicensed';
import { EditableButton } from './components/ButtonEdit/buttonEdit';
import { CardInfo } from '../../components/CardInfo/cardInfo';
import { ModalExtract } from './components/ModalExtract/modalExtract';
import { HeaderExtract } from './components/HeaderExtract/headerExtract';
import { TableExtract } from './components/TableExtract/tableExtract';
import { ExtractCardMobile } from './Mobile/ExtractCardMobile/extractCardMobile';
import { TotalBtn } from '@/components/TotalBtn/totalBtn';
import { BtnFilter } from '@/components/BtnFilter/btnFilter';
import { baseURL } from '@/config/color';

export function Extract() {
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalInAccount, setTotalInAccount] = useState<number>(0);
  const [totalInflows, setTotalInflows] = useState<number>(0);
  const [totalOutflows, setTotalOutflows] = useState<number>(0);
  const [inflowsToday, setInflowsToday] = useState<number>(0);
  const [outflowsToday, setOutflowsToday] = useState<number>(0);
  const [statement, setStatement] = useState<any>({});
  const { state } = useFilterLicensed();
  const { dataUser } = useLogin();
 
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
      console.error('Erro ao buscar os dados do extrato:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = () => {
    setFilter(true);
  };

  const handleCloseModal = () => {
    setFilter(false);
  };

  useEffect(() => {
    fetchData();
  }, [state]); 

  return (
    <>
      <ModalExtract onClose={handleCloseModal} visible={filter} />
      {loading ? <Loading /> :
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
         
            <S.ContainerButton>
           <TotalBtn total='' />.  
              {state ? <EditableButton /> : ''}
              <BtnFilter onClick={handleOpenModal} />
            </S.ContainerButton>

            <TableExtract statement={statement} />


            <S.ContainerCardsMobile>
              <ExtractCardMobile  data={statement}/>
            </S.ContainerCardsMobile>
          </S.Container>
        </>
      }
    </>
  );
}
