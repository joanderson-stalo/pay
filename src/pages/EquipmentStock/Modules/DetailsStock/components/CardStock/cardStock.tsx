import { DownloadSimple } from '@phosphor-icons/react';
import * as S from './styled';
import { useTenantData } from '@/context';

interface CardDetalhesProps {
  modelo: string;
  carregador: string;
  fornecedor: string;
  situacao: string;
  comentarios: string;
  chip: string;
  funcionamento: 'quebrado' | 'estável' | 'incompleto';
  posSN: string;
  link: string;
}


export function CardStock({carregador, chip, comentarios, fornecedor, funcionamento, link, modelo, posSN, situacao}: CardDetalhesProps) {
  const tenantData = useTenantData();
  
  return (
    <S.ContainerCardDetalhes>
      <S.WrapperContainer>
        <S.InfoContainer>
          <S.InfoTitle>POS - {posSN}</S.InfoTitle>
          <S.InfoSubtitle funcionamento={funcionamento}>{funcionamento}</S.InfoSubtitle>
        </S.InfoContainer>
        <S.EditButton  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='button'>Editar dados</S.EditButton>
      </S.WrapperContainer>
      <S.WrapperContainer2>
        <S.InfoGroup>
          <S.InfoItem>
            <S.InfoLabel  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Modelo</S.InfoLabel>
            <S.InfoValue>{modelo}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Carregador</S.InfoLabel>
            <S.InfoValue>{carregador}</S.InfoValue>
          </S.InfoItem>
        </S.InfoGroup>
        <S.InfoGroup>
          <S.InfoItem>
            <S.InfoLabel  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Fornecedor</S.InfoLabel>
            <S.InfoValue>{fornecedor}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Chip</S.InfoLabel>
            <S.InfoValue>{chip}</S.InfoValue>
          </S.InfoItem>
        </S.InfoGroup>
        <S.InfoGroup>
          <S.InfoItem>
            <S.InfoLabel primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Situação</S.InfoLabel>
            <S.InfoValue>{situacao}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Comentários</S.InfoLabel>
            <S.InfoValue>
            {comentarios}
            </S.InfoValue>
          </S.InfoItem>
        </S.InfoGroup>
      </S.WrapperContainer2>
      <a target='_blank' href={link}>
      <S.DownloadButton  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
      Download <DownloadSimple weight="fill" color='#71839B' />
      </S.DownloadButton>
      </a>
    </S.ContainerCardDetalhes>
  );
}
