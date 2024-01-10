import { DownloadSimple } from '@phosphor-icons/react';
import * as S from './styled';

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
  return (
    <S.ContainerCardDetalhes>
      <S.WrapperContainer>
        <S.InfoContainer>
          <S.InfoTitle>POS - {posSN}</S.InfoTitle>
          <S.InfoSubtitle funcionamento={funcionamento}>{funcionamento}</S.InfoSubtitle>
        </S.InfoContainer>
        <S.EditButton type='button'>Editar dados</S.EditButton>
      </S.WrapperContainer>
      <S.WrapperContainer2>
        <S.InfoGroup>
          <S.InfoItem>
            <S.InfoLabel>Modelo</S.InfoLabel>
            <S.InfoValue>{modelo}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>Carregador</S.InfoLabel>
            <S.InfoValue>{carregador}</S.InfoValue>
          </S.InfoItem>
        </S.InfoGroup>
        <S.InfoGroup>
          <S.InfoItem>
            <S.InfoLabel>Fornecedor</S.InfoLabel>
            <S.InfoValue>{fornecedor}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>Chip</S.InfoLabel>
            <S.InfoValue>{chip}</S.InfoValue>
          </S.InfoItem>
        </S.InfoGroup>
        <S.InfoGroup>
          <S.InfoItem>
            <S.InfoLabel>Situação</S.InfoLabel>
            <S.InfoValue>{situacao}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>Comentários</S.InfoLabel>
            <S.InfoValue>
            {comentarios}
            </S.InfoValue>
          </S.InfoItem>
        </S.InfoGroup>
      </S.WrapperContainer2>
      <a target='_blank' href={link}>
      <S.DownloadButton>
      Download <DownloadSimple weight="fill" color='#71839B' />
      </S.DownloadButton>
      </a>
    </S.ContainerCardDetalhes>
  );
}
