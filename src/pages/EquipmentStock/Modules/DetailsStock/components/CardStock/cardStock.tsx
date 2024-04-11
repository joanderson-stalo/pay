import { DownloadSimple } from '@phosphor-icons/react';
import * as S from './styled';
import { useTenantData } from '@/context';

interface CardDetalhesProps {
  model: string;
  owner_name: string;
  acquire: string;
  location: string;
  comment: string;
  seller_name: string;
  funcionamento: 'quebrado' | 'estável' | 'incompleto';
  serial_number: string;
  link: string;

}


export function CardStock({owner_name, seller_name, comment, acquire, funcionamento, link, model, serial_number, location}: CardDetalhesProps) {
  const tenantData = useTenantData();

  const renderValue = (value: string | null | undefined) => {
    return value ? value : '---';
  };

  return (
    <S.ContainerCardDetalhes>
      <S.WrapperContainer>
        <S.InfoContainer>
          <S.InfoTitle>POS - {serial_number}</S.InfoTitle>
          <S.InfoSubtitle funcionamento={funcionamento}>{funcionamento}</S.InfoSubtitle>
        </S.InfoContainer>

      </S.WrapperContainer>

      <div style={{display: 'flex'}}>
      <S.WrapperContainer2>

<S.InfoWrapper>


<S.InfoItem>
  <S.InfoLabel  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Modelo</S.InfoLabel>
  <S.InfoValue>{model}</S.InfoValue>
</S.InfoItem>


<S.InfoItem>
  <S.InfoLabel  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Fornecedor</S.InfoLabel>
  <S.InfoValue>{acquire}</S.InfoValue>
</S.InfoItem>


<S.InfoItem>
  <S.InfoLabel primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Localização</S.InfoLabel>
  <S.InfoValue>{location === 'inventory' ? 'Inventário' : 'Estoque' }</S.InfoValue>
</S.InfoItem>



</S.InfoWrapper>

<S.InfoWrapper2>
<S.InfoItem>
  <S.InfoLabel  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Proprietário</S.InfoLabel>
  <S.InfoValue>{renderValue(owner_name)}</S.InfoValue>
</S.InfoItem>


<S.InfoItem>
  <S.InfoLabel  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Estabelecimento</S.InfoLabel>
  <S.InfoValue>{renderValue(seller_name)}</S.InfoValue>
</S.InfoItem>

</S.InfoWrapper2>

<S.InfoItem>
  <S.InfoLabel  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>Comentários</S.InfoLabel>
  <S.InfoValueComent >
  {comment}
  </S.InfoValueComent >
</S.InfoItem>


</S.WrapperContainer2>

< S.ImgPos src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1402119/183083_672647.png" alt="" />
      </div>

    </S.ContainerCardDetalhes>
  );
}
