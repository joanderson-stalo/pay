import { useNavigate } from 'react-router-dom';
import * as S from './styled';

interface Seller {
  seller_id: number;
  trading_name: string;
  total_amount: string;
}

interface TopEstabelecimentosProps {
  topSellers: Seller[];
}

export function TopEstabelecimentos({ topSellers }: TopEstabelecimentosProps) {
  const navigate = useNavigate();
  
  const sortedData = topSellers
      .sort((a, b) => parseFloat(b.total_amount) - parseFloat(a.total_amount))
      .slice(0, 6);

  function formatToBRL(value: number) {
      return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
      }).format(value);
  }

  function handleButtonClick() {
      navigate('/sellers-ec');
  }

  return (
        <>
            <S.Context>
            <S.Container>
          <S.Header>
              <h2>Ranking de estabelecimentos </h2>

          </S.Header>
          <S.Table>
              <thead>
                  <tr>
                      <S.TableHeader>Ranking</S.TableHeader>
                      <S.TableHeader>Nome</S.TableHeader>
                      <S.TableHeader>Comissão</S.TableHeader>
                  </tr>
              </thead>
              <tbody>
                  {sortedData.map((item, index) => (
                      <tr key={item.seller_id}>
                          <S.TableCell>{`${index + 1}º`}</S.TableCell>
                          <S.TableCell>{item.trading_name}</S.TableCell>
                          <S.TableCell>{formatToBRL(parseFloat(item.total_amount))}</S.TableCell>
                      </tr>
                  ))}
              </tbody>
          </S.Table>
      </S.Container>
      <S.CustomButtonLink type='button' onClick={handleButtonClick}>Ver todos os estabelecimentos</S.CustomButtonLink>
            </S.Context>
        </>
  );
}

