import * as S from './styled';

type UsefulLinkCardProps = {
  title: string;
  description: string;
  url: string;
};

export function UsefulLinkCard({ title, description, url }: UsefulLinkCardProps) {
  return (
    <S.UsefulLinkCardContainer>
      <S.IconSquare />
      <S.ContentContainer>
        <S.LinkTitle>{title}</S.LinkTitle>
        <S.LinkDescription>{description}</S.LinkDescription>
        <S.LinkUrl href={url} target="_blank" rel="noopener noreferrer">{url}</S.LinkUrl>
      </S.ContentContainer>
    </S.UsefulLinkCardContainer>
  );
}
