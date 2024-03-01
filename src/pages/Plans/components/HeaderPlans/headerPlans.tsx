import { useNavigate } from 'react-router-dom';
import { SetStateAction, useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import * as S from './styled';
import { TitleH } from '@/components/Title/title';

export function HeaderPlans() {
  const [searchValue, setSearchValue] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      console.log('Realizando busca:', searchValue);
    }
  };

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchValue(event.target.value);
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
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
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
