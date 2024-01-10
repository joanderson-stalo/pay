import React from 'react';
import * as S from './styled';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';

type DataSpreadSheetType = {
  ID_EC: string | number;
  ESTABELECIMENTO: string;
  ID_LA: string | number;
  LICENCIADO: string;
  SN: string | number;
  TIPO: string;
  Valor: string | number;
  Observação: string;
};


type CardSpreadsheetProps = {
  data: DataSpreadSheetType[]; 
};

export function CardSpreadsheet({ data }: CardSpreadsheetProps) {
  return (
    <>
         {data.map((item, index) => (
        <S.SpreadsheetWrapper key={index}>
 
    
          <S.SpreadsheetItem >
            <S.LabelBox><span>Id_EC</span></S.LabelBox>
            <S.IdentifierBox><span>{item.ID_EC}</span></S.IdentifierBox>
            <S.LabelBox><span>EC</span></S.LabelBox>
            <S.InfoBox><S.InfoText>{item.ESTABELECIMENTO}</S.InfoText></S.InfoBox>
          </S.SpreadsheetItem>

          <S.SpreadsheetItem>
            <S.LabelBox><span>Id_LA</span></S.LabelBox>
            <S.IdentifierBox><span>{item.ID_LA}</span></S.IdentifierBox>
            <S.LabelBox><span>LA</span></S.LabelBox>
            <S.InfoBox><S.InfoText>{item.LICENCIADO}</S.InfoText></S.InfoBox>
          </S.SpreadsheetItem>

          <S.SpreadsheetItem>
            <S.LabelBox><span>Valor</span></S.LabelBox>
            <S.IdentifierBox><span>{formatCurrencyBR(Number(item.Valor))}</span></S.IdentifierBox>
            <S.LabelBox><span>Tipo</span></S.LabelBox>
            <S.InfoBox><S.InfoText>{item.TIPO}</S.InfoText></S.InfoBox>
          </S.SpreadsheetItem>

          <S.SpreadsheetItem>
            <S.LabelBox><span>Serial</span></S.LabelBox>
            <S.IdentifierBox><span>{item.SN}</span></S.IdentifierBox>
            <S.LabelBox><span>OBS.</span></S.LabelBox>
            <S.InfoBox><S.InfoComent>{item.Observação}</S.InfoComent></S.InfoBox>
          </S.SpreadsheetItem>
  
 
    </S.SpreadsheetWrapper>
         ))}
    </>

  );
}
