export interface Transaction {
  id: number;
  fornecedor: string;
  meta: string;
  tpv: string;
  gap: string;
  comissao: string;
}

export interface Totals {
  meta: string;
  tpv: string;
  gap: string;
  comissao: string;
}
