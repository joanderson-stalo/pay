  import * as S from './styled';
  import gold from '@assets/icons/plan-gold.svg'
  import silver from '@assets/icons/plan-silver.svg'
  import bronze from '@assets/icons/plan-bronze.svg'

  export interface RowData {
    id: number;
    status: string;
    name: string;
    antecipacao: number;
    planoBase: string;
    fornecedor: string | string[];
    tipo: string;

  }

  interface TabelaProps {
    rows: RowData[];
  }

  export function TablePlans({ rows }: TabelaProps) {
    const handleActionClick = (id: number, action: 'edit' | 'remove') => {
      console.log(`${action} action for ID: ${id}`);
    };

    const renderCellContent = (content: string | string[]) => {
      if (Array.isArray(content)) {
        return content.join(', ');
      }
      return content || '---';
    };


  const formatStatus = (status: string) => {
    const lowerStatus = status.toLocaleLowerCase();
    if (lowerStatus === 'ativo' || lowerStatus === 'inativo') {
      return lowerStatus;
    }
    return undefined;
  };

    return (
      <S.Table>
        <thead>
          <tr>
            <S.TableHeader>Status</S.TableHeader>
            <S.TableHeader>Nome</S.TableHeader>
            <S.TableHeader>Antecipação</S.TableHeader>
            <S.TableHeader>Plano Base</S.TableHeader>
            <S.TableHeader>Fornecedor</S.TableHeader>
            <S.TableHeader>Tipo</S.TableHeader>
            <S.TableHeader></S.TableHeader>
            <S.TableHeader></S.TableHeader>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <S.TableData>
              <S.Status status={formatStatus(row.status)}>{row.status}</S.Status>
            </S.TableData>
              <S.TableData>{row.name}</S.TableData>
              <S.TableData>{row.antecipacao === 1 ? '✔️' : '❌'}</S.TableData>
              <S.TableData>{renderCellContent(row.planoBase)}</S.TableData>
              <S.TableData><S.FornecedorStatus>{renderCellContent(row.fornecedor)}</S.FornecedorStatus></S.TableData>
              <S.PapelData>
                <S.PapelText type={row.tipo.toLocaleLowerCase()}>{renderCellContent(row.tipo)}<img src={gold} alt="" /> </S.PapelText>
              </S.PapelData>
              <S.TableData>
                {/* <S.ButtonEditar onClick={() => handleActionClick(row.id, 'edit')}>Editar</S.ButtonEditar> */}
              </S.TableData>
              <S.TableData>
                {/* <S.ButtonRemover onClick={() => handleActionClick(row.id, 'remove')}>Remover</S.ButtonRemover> */}
              </S.TableData>
            </tr>
          ))}
        </tbody>
      </S.Table>
    );
  }
