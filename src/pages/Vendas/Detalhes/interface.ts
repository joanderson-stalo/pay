export interface TransactionDetails {
  id: number;
  id_acquire: string;
  nsu_external: string;
  nsu_internal: string;
  acquire: string;
  status: string;
  status_acquire: string;
  confirmed: number;
  payment_type: string;
  payment_type_acquire: string;
  number_installments: number;
  comment: string;
  description: string;
  amount: string;
  net_amount: string;
  tax_antecipation: null | number;
  is_anteciped: null | number;
  seller_id: number;
  seller_company_name: string;
  brand: string;
  brand_acquire: string;
  card_number: string;
  plan_name: null | string;
  plan_id: null | number;
}
