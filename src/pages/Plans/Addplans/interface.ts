export interface UserData {
  Titulo: string;
  Fornecedor: string;
  PlanoBase: string | undefined;
  TipoDePlano: { value: string; label?: string | undefined };
  Antecipacao: { value: string; label?: string | undefined };
  TaxaAntecipacao: string;
}
