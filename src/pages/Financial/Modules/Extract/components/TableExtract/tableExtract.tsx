import { useTenantData } from '@/context';
import * as S from './styled';

interface StatementRecord {
  title: string;
  amount: number;
  tpv: number;
  type: string;
}

interface Statement {
  [date: string]: StatementRecord[];
}

interface TabelaProps {
  statement: Statement;
}

export function TableExtract({ statement }: TabelaProps) {
  const formatDateBR = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const dates = Object.keys(statement).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  const tenantData = useTenantData();
  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader>Data</S.TableHeader>
          <S.TableHeader>Título</S.TableHeader>
          <S.TableHeader>Valor</S.TableHeader>
          <S.TableHeader>TPV</S.TableHeader>
          <S.TableHeader>Tipo</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {dates.map((date) =>
          statement[date].map((record, index) => (
            <tr key={`${date}-${index}`}>
              <S.TableData>{index === 0 ? formatDateBR(date) : ''}</S.TableData>
              <S.TableData>{record.title}</S.TableData>
              <S.TableData>
                {record.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </S.TableData>
              <S.TableData>{record.tpv.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.TableData>
              <S.TableData>
                <S.TipoContainer>
                  <S.TipoTableData tipo={record.type.toLocaleLowerCase()}>
                    {record.type === 'credit' ? 'Crédito' : 'Débito'}
                  </S.TipoTableData>
                </S.TipoContainer>
              </S.TableData>
            </tr>
          ))
        )}
      </tbody>
    </S.Table>
  );
}
