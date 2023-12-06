import * as XLSX from 'xlsx';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { Transaction } from '@/pages/Vendas/components/table/interface';


const formatDateAndTime = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });
  const formattedTime = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
  return { formattedDate, formattedTime };
};

const formatValue = (value: string) => {
  return formatCurrencyBR(parseFloat(value));
};

const formatStatus = (status: string) => {
  return status === 'succeeded' ? 'sucesso' : 'falha';
};

export const TransactionsToExcel = (transactions: Transaction[]) => {
  const formattedData = transactions.map((transaction) => {
    const { formattedDate, formattedTime } = formatDateAndTime(transaction.captured_in);
    return {
      'Data': formattedDate,
      'Hora': formattedTime,
      'NSU': transaction.nsu_external,
      'Estabelecimento': transaction.company_name,
      'Forma de Pagamento': transaction.payment_type,
      'Bandeira': transaction.brand,
      'Valor': formatValue(transaction.amount),
      'Status': formatStatus(transaction.status),
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(formattedData, {
    header: ['Data', 'Hora', 'NSU', 'Estabelecimento', 'Forma de Pagamento', 'Bandeira', 'Valor', 'Status'],
    skipHeader: true
  });

  XLSX.utils.sheet_add_aoa(worksheet, [
    ['Data', 'Hora', 'NSU', 'Estabelecimento', 'Forma de Pagamento', 'Bandeira', 'Valor', 'Status']
  ], { origin: 'A1' });

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');

  XLSX.writeFile(workbook, 'Transactions.xlsx');
};
