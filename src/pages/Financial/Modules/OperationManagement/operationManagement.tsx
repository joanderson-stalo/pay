import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useLogin } from '@/context/user.login';
import { OperationManagementTable } from './components/OperationManagementTable/operationManagementTable';
import { CardOperationSummary } from './Mobile/CardOperationSummary/cardOperationSummary';
import { TitleH } from '@/components/Title/title';
import { Container, ContainerCards, ContainerCardsMobile } from './styled';
import { CardInfo } from '../../../../components/CardInfo/cardInfo';
import { mockRows } from './mock';

import { useTenantData } from '@/context';
import { baseURL } from '@/config/color';
import { Loading } from '@/components/Loading/loading';

interface CommissionData {
  la_document: string;
  la_trading_name: string;
  commission: string;
  commission_count: number;
}

interface CommissionSummary {
  [key: string]: CommissionData;
}

interface OperationSummaryResponse {
  status: number;
  success: boolean;
  transactions_TPV: string;
  payable: string;
  receivable: string;
  profit: string;
  commissions_by_acquire: {
    [key: string]: {
      payable: string;
      receivable: string;
      profit: string;
      transaction_count: number;
      transaction_amount_sum: string;
    };
  };
  commissions_by_receiver: CommissionSummary;
}

export function OperationManagement() {
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
      console.error('Erro ao fazer a solicitação GET:', error);
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
      <TitleH title='Resumo de rendimentos ' />
      <ContainerCards>
        <CardInfo label='TPV' value={parseFloat(operationSummary?.transactions_TPV || '0')} />
        <CardInfo label='Total recebido' value={parseFloat(operationSummary?.receivable || '0')} />
        <CardInfo label='A pagar' value={parseFloat(operationSummary?.payable || '0')} />
        <CardInfo label='Lucro final' value={parseFloat(operationSummary?.profit || '0')} />
      </ContainerCards>

      <OperationManagementTable
        rows={transactionsFromCommissionsByAcquire.map((transaction, index) => ({ ...transaction, id: index }))}
      />

      <ContainerCardsMobile>
        <CardOperationSummary
          transactions={transactionsFromCommissionsByAcquire.map((transaction, index) => ({ ...transaction, id: index }))}
        />
      </ContainerCardsMobile>
    </Container>
  );
}

