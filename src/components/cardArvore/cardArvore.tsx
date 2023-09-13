import * as S from './styled';

interface BigCardArvoreProps {
  bgColor: string;
  loading: boolean;
  name: string;
  amount: string | number;
}

export function CardArvore({  bgColor, loading, name, amount }: BigCardArvoreProps) {
  return loading ? (
    <S.ContainerBigSkeleton />
  ) : (
    <S.ContainerBig bgColor={bgColor}>
      <h3>{name}</h3>
      <span>R$ {amount}</span>
    </S.ContainerBig>
  );
}
