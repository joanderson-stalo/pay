export interface UserData {
  Titulo: string;
  Descricao: string;
  TipoDePlano: { value: string; label?: string | undefined };
  Antecipacao: { value: string; label?: string | undefined };
  TaxaAntecipacao: string;
}
