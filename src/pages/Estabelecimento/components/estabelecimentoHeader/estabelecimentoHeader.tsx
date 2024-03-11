import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlass } from '@phosphor-icons/react';
import * as S from './styled';
import debounce from 'lodash/debounce';
import { TitleH } from '@/components/Title/title';

interface Props {
  onSearch: (searchValue: string) => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export function EstabelecimentoHeader({ onSearch, searchValue, setSearchValue }: Props) {
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valorTrimmed = event.target.value.trim();
    setSearchValue(event.target.value);
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  const handleAddEstablishment = () => {
    navigate('/sellers-ec-register');
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
      <TitleH title='Estabelecimentos' />
      <S.Context>
        <S.Input>
          <input
            type="text"
            placeholder="Pesquise por nome do estabelecimento ou CNPJ"
            value={searchValue}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <S.SearchIcon className='search-icon' onClick={() => onSearch(searchValue.trim())}>
            <MagnifyingGlass />
          </S.SearchIcon>
        </S.Input>
        <S.Button onClick={handleAddEstablishment}>Adicionar Estabelecimento</S.Button>
      </S.Context>
    </S.Container>
  );
}
