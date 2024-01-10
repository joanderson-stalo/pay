import React from 'react';
import notdata from '@assets/notdata.png';
import * as S from './styled';

type NoDataFoundProps = {
  message?: string;
  onReload?: () => void;
};

export function NoDataFound({ message, onReload }: NoDataFoundProps) {
  return (
    <S.NoDataContainer>
      <S.Image src={notdata} alt="Nenhum dado encontrado" />
      <S.Message>{message || 'Nenhum dado encontrado'}</S.Message>
      {onReload && <S.ReloadButton onClick={onReload}>Recarregar</S.ReloadButton>}
    </S.NoDataContainer>
  );
}
