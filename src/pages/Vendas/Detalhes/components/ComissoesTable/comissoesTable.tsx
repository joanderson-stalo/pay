
import * as S from './styled';
import { dadosHistorico } from './dados';

export function ComissoesTable(){
  const totalTaxa = dadosHistorico.reduce((total, acao) => total + parseFloat(acao.taxa.replace(',', '.')), 0);
  const totalValor = dadosHistorico.reduce((total, acao) => total + parseFloat(acao.valor.replace(',', '.')), 0);

  return (
    <S.HistoricoContainer>
      <S.HistoricoHeader>Comissões Geradas</S.HistoricoHeader>
      <S.HistoricoTable>
        <thead>
          <tr>
          <S.HistoricoTableHeaderCell></S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Papel</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Taxa</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Markup</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Valor</S.HistoricoTableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {dadosHistorico.map((acao, index) => (
            <tr key={index}>
               <S.HistoricoTableCell>{acao.label}</S.HistoricoTableCell>
              <S.HistoricoTableCell> <S.HistoricoTableCellPapelText label={acao.papel} >{acao.papel}</S.HistoricoTableCellPapelText></S.HistoricoTableCell>
              <S.HistoricoTableCell>{acao.taxa}%</S.HistoricoTableCell>
              <S.HistoricoTableCell>{acao.markup}%</S.HistoricoTableCell>
              <S.HistoricoTableCell>R$ {acao.valor}</S.HistoricoTableCell>
            </tr>
          ))}
          <S.TotalRow>
            <S.HistoricoTableHeaderCellTotal>Total</S.HistoricoTableHeaderCellTotal>
            <S.HistoricoTableHeaderCellTotal></S.HistoricoTableHeaderCellTotal>
            <S.HistoricoTableHeaderCellTotal>{totalTaxa.toFixed(2).replace('.', ',')}%</S.HistoricoTableHeaderCellTotal>
            <S.HistoricoTableHeaderCellTotal></S.HistoricoTableHeaderCellTotal>
            <S.HistoricoTableHeaderCellTotal>R$ {totalValor.toFixed(2).replace('.', ',')}</S.HistoricoTableHeaderCellTotal>
          </S.TotalRow>
        </tbody>
      </S.HistoricoTable>
    </S.HistoricoContainer>
  );
};
