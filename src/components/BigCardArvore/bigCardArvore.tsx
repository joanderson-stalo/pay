import * as S from './styled';

interface BigCardArvoreProps {
  title: string;
  value: string | number;
  bgColor: string;
  loading: boolean;
}


export function BigCardArvore({ title, value, bgColor, loading }: BigCardArvoreProps) {
  return loading ? (
    <S.ContainerBigSkeleton />
  ) : (
    <S.ContainerBig bgColor={bgColor}>
      <span>{value}</span>
      <h3>{title}</h3>
    </S.ContainerBig>
  );
}

