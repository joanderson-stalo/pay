import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlass } from '@phosphor-icons/react';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';
import { debounce } from 'lodash';

interface Props {
  onSearch: (searchValue: string) => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export function HeaderPlans({ onSearch, searchValue, setSearchValue }: Props) {
  const [isInputFocused, setInputFocused] = useState(false);
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valorTrimmed = event.target.value.trim();
    setSearchValue(event.target.value);
    setIsTyping(true);
  };

  
  const handleBlur = () => {
    setIsTyping(false);
    handleInputBlur()
  };

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      onSearch(searchValue);
    }
  };

  const handleAddEstablishment = () => {
    navigate('/addplans');
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  useEffect(() => {
    let searchDebounce: ReturnType<typeof debounce> | null = null;

    if (isTyping) {
      searchDebounce = debounce((valorTrimmed: string) => {
        onSearch(valorTrimmed);
      }, 1000);

      searchDebounce(searchValue.trim());
    }

    return () => {
      if (searchDebounce) {
        searchDebounce.cancel();
      }
    };
  }, [onSearch, searchValue, isTyping]);

  return (
    <S.Container>
      <TitleH title='Planos' />
      <S.Context>
        <S.Input isFocused={isInputFocused}>
          <input
            type="text"
            placeholder="Pesquise por nome do plano"
            value={searchValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleInputFocus}
       
          />
          <S.SearchIcon isFocused className='search-icon' onClick={handleSearch}>
            <MagnifyingGlass />
          </S.SearchIcon>
        </S.Input>
        {/* <S.Button onClick={handleAddEstablishment}>Adicionar Plano</S.Button> */}
      </S.Context>
    </S.Container>
  );
}
