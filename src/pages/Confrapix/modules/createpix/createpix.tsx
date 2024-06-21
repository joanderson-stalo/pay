import {
  CustomInputPix,
  CustomTextareaPix
} from '@/components/Confrapix/confrapix'
import * as S from './styled'
import { useTenantData } from '@/context'
import { BtnAdvance } from '@/components/BtnAdvance/btnAdvance'
import { BtnReturn } from '@/components/BtnReturn/btnReturn'
import { TitleH } from '@/components/Title/title'


export function ConfraPix() {
  

  return (
    <>
      <S.Container>
        <S.ContainerTitleHeader>
          <TitleH title="Confrapix" />
          <S.Description>Crie o QR Code e o copia e cola PIX</S.Description>
        </S.ContainerTitleHeader>

        <S.ContainerForm>
          <S.ContainerInput>


            <CustomInputPix
              label="Valor (R$)"
              placeholder="Digite o valor do pix que será gerado"
              required
            />

            <CustomInputPix
              label="Data de vencimento"
              placeholder="Digite a data que o pix irá expirar"
              required
            />
          </S.ContainerInput>

          <S.DescriptionInfo>
            Ao preencher as informações do destinatário do PIX, apenas a pessoa
            com o nome e CPF vinculados poderá realizar o pagamento.
          </S.DescriptionInfo>

          <S.ContainerInput>
            <CustomInputPix label="Nome" placeholder="Digite o nome completo" />

            <CustomInputPix label="CPF" placeholder="000.000.000-0" required />
          </S.ContainerInput>

          <S.ContainerInput2>

            <CustomTextareaPix
              label="Descrição"
              placeholder="Digite uma breve descrição"
            />
          </S.ContainerInput2>

        </S.ContainerForm>

        <S.ContainerButton>
          <BtnReturn title="Cancelar" onClick={() => false} />
          <BtnAdvance onClick={() => false} title="Gerar Pix" />
        </S.ContainerButton>
      </S.Container>

      {/* primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} */}
    </>
  )
}
