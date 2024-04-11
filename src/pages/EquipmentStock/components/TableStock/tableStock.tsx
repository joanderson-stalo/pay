import { useState, useEffect } from 'react';
import * as S from './styled';
import { useTenantData } from '@/context';
import { useIdPos } from '@/context/useIdPos';
import { useNavigate } from 'react-router-dom';

interface RowData {
  id: number;
  cadastro: string;
  serial_number: number | string;
  model: string;
  acquire: string;
  status: string;
  seller_name: string;
  owner_name: string;
}

interface TabelaProps {
  rows: RowData[];
}

export function TableStock({ rows }: TabelaProps) {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const tenantData = useTenantData();
  const navigate = useNavigate();
  const {setSelectedIdPos} = useIdPos();

  function formatDateBR(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  const handleSort = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const sortedRows = [...rows].sort((a, b) => {
    let factor = sortDirection === 'asc' ? 1 : -1;
    if (a.cadastro && b.cadastro) {
      return factor * a.cadastro.localeCompare(b.cadastro);
    }
    if (!a.cadastro && !b.cadastro) {
      return 0;
    }
    return a.cadastro ? 1 : -1;
  });


  function SortIndicator({ direction }: { direction: 'asc' | 'desc' }) {
    return (
      <S.SortContainer>
        <S.SortArrow isActive={direction === 'asc'}>▲</S.SortArrow>
        <S.SortArrow isActive={direction === 'desc'}>▼</S.SortArrow>
      </S.SortContainer>
    );
  }

  useEffect(() => {
    handleSort();
  }, []);

  const handleViewMoreClick = async (id: string) => {
    setSelectedIdPos(id);
    await new Promise(resolve => setTimeout(resolve, 20));
    navigate(`/detailsStock`);
};


  return (
    <S.Table>
      <thead>
        <tr>
        <S.TableHeader>Serial</S.TableHeader>
        <S.TableHeader>Modelo</S.TableHeader>
        <S.TableHeader>Estabelecimento</S.TableHeader>
        <S.TableHeader>Proprietário</S.TableHeader>


          <S.TableHeader>Fornecedor</S.TableHeader>
          <S.TableHeader>Funcionamento</S.TableHeader>
          <S.TableHeader></S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.serial_number}</S.TableData>
            <S.TableData>{row.model}</S.TableData>
            <S.TableData>{row.seller_name}</S.TableData>
            <S.TableData>{row.owner_name}</S.TableData>


            <S.TableData><S.FornecedorStatus>{row.acquire}</S.FornecedorStatus></S.TableData>
            <S.TableData>{row.status.toLocaleLowerCase()}</S.TableData>
            <S.TableData>
              <S.Button
              primary={tenantData.primary_color_identity}
              secundary={tenantData.secondary_color_identity}
              onClick={() => handleViewMoreClick(row.id.toString())}>
                Ver POS
              </S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
