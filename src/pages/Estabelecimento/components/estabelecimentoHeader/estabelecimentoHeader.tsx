import { useNavigate } from 'react-router-dom';
import { SetStateAction, useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import * as S from './styled';

export function EstabelecimentoHeader() {
  const [searchValue, setSearchValue] = useState('');
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
    navigate('/lacadastro');
  };

  return (
    <S.Container>
      <S.Title>Estabelecimentos</S.Title>
      <S.Context>
        <S.Input>
          <input
            type="text"
            placeholder="Pesquise por nome do estabelecimento ou CNPJ"
            value={searchValue}
            onChange={handleChange}
          />
          <S.SearchIcon className='search-icon' onClick={handleSearch}>
            <MagnifyingGlass />
          </S.SearchIcon>
        </S.Input>
        <S.Button onClick={handleAddEstablishment}>Adicionar Estabelecimento</S.Button>
      </S.Context>
    </S.Container>
  );
}
