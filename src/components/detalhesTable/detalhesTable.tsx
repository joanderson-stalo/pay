import React from 'react';
import { dadosFornecedores } from './datos';
import * as S from './styles';

export function DetalhesTable(){
  const totais = dadosFornecedores.reduce((acc, fornecedor) => ({
    pos: acc.pos + fornecedor.pos,
    transacoes: acc.transacoes + fornecedor.transacoes,
    tpv: acc.tpv + fornecedor.tpv,
    comissao: acc.comissao + fornecedor.comissao
  }), { pos: 0, transacoes: 0, tpv: 0, comissao: 0 });

  return (
    <S.Container>
      <S.Header>Detalhes</S.Header>
      <S.Table>
        <thead>
          <tr>
            <S.TableHeaderCell>Fornecedor</S.TableHeaderCell>
            <S.TableHeaderCell>Quant. de POS</S.TableHeaderCell>
            <S.TableHeaderCell>Transações</S.TableHeaderCell>
            <S.TableHeaderCell>TPV</S.TableHeaderCell>
            <S.TableHeaderCell>Comissão</S.TableHeaderCell>
          </tr>
        </thead>
        <tbody>
        {dadosFornecedores.map((fornecedor, index) => (
  <tr key={index}>
    <S.TableCell>{fornecedor.nome}</S.TableCell>
    <S.TableCell>{fornecedor.pos}</S.TableCell>
    <S.TableCell>{fornecedor.transacoes}</S.TableCell>
    <S.TableCell>R$ {fornecedor.tpv}</S.TableCell>
    <S.TableCell>R$ {fornecedor.comissao}</S.TableCell>
  </tr>
))}
    <S.TotalRow>
      <S.TableCellTotal>Totais</S.TableCellTotal>
      <S.TableCellTotal>{totais.pos}</S.TableCellTotal>
      <S.TableCellTotal>{totais.transacoes}</S.TableCellTotal>
      <S.TableCellTotal>R$ {totais.tpv}</S.TableCellTotal>
      <S.TableCellTotal>R$ {totais.comissao}</S.TableCellTotal>
    </S.TotalRow>
  </tbody>
      </S.Table>
    </S.Container>
  );
};
