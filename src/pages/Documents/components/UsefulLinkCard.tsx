import { useTenantData } from '@/context';
import * as S from './styled';

type UsefulLinkCardProps = {
  title: string;
  description: string;
  url: string;
};

export function UsefulLinkCard({ title, description, url }: UsefulLinkCardProps) {
  const tenantData = useTenantData();

  return (
    <S.UsefulLinkCardContainer>
      <S.IconSquare  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} />
      <S.ContentContainer>
        <S.LinkTitle  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>{title}</S.LinkTitle>
        <S.LinkDescription>{description}</S.LinkDescription>
        <S.LinkUrl href={url} target="_blank" rel="noopener noreferrer">{url}</S.LinkUrl>
      </S.ContentContainer>
    </S.UsefulLinkCardContainer>
  );
}
