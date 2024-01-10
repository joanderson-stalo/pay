import { useState, useEffect } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';

export interface RowData {
  id: number;
  data: string;
  estabelecimento: string;
  licenciado: string;
  serial: number | string;
  valor: number;
  tipo: string;
  comentarios: string;
}

type SortField = 'id' | 'data' | 'estabelecimento' | 'licenciado' | 'valor';

interface TabelaProps {
  rows: RowData[];
}

export function TableBillingRequest({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('data');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  function formatDateBR(dateString: string | number | Date) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }
  

  const navigate = useNavigate();

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    let factor = sortDirection === 'asc' ? 1 : -1;
    switch (sortField) {
      case 'id':
      case 'valor':
        return factor * (a[sortField] - b[sortField]);
      case 'estabelecimento':
      case 'data':
      case 'licenciado':
        return factor * a[sortField].localeCompare(b[sortField]);
      default:
        return 0;
    }
  });

  const getDirectionForField = (field: SortField) => {
    return sortField === field ? sortDirection : undefined;
  };

  function SortIndicator({ direction }: { direction: 'asc' | 'desc' | undefined }) {
    return (
      <S.SortContainer>
        <S.SortArrow isActive={direction === 'asc'}>▲</S.SortArrow>
        <S.SortArrow isActive={direction === 'desc'}>▼</S.SortArrow>
      </S.SortContainer>
    );
  }

  useEffect(() => {
    handleSort('data');
  }, []);

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('data')}>
            Data
            <SortIndicator direction={getDirectionForField('data')} />
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('estabelecimento')}>
            Estabelecimento
            <SortIndicator direction={getDirectionForField('estabelecimento')} />
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('licenciado')}>
            Licenciado
            <SortIndicator direction={getDirectionForField('licenciado')} />
          </S.TableHeader>
          <S.TableHeader>
            Serial
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('valor')}>
            Valor
            <SortIndicator direction={getDirectionForField('valor')} />
          </S.TableHeader>
          <S.TableHeader>
            Tipo
          </S.TableHeader>
          <S.TableHeader>
            Comentários
          </S.TableHeader>
          <S.TableHeader>
       
          </S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
          <S.TableData>{formatDateBR(row.data)}</S.TableData>
            <S.TableData>{row.estabelecimento}</S.TableData>
            <S.TableData>{row.licenciado}</S.TableData>
            <S.TableData>{row.serial}</S.TableData>
            <S.TableData>{formatCurrencyBR(row.valor)}</S.TableData>
            <S.TableData>{row.tipo}</S.TableData>
            <S.CommentTableData>{row.comentarios}</S.CommentTableData>
            <S.TableData>
              <S.Button onClick={() => false}>Editar</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
