import { useEffect, useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { useLogin } from '@/context/user.login';
import { TitleH } from '@/components/Title/title';
import { Container, ContainerCards, ContainerCardsMobile, ContainerTitle } from './styled';
import { CardInfo } from '../../../../components/CardInfo/cardInfo';
import { baseURL } from '@/service/api';
import { Loading } from '@/components/Loading/loading';
import { YieldSummaryTable } from './components/YieldSummaryTable/yieldSummaryTable';
import { CardYieldSummary } from './Mobile/CardYieldSummary/cardYieldSummary';
import { OperationSummaryResponse } from './interface';
import { ExportData } from '@/components/ExportData/exportData';
import { NoteData } from '@/components/NoteData/noteData';
import { TranslateErrorMessage } from '@/utils/translateErrorMessage';
import { toast } from 'react-toastify';

export function YieldSummary() {
  const { dataUser } = useLogin();
  const [operationSummary, setOperationSummary] = useState<OperationSummaryResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchOperationSummary = useCallback(async () => {
    try {
      if (dataUser?.token) {
        const response = await axios.get<OperationSummaryResponse>(`${baseURL}operation-summary`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser.token}`,
          },
        });
        setOperationSummary(response.data);
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const errorMessage = err.response?.data?.message || 'Ocorreu um error';
      const translatedMessage = await TranslateErrorMessage(errorMessage);
      toast.error(translatedMessage);
    } finally {
      setLoading(false);
    }
  }, [dataUser?.token]);

  useEffect(() => {
    fetchOperationSummary();
  }, [fetchOperationSummary]);

  const transactionsFromCommissionsByAcquire = operationSummary?.commissions_by_acquire
    ? Object.entries(operationSummary.commissions_by_acquire).map(([key, value]) => ({
        fornecedor: key,
        qtdTransacoes: value.transaction_count,
        tpv: value.transaction_amount_sum,
        aReceber: value.receivable,
        aPagar: value.payable,
        lucro: value.profit,
      }))
    : [];

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <ContainerTitle>
        <TitleH title='Resumo de rendimentos ' />
        <ExportData title="Exportar dados" onClick={() => false} />
      </ContainerTitle>

      <ContainerCards>
        <CardInfo label='TPV' value={parseFloat(operationSummary?.transactions_TPV || '0')} />
        <CardInfo label='Total recebido' value={parseFloat(operationSummary?.receivable || '0')} />
        <CardInfo label='A pagar' value={parseFloat(operationSummary?.payable || '0')} />
        <CardInfo label='Lucro final' value={parseFloat(operationSummary?.profit || '0')} />
      </ContainerCards>

      {transactionsFromCommissionsByAcquire.length > 0 && (
        <>
          <YieldSummaryTable
            rows={transactionsFromCommissionsByAcquire.map((transaction, index) => ({ ...transaction, id: index }))}
          />

          <ContainerCardsMobile>
            <CardYieldSummary
              transactions={transactionsFromCommissionsByAcquire.map((transaction, index) => ({ ...transaction, id: index }))}
            />
          </ContainerCardsMobile>
        </>
      )}

      {transactionsFromCommissionsByAcquire.length === 0 && (
        <NoteData />
      )}
    </Container>
  );
}
