export interface ITransaction {
  id: string;
  acquire_id: string;
  nsu_internal: string;
  status: string;
  captured_in: string;
  amount: string;
  payment_type: string;
  brand: string;
  company_name: string;
}
