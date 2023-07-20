type FornecedorData = {
  nome: string,
  pos: number,
  transacoes: number,
  tpv: number,
  comissao: number
}

export const dadosFornecedores: FornecedorData[] = [
  { nome: 'F1', pos: 100, transacoes: 20000, tpv: 50000, comissao: 5000 },
  { nome: 'F2', pos: 200, transacoes: 40000, tpv: 100000, comissao: 10000 },
  { nome: 'F2', pos: 150, transacoes: 30000, tpv: 75000, comissao: 7500 },
];
