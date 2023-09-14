
export function formatTaxa(taxa: number): string {
  const roundedTaxa = Math.round(taxa * 100) / 100;
  return roundedTaxa.toFixed(2).replace('.', ',');
}
