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

  // Sort the array by total_amount in descending order and take the top 6
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
      navigate('/commission/ranking');
  }

  return (
      <S.Container>
          <S.Header>
              <h2>TOP Estabelecimentos</h2>
              <button onClick={handleButtonClick}>Ver todos</button>
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
  );
}

