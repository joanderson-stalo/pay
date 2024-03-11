import { useState, useEffect } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { maskCpfCnpj } from '@/utils/maskCpfCnpj';
import { useLicensed } from '@/context/useLicensed';

export interface RowData {
  id: number;
  cnpj_cpf: string;
  trading_name: string;
  type: string;
  owner_name: string;
  tpv: number;
  commission: string;
  ec_count: number;
  network_index: number | null;
}

type SortField = 'id' | 'trading_name' | 'type' | 'ec_count' | 'commission' | 'tpv';

interface TabelaProps {
  rows: RowData[];
}

export function Tabela({ rows }: TabelaProps) {
  const [sortField, setSortField] = useState<SortField>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const { setLicensedId } = useLicensed();
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

    switch (sortField) {
      case 'id':
        comparison = a.id - b.id;
        break;
      case 'trading_name':
        comparison = a.trading_name.localeCompare(b.trading_name);
        break;
      case 'tpv':
        comparison = a.tpv - b.tpv;
        break;
      case 'type':
        const typeA = a.type + a.network_index;
        const typeB = b.type + b.network_index;
        comparison = typeA.localeCompare(typeB);
        break;
      case 'ec_count':
      case 'commission':
        const numA = parseFloat(a[sortField].toString().replace(',', '.'));
        const numB = parseFloat(b[sortField].toString().replace(',', '.'));
        comparison = numA - numB;
        break;
      default:
        return 0;
    }

    return sortDirection === 'asc' ? -comparison : comparison;
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

  const handleViewMoreClick = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 20));
    setLicensedId(id)
    navigate(`/sellers-la-detail`);
  };

  function formatToBRL(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }



  useEffect(() => {
    handleSort('id');
  }, []);

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader style={{cursor: 'pointer'}} onClick={() => handleSort('id')}>
            Id
            <SortIndicator direction={getDirectionForField('id')} />
          </S.TableHeader>
          <S.TableHeader>CPF/CNPJ</S.TableHeader>
          <S.TableHeader style={{cursor: 'pointer'}} onClick={() => handleSort('trading_name')}>
            Nome
            <SortIndicator direction={getDirectionForField('trading_name')} />
          </S.TableHeader>
          <S.TableHeader style={{cursor: 'pointer'}} onClick={() => handleSort('type')}>
            Nível
            <SortIndicator direction={getDirectionForField('type')} />
          </S.TableHeader>
          <S.TableHeader style={{cursor: 'pointer'}} onClick={() => handleSort('ec_count')}>
            Estabelecimentos
            <SortIndicator direction={getDirectionForField('ec_count')} />
          </S.TableHeader>
          <S.TableHeader style={{cursor: 'pointer'}} onClick={() => handleSort('commission')}>
            Comissão
            <SortIndicator direction={getDirectionForField('commission')} />
          </S.TableHeader>
          <S.TableHeader style={{cursor: 'pointer'}} onClick={() => handleSort('tpv')}>
            TPV
            <SortIndicator direction={getDirectionForField('tpv')} />
          </S.TableHeader>
          <S.TableHeader>Ver mais</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((seller, index) => (
          <tr key={index}>
            <S.TableData>{seller.id}</S.TableData>
            <S.TableData>{maskCpfCnpj(seller.cnpj_cpf)}</S.TableData>
            <S.TableData>{seller.trading_name ? seller.trading_name  : seller.owner_name}</S.TableData>
            <S.TableData>{seller.type} {seller.network_index}</S.TableData>
            <S.TableData>{seller.ec_count}</S.TableData>
            <S.TableData>{formatToBRL(parseFloat(seller.commission.replace(',', '.')))}</S.TableData>
            <S.TableData>{formatToBRL(seller.tpv)}</S.TableData>
            <S.TableData>
              <S.Button onClick={() => handleViewMoreClick(seller.id.toString())}>Dados</S.Button>
            </S.TableData>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
