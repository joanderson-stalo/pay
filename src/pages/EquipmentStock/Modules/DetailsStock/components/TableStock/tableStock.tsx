import * as S from './styled';
import { dadosHistorico } from './dados';

export function TableStock() {
  return (
    <S.HistoricoContainer>
      <S.HistoricoHeader>Histórico de conciliações</S.HistoricoHeader>
      <S.HistoricoTable>
        <thead>
          <tr>
            <S.HistoricoTableHeaderCell>Data</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Descrição</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Comentários</S.HistoricoTableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {dadosHistorico.map((acao, index) => (
            <tr key={index}>
              <S.HistoricoTableCell>{acao.data}</S.HistoricoTableCell>
              <S.HistoricoTableCell>{acao.descricao}</S.HistoricoTableCell>
              <S.HistoricoTableCell>{acao.comentarios}</S.HistoricoTableCell>
            </tr>
          ))}
        </tbody>
      </S.HistoricoTable>
    </S.HistoricoContainer>
  );
};
