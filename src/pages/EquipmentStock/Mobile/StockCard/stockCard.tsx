import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { useIdPos } from '@/context/useIdPos';

interface StockCardProps {
  data: Array<{
    id: number;
    location: string;
    serial_number:  string;
    model: string;
    acquire: string;
    status: string;
  }>;
}

export function StockCard(props: StockCardProps) {
  const { data } = props;
  const navigate = useNavigate();
  const {setSelectedIdPos} = useIdPos();

  const handleViewMoreClick = async (id: string) => {
    setSelectedIdPos(id);
    await new Promise(resolve => setTimeout(resolve, 20));
    navigate(`/detailsStock`);
};


  return (
    <>
      {data.map((item) => (
        <S.StockCardWrapper key={item.id}>
          <S.StockCardHeader>
            <S.StockNumber>{item.serial_number}</S.StockNumber>
            <S.StockReference>{item.model}</S.StockReference>
            <S.StockButton onClick={() => handleViewMoreClick(item.id.toString())}>Ver POS</S.StockButton>
          </S.StockCardHeader>

          <S.StockCardContent>
            <S.StockInfo>
              <S.StockTextGroup>
                <S.StockTitle>Fornecedor: </S.StockTitle>
                <S.StockDescriptionActive>{item.acquire}</S.StockDescriptionActive>
              </S.StockTextGroup>

              <S.StockTextGroup>
                <S.StockTitle>Local:</S.StockTitle>
                <S.StockDescription>{item.location}</S.StockDescription>
              </S.StockTextGroup>

              <S.StockTextGroup>
                <S.StockTitle>Funcionamento: </S.StockTitle>
                <S.StockStatus >{item.status}</S.StockStatus>
              </S.StockTextGroup>
            </S.StockInfo>
          </S.StockCardContent>
        </S.StockCardWrapper>
      ))}
    </>
  );
}
