import React from 'react';
import * as S from './styled';

export interface RowData {
  id: number;
  status: string;
  name: string;
  antecipacao: number;
  planoBase: string;
  fornecedor: string;
  tipo: 'Base' | 'Comercial';
}


interface TabelaProps {
  rows: RowData[];
}

export function TablePlans({ rows }: TabelaProps) {
  const handleActionClick = (id: number, action: 'edit' | 'remove') => {
    console.log(`${action} action for ID: ${id}`);
  };

  const renderCellContent = (content: string) => content || '---';

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
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.id}>
            <S.TableData>{row.status}</S.TableData>
            <S.TableData>{row.name}</S.TableData>
            <S.TableData>{row.antecipacao === 1 ? 'Sim' : 'Não'}</S.TableData>
            <S.TableData>{renderCellContent(row.planoBase)}</S.TableData>
            <S.TableData>{renderCellContent(row.fornecedor)}</S.TableData>
            <S.PapelData>
              <S.PapelText type={row.tipo}>{renderCellContent(row.tipo)}</S.PapelText>
            </S.PapelData>
            <S.TableData>
              <S.ButtonEditar onClick={() => handleActionClick(row.id, 'edit')}>Editar</S.ButtonEditar>
            </S.TableData>
            <S.TableData>
              <S.ButtonRemover onClick={() => handleActionClick(row.id, 'remove')}>Remover</S.ButtonRemover>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
