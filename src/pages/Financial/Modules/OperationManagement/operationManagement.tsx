import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ConsultarBtn, Container, ContainerCards, ContainerCardsMobile, ContainerItens, ContainerPagina, ContainerSelect, ExportarBtn, Linha, Title } from './styled';
import { CustomSelect } from '@/components/Select/select';
import { CardInfo } from '../../components/CardInfo/cardInfo';
import * as XLSX from 'xlsx';
import { mockRows } from './mock';
import { optionsData, optionsMeses } from './data';
import Swal from 'sweetalert2';
import {NoDataFound} from '@/components/NoDataFound/noDataFound';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLogin } from '@/context/user.login';
import { OperationManagementTable } from './components/OperationManagementTable/operationManagementTable';
import { ManagementTable } from './components/ManagementTable/managementTable';
import { mockRowsMock } from './dataManagementTable';
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage';
import { Pagination } from '@/components/Pagination/pagination';
import { PaginaView } from '@/components/PaginaView/paginaView';
import { CardOperationSummary } from './Mobile/CardOperationSummary/cardOperationSummary';
import { CardSummaryOperation } from './Mobile/CardSummaryOperation/cardSummaryOperation';


const schema = Yup.object().shape({
  fornecedor: Yup.string().required('Fornecedor é obrigatório'),
  mesReferencia: Yup.string().required('Mês de referência é obrigatório'),
  anoReferencia: Yup.string().required('Ano de referência é obrigatório'),
});

type FormValues = {
  fornecedor: string;
  mesReferencia: string;
  anoReferencia: string;
};

export function OperationManagement() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });

  const { dataUser } = useLogin();
  const [fetchedOptions, setFetchedOptions] = useState([]);


  const fetchData = async () => {
    try {
      const response = await axios.get('https://api-pagueassim.stalopay.com.br/acquire/index', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });
  
      const data = response.data;
      const options = data.acquires.map((acquire: { acquire_label: any; id: { toString: () => any; }; }) => ({
        label: acquire.acquire_label,
        value: acquire.id.toString() 
      }));
  
      setFetchedOptions(options);
      console.log('aq',data.acquires
)
  
    } catch (error) {
      console.error('Houve um erro ao buscar os dados:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  

  const onSubmit = (data: FormValues) => {
    console.log(data)
  };
  

  const onError = (errors: Record<string, any>) => {
    Swal.fire({
      title: 'Erro!',
      text: 'Por favor, preencha todos os campos obrigatórios.',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  };
  

  const handleExport = () => {
    const spacer = { id: '', Documento: '', Licenciado: '', Fornecedor: '', QtdTransações: '', TPV: '', Comissão: '', Lucro: '', Tarifas: '' };
    const dataToExport = [...mockRowsMock, spacer];
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Summary');
    XLSX.writeFile(workbook, 'Summary.xlsx');
  };
  

  const isTotalsEmpty = Object.keys(mockRows).length === 0;

  return (
<>
{isTotalsEmpty  && <NoDataFound onReload={() => false} />}

{!isTotalsEmpty && 
<>
<form onSubmit={handleSubmit(onSubmit, onError)}>
      <Container>

        <Title>Resumo da Operação</Title>

        <ContainerSelect>
          <CustomSelect {...register("fornecedor")}  optionsData={{ options: fetchedOptions }} label="Fornecedor"
            onChange={(selectedOption: { value: string }) => setValue('fornecedor', selectedOption.value)}
            hasError={errors.fornecedor ? true : false}
            placeholder='Fornecedor'
          />
         
          <CustomSelect {...register("mesReferencia")} optionsData={optionsMeses} label="Mês de referência"
            onChange={(selectedOption: { value: string }) => setValue('mesReferencia', selectedOption.value)}
            hasError={errors.mesReferencia ? true : false}
            placeholder='Mês'
          />
          <CustomSelect {...register("anoReferencia")} optionsData={optionsData} label="Ano  referência"
            onChange={(selectedOption: { value: string }) => setValue('anoReferencia', selectedOption.value)}
            hasError={errors.anoReferencia ? true : false}
            placeholder='Ano'
          />
          <ConsultarBtn type="submit">Consultar</ConsultarBtn>
          <ExportarBtn type="button" onClick={handleExport}>Exportar Dados</ExportarBtn>
        </ContainerSelect>

        <ContainerCards>
          <CardInfo label='TPV' value={500} />
          <CardInfo label='A receber' value={500} />
          <CardInfo label='A pagar' value={500} />
          <CardInfo label='Lucro' value={500} />
        </ContainerCards>

        <OperationManagementTable rows={mockRows} />
        <ManagementTable rows={mockRowsMock} />
   
        <ContainerCardsMobile>

           <CardOperationSummary transactions={mockRows} />
            <CardSummaryOperation transactions={mockRowsMock} /> 
        </ContainerCardsMobile>


        <Linha />
            <ContainerPagina>
              <PaginaView totalItens={5}  />
              <ContainerItens>
                <ItensPorPage
                  itensPorPage={5}
                  setItensPorPage={() => false}
                />
                <Pagination
            currentPage={1}
            totalPages={5}
            onNextPage={() => true}
            onPageClick={() => false}
            onPrevPage={() => false}

                />
              </ContainerItens>
            </ContainerPagina>



     


      </Container>
    </form>

</>

}
</>
  );
}
