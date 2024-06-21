import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';
import { useTenantData } from '@/context';


export function LicenciadoHeader() {
  const navigate = useNavigate();

  const handleAddEstablishment = () => {
    navigate('/sellers-la-register');
  };

  const tenantData = useTenantData();

  return (
    <S.Container>
         <TitleH title='Licenciados' />
         <S.Button primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={handleAddEstablishment}>Adicionar licenciado</S.Button>
    </S.Container>
  );
}
