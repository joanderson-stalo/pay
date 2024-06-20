import { useState, useEffect } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useTenantData } from '@/context';
import { checkEmpty } from '@/utils/checkEmpty';
import { useTicketID } from '@/context/id/ticketId';

export interface RowData {
  created_at: string;
  id: string;
  description: string;
  event: string;
  properties: string;
}

type SortField = 'created_at' | 'id';

interface TabelaProps {
  rows: RowData[];
}

export function TabelaLog({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const tenantData = useTenantData();
  const { setSelectedTicketID } = useTicketID();
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
    let comparison = 0;
    if (sortField === 'id') {
      comparison = parseInt(a.id) - parseInt(b.id);
      return sortDirection === 'asc' ? comparison : -comparison;
    }

    if (sortField === 'created_at') {
      comparison = a.created_at.localeCompare(b.created_at);
      return sortDirection === 'asc' ? comparison : -comparison;
    }

    return comparison;
  });

  function SortIndicator({
    direction
  }: {
    direction: 'asc' | 'desc' | undefined;
  }) {
    return (
      <S.SortContainer>
        <S.SortArrow isActive={direction === 'asc'}>▲</S.SortArrow>
        <S.SortArrow isActive={direction === 'desc'}>▼</S.SortArrow>
      </S.SortContainer>
    );
  }

  const getDirectionForField = (field: SortField) => {
    return sortField === field ? sortDirection : undefined;
  };

  const handleViewMoreClick = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 20));
    setSelectedTicketID(id)
    navigate(`/log-detail`);
  };



  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }


  useEffect(() => {
    handleSort('id');
  }, []);

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('id')}>
            ID
            <SortIndicator direction={getDirectionForField('id')} />
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('created_at')}>
              Data
            <SortIndicator direction={getDirectionForField('created_at')} />
          </S.TableHeader>
          <S.TableHeader>Descrição</S.TableHeader>
          <S.TableHeader>Evento</S.TableHeader>
          <S.TableHeader>Propriedade</S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.id}</S.TableData>
            <S.TableData>{formatDate(row.created_at)}</S.TableData>
            <S.TableData>{row.description}</S.TableData>
            <S.TableData>{checkEmpty(row.event)}</S.TableData>
            <S.TableData>{checkEmpty(row.properties)}</S.TableData>
            <S.TableData>
              <S.Button primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={() => handleViewMoreClick(row.id)}>Detalhes</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
