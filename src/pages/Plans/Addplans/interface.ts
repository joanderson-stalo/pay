export interface UserData {
  Titulo: string;
  Fornecedor: string;
  PlanoBase?: string;
  TipoDePlano: { value: string; label?: string };
  Antecipacao: { value: string; label?: string };
  TaxaAntecipacao: string;
}

