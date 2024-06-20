import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlass } from '@phosphor-icons/react';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';
import { useTenantData } from '@/context';

interface Props {
  onSearch: (searchValue: string) => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export function LicenciadoHeader({ onSearch, searchValue, setSearchValue }: Props) {
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const tenantData = useTenantData();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valorTrimmed = event.target.value.trim();
    setSearchValue(event.target.value);
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleAddEstablishment = () => {
    navigate('/sellers-la-register');
  };



  return (
    <S.Container>
       <TitleH title='Licenciados' />
      <S.Context>
        <S.Input  isFocused={isFocused}>
          <input
            type="text"
            placeholder="Pesquise por nome do licenciado"
            value={searchValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <S.SearchIcon isFocused className='search-icon' onClick={() => onSearch(searchValue.trim())}>
            <MagnifyingGlass />
          </S.SearchIcon>
        </S.Input>
        <S.Button primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={handleAddEstablishment}>Adicionar licenciado</S.Button>
      </S.Context>
    </S.Container>
  );
}
