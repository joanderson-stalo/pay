export type Seller = {
  trading_name: any;
  type_document: DocumentType;
  type: string;
  email: any;
  status: string;
  mcc: string;
  phone: string;
  owner_name: any;
  owner_birthday: string;
  owner_cpf: string;
  address_cep: any;
  address_street: any;
  address_number: number;
  address_complement: any;
  address_neighborhood: any;
  address_city: any;
  address_state: any;
  tpv_goal: number;
  document?: string; // ? indica que esta propriedade é opcional
  company_name?: any;
  opening_date?: string;
};
