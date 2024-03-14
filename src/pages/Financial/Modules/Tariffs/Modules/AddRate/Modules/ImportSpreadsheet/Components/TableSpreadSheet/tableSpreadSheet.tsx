import React from 'react';
import * as S from './styled';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import { useTenantData } from '@/context';

type dataSpreadSheetType = {
  ID_EC: string | number;
  ESTABELECIMENTO: string;
  ID_LA: string | number;
  LICENCIADO: string;
  SN: string | number;
  TIPO: string;
  Valor: string | number;
  Observação: string;
};

type TableStockProps = {
  dataSpreadSheet : dataSpreadSheetType[];
};

export function TableSpreadSheet({ dataSpreadSheet  }: TableStockProps) {

  const tenantData = useTenantData();

  return (
    <S.TableContainer>
      <S.DataTable  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
        <thead>
          <tr>
            <S.TableHeaderCell>ID_EC</S.TableHeaderCell>
            <S.TableHeaderCell>ESTABELECIMENTO</S.TableHeaderCell>
            <S.TableHeaderCell>ID_LA</S.TableHeaderCell>
            <S.TableHeaderCell>LICENCIADO</S.TableHeaderCell>
            <S.TableHeaderCell>SN</S.TableHeaderCell>
            <S.TableHeaderCell>TIPO</S.TableHeaderCell>
            <S.TableHeaderCell>Valor</S.TableHeaderCell>
            <S.TableHeaderCell>Observação</S.TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {dataSpreadSheet.map((item, index) => (
            <tr key={index}>
              <S.TableCell>{item.ID_EC}</S.TableCell>
              <S.TableCell>{item.ESTABELECIMENTO}</S.TableCell>
              <S.TableCell>{item.ID_LA}</S.TableCell>
              <S.TableCell>{item.LICENCIADO}</S.TableCell>
              <S.TableCell>{item.SN}</S.TableCell>
              <S.TableCell>{item.TIPO}</S.TableCell>
              <S.TableCell>{formatCurrencyBR(Number(item.Valor))}</S.TableCell>
              <S.TableCell>{item.Observação}</S.TableCell>
            </tr>
          ))}
        </tbody>
      </S.DataTable>
    </S.TableContainer>
  );
};
