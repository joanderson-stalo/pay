import React from 'react';
import * as S from './styled';
import { dadosHistorico } from './dados';

export function HistoricoTableDetalhes(){
  return (
    <S.HistoricoContainer>
      <S.HistoricoHeader>Histórico de conciliações</S.HistoricoHeader>
      <S.HistoricoTable>
        <thead>
          <tr>
            <S.HistoricoTableHeaderCell>Data</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Valor</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Status</S.HistoricoTableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {dadosHistorico.map((acao, index) => (
            <tr key={index}>
              <S.HistoricoTableCell>{acao.data}</S.HistoricoTableCell>
              <S.HistoricoTableCell>{acao.valor}</S.HistoricoTableCell>
              <S.HistoricoTableCell>{acao.status}</S.HistoricoTableCell>
            </tr>
          ))}
        </tbody>
      </S.HistoricoTable>
    </S.HistoricoContainer>
  );
};
