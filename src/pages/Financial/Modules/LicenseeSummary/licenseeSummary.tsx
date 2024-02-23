import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { SalesSummaryTable } from './components/salesSummaryTable/salesSummaryTable';
import { ConsultarBtn, Container, ContainerCards, ContainerCardsMobile, ContainerSelect, ExportarBtn, Title } from './styled';
import { CustomSelect } from '@/components/Select/select';
import { CardInfo } from '../../../../components/CardInfo/cardInfo';
import * as XLSX from 'xlsx';
import { mockRows, mockTotals } from './mock';
import { toast } from 'react-toastify';
import { optionsData, optionsMeses } from './data';
import Swal from 'sweetalert2';
import {NoDataFound} from '@/components/NoDataFound/noDataFound';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLogin } from '@/context/user.login';
import { OperationSummaryCard } from './mobile/operationSummaryCard/operationSummaryCard ';
import { OperationsSummaryList } from './mobile/operationSummaryCard/operationsSummaryList';
import { OperationTotalCard } from './mobile/operationTotalCard/operationTotalCard';



const schema = Yup.object().shape({
  licenciado: Yup.string().required('Licenciado é obrigatório'),
  mesReferencia: Yup.string().required('Mês de referência é obrigatório'),
  anoReferencia: Yup.string().required('Ano de referência é obrigatório'),
});

type FormValues = {
  licenciado: string;
  mesReferencia: string;
  anoReferencia: string;
};

export function LicenseeSummary() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });

  const { dataUser } = useLogin();
  const [fetchedOptions, setFetchedOptions] = useState([]);


  const fetchData = async () => {
    try {
      const response = await axios.get('https://api-pagueassim.stalopay.com.br/seller/indexla', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dataUser?.token}`
        }
      });

      const data = response.data;

      if (data && data.sellers) {
        console.log(data.sellers.trading_name)
        const options = data.sellers.map((seller: { trading_name: any; type: any; id: any, cnpj_cpf: any }, index: number) => ({
          value: seller.id,
          label: `${seller.trading_name}-${seller.type}-${seller.cnpj_cpf}`
        }));

        setFetchedOptions(options);
      }
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
    const spacer = { id: '', fornecedor: '', meta: '', tpv: '', gap: '', comissao: '' };
    const totalsWithLabel = { ...mockTotals, fornecedor: 'Total' };
    const dataToExport = [...mockRows, spacer, totalsWithLabel];
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SalesSummary');
    XLSX.writeFile(workbook, 'SalesSummary.xlsx');
  };

  const isTotalsEmpty = Object.keys(mockTotals).length === 0 || Object.keys(mockRows).length === 0;

  return (
<>
{isTotalsEmpty  && <NoDataFound onReload={() => false} />}

{!isTotalsEmpty &&
<>
<form onSubmit={handleSubmit(onSubmit, onError)}>
      <Container>

        <Title>Resumo dos Licenciados</Title>

        <ContainerSelect>
          <CustomSelect {...register("licenciado")}  optionsData={{ options: fetchedOptions }} label="Licenciado"
            onChange={(selectedOption: { value: string }) => setValue('licenciado', selectedOption.value)}
            hasError={errors.licenciado ? true : false}
            placeholder='Licenciado'
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
          <CardInfo label='Comissão - Nota fiscal' value={500} />
          <CardInfo label='Tarifas' value={500} />
          <CardInfo label='A receber' value={500} />
        </ContainerCards>

        <SalesSummaryTable rows={mockRows} totals={mockTotals} />

     <ContainerCardsMobile>
        <OperationsSummaryList transactions={mockRows}  />
        <OperationTotalCard {...mockTotals} />
     </ContainerCardsMobile>



      </Container>
    </form>

</>

}
</>
  );
}
