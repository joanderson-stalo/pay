import { useState, useEffect } from 'react';
import * as S from './styled';

export interface RowData {
  id: string;
  cpfcnpj: string;
  nome: string;
  nivel: string;
  estabelecimentos: string;
  comissao: string;
  tpv: string;
}

type SortField = 'nome' | 'nivel' | 'estabelecimentos' | 'comissao' | 'tpv';

interface TabelaProps {
  rows: RowData[];
}

export function Tabela({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('nome');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    switch (sortField) {
      case 'nome':
        return sortDirection === 'asc'
          ? a.nome.localeCompare(b.nome)
          : b.nome.localeCompare(a.nome);
      case 'tpv':
        const tpvA = parseFloat(a.tpv.replace(',', '.'));
        const tpvB = parseFloat(b.tpv.replace(',', '.'));
        return sortDirection === 'asc' ? tpvA - tpvB : tpvB - tpvA;
      case 'nivel':
      case 'estabelecimentos':
      case 'comissao':
        const numA = parseFloat(a[sortField].replace(',', '.'));
        const numB = parseFloat(b[sortField].replace(',', '.'));
        return sortDirection === 'asc' ? numA - numB : numB - numA;
      default:
        return 0;
    }
  });

  function SortIndicator({
    direction
  }: {
    direction: 'asc' | 'desc' | undefined
  }) {
    return (
      <S.SortContainer>
        <S.SortArrow isActive={direction !== 'desc'}>▲</S.SortArrow>
        <S.SortArrow isActive={direction !== 'asc'}>▼</S.SortArrow>
      </S.SortContainer>
    );
  }

  const getDirectionForField = (field: SortField) => {
    return sortField === field ? sortDirection : undefined;
  }

  const handleViewMoreClick = (id: string) => {
    console.log(`ID da linha: ${id}`);
  };

  useEffect(() => {
    handleSort('nome');
  }, []);

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader>Id</S.TableHeader>
          <S.TableHeader>CPF/CNPJ</S.TableHeader>
          <S.TableHeader onClick={() => handleSort('nome')}>
            Nome
            <SortIndicator direction={getDirectionForField('nome')} />
          </S.TableHeader>
          <S.TableHeader onClick={() => handleSort('nivel')}>
            Nível
            <SortIndicator direction={getDirectionForField('nivel')} />
          </S.TableHeader>
          <S.TableHeader onClick={() => handleSort('estabelecimentos')}>
            Estabelecimentos
            <SortIndicator direction={getDirectionForField('estabelecimentos')} />
          </S.TableHeader>
          <S.TableHeader onClick={() => handleSort('comissao')}>
            Comissão
            <SortIndicator direction={getDirectionForField('comissao')} />
          </S.TableHeader>
          <S.TableHeader onClick={() => handleSort('tpv')}>
            TPV
            <SortIndicator direction={getDirectionForField('tpv')} />
          </S.TableHeader>
          <S.TableHeader style={{ paddingLeft: '28px' }}>Ver mais</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.id}</S.TableData>
            <S.TableData>{row.cpfcnpj}</S.TableData>
            <S.TableData>{row.nome}</S.TableData>
            <S.TableData>{row.nivel}</S.TableData>
            <S.TableData>{row.estabelecimentos}</S.TableData>
            <S.TableData>R$ {row.comissao}</S.TableData>
            <S.TableData>R$ {row.tpv}</S.TableData>
            <S.TableData>
              <S.Button onClick={() => handleViewMoreClick(row.id)}>Dados</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
