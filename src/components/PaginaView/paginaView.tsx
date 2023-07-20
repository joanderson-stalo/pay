import * as S from './styled';

export function PaginaView({ totalItens }: { totalItens: number | '' }) {
  return (
    <>
      <S.Span>Mostrando de 1 a {totalItens}</S.Span>
    </>
  );
}
