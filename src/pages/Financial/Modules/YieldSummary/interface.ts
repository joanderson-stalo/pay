export interface CommissionData {
  la_document: string;
  la_trading_name: string;
  commission: string;
  commission_count: number;
}

export interface CommissionSummary {
  [key: string]: CommissionData;
}

export interface OperationSummaryResponse {
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
