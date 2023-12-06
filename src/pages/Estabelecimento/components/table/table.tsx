import { useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useEstablishmentDetail } from '@/hooks/useEstablishmentDetail';
import { maskCpfCnpj } from '@/utils/maskCpfCnpj';

export interface RowData {
  id: number;
  registration_date: string;
  cnpj_cpf: string;
  trading_name: string;
  tpv: number;
  acquires: ('F1' | 'F2' | 'F3')[];
}

type SortField = 'id' | 'trading_name' | 'tpv';

interface TabelaProps {
  rows: RowData[];
}

export function Tabela({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const navigate = useNavigate();
  const {setDetailNumber} = useEstablishmentDetail()

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
      comparison = a.id - b.id;
    } else if (sortField === 'trading_name') {
      comparison = a.trading_name.localeCompare(b.trading_name);
    } else if (sortField === 'tpv') {
      comparison = a.tpv - b.tpv;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  function SortIndicator({
    direction
  }: {
    direction: 'asc' | 'desc' | undefined
  }) {
    return (
      <S.SortContainer>
        <S.SortArrow isActive={direction !== 'asc'}>▲</S.SortArrow>
        <S.SortArrow isActive={direction !== 'desc'}>▼</S.SortArrow>
      </S.SortContainer>
    )
  }

  const getDirectionForField = (field: SortField) => {
    return sortField === field ? sortDirection : undefined;
  }

  const handleViewMoreClick = async (id: string) => {
    setDetailNumber(Number(id))
    await new Promise(resolve => setTimeout(resolve, 20));
    navigate(`/establishmentdetail`);
};


  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader style={{cursor: 'pointer'}} onClick={() => handleSort('id')}>
            Id
            <SortIndicator direction={getDirectionForField('id')} />
          </S.TableHeader>
          <S.TableHeader>CNPJ/CPF</S.TableHeader>
          <S.TableHeader style={{cursor: 'pointer'}}  onClick={() => handleSort('trading_name')}>
            Estabelecimento
            <SortIndicator direction={getDirectionForField('trading_name')} />
          </S.TableHeader>
          <S.TableHeader>Data de Registro</S.TableHeader>
          <S.TableHeader style={{cursor: 'pointer'}}  onClick={() => handleSort('tpv')}>
            TPV
            <SortIndicator  direction={getDirectionForField('tpv')} />
          </S.TableHeader>
          <S.TableHeader>Fornecedor</S.TableHeader>
          <S.TableHeader style={{ paddingLeft: '28px' }}>Ver mais</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            <S.TableData>{row.id}</S.TableData>
            <S.TableData>{maskCpfCnpj(row.cnpj_cpf)}</S.TableData>
            <S.TableData>{row.trading_name}</S.TableData>
            <S.TableData>{formatDate(row.registration_date)}</S.TableData>
            <S.TableData>R$ {row.tpv.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</S.TableData>
            <S.TableData>
              <S.FornecedorWrapper>
                {row.acquires.map((fornecedor, index) => (
                  <S.FornecedorItem key={index} fornecedor={fornecedor}>
                    {fornecedor}
                  </S.FornecedorItem>
                ))}
              </S.FornecedorWrapper>
            </S.TableData>
            <S.TableData>
              <S.Button onClick={() => handleViewMoreClick(row.id.toString())}>Visão Geral</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
