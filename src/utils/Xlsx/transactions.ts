import * as XLSX from 'xlsx';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseURL } from '@/config/color';

const formatDateAndTime = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  return {
    formattedDate: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    formattedTime: date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  };
};

const formatValue = (value: string) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(value));
};

const formatStatus = (status: string) => {
  return status === 'succeeded' ? 'sucesso' : 'falha';
};

const formatPaymentType = (paymentType: 'credit' | 'debit'): string => {
  return paymentType === 'credit' ? 'crédito' : 'débito';
};

export const TransactionsToExcel = async (token: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    let allTransactions: any[] = [];
    let currentPage = 1;
    let totalPages = 1;

    do {
      const response = await axios.get( `${baseURL}transactions?per_page=1000000000000000000000000`, { headers });
      const { data } = response;
      totalPages = data.last_page;
      allTransactions = allTransactions.concat(data.transactions);
      currentPage++;
    } while (currentPage <= totalPages);

    const formattedData = allTransactions.map((transaction) => {
      const { formattedDate, formattedTime } = formatDateAndTime(transaction.captured_in);
      return {
        'ID': transaction.id,
        'Data': formattedDate,
        'Hora': formattedTime,
        'Estabelecimento': transaction.seller_company_name,
        'Fornecedor': transaction.acquire_label,
        'Documento': transaction.seller_document,
        'Status': formatStatus(transaction.status),
        'Valor Bruto': formatValue(transaction.amount),
        'Valor Liquido': formatValue(transaction.net_amount),
        'Forma de Pagamento': formatPaymentType(transaction.payment_type),
        'Parcelas': transaction.number_installments,
        'Bandeira': transaction.brand,
        'SN': transaction.equipment_sn,
        'NSU': transaction.nsu_internal,
        'Antecipado': transaction.is_anteciped === 0 ? 'sim' : 'não'
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');

    const timestamp = new Date().getTime();
    const filename = `vendas_${timestamp}.xlsx`;

    XLSX.writeFile(workbook, filename);
  } catch (error) {
    toast.error('Ocorreu um erro ao exportar as transações. Por favor, tente novamente mais tarde.');
  }
};





