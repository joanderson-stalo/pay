import { useState, useEffect } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useTenantData } from '@/context';
import { useTicketID } from '@/context/id/ticketId';


export interface RowData {
  data: string;
  name: string;
  id: string;
}

type SortField = 'data' | 'name';

interface TabelaProps {
  rows: RowData[];
}

export function TabePerfils({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('name');
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
    if (sortField === 'name') {
      comparison = parseInt(a.name) - parseInt(b.name);
      return sortDirection === 'asc' ? comparison : -comparison;
    }

    if (sortField === 'data') {
      comparison = a.data.localeCompare(b.data);
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
    handleSort('name');
  }, []);

  return (
    <S.Table>
      <thead>
        <tr>
        <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('data')}>
              Data
            <SortIndicator direction={getDirectionForField('data')} />
          </S.TableHeader>
          <S.TableHeader style={{ cursor: 'pointer' }} onClick={() => handleSort('name')}>
            Nome
            <SortIndicator direction={getDirectionForField('name')} />
          </S.TableHeader>




          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
             <S.TableData>{formatDate(row.data)}</S.TableData>
            <S.TableData>{row.name}</S.TableData>

            <S.TableData >
              <S.ContentBtns>

                <S.IconButton> <S.ButtonEdit/> </S.IconButton>
                <S.IconButton> <S.ButtonDelete/> </S.IconButton>

                <S.Button primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={() => handleViewMoreClick(row.id)}>Editar permissão</S.Button>
              </S.ContentBtns>


            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
