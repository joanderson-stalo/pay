import * as S from './styled';
import { dadosHistorico } from './dados';
import { useTenantData } from '@/context';

export function HistoricoTable(){
  const tenantData = useTenantData();


  return (
    <S.HistoricoContainer>
      <S.HistoricoHeader primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} >Top Estabelecimentos</S.HistoricoHeader>
      <S.HistoricoTable>
        <thead>
          <tr>
            <S.HistoricoTableHeaderCell>Data</S.HistoricoTableHeaderCell>
            <S.HistoricoTableHeaderCell>Descrição</S.HistoricoTableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {dadosHistorico.map((acao, index) => (
            <tr key={index}>
              <S.HistoricoTableCell>{acao.data}</S.HistoricoTableCell>
              <S.HistoricoTableCell>{acao.descricao}</S.HistoricoTableCell>
            </tr>
          ))}
        </tbody>
      </S.HistoricoTable>
    </S.HistoricoContainer>
  );
};
