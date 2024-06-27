import { useForm, SubmitHandler } from 'react-hook-form'
import {
  CustomInputPix,
  CustomTextareaPix
} from '@/components/Confrapix/confrapix'
import * as S from './styled'
import { BtnAdvance } from '@/components/BtnAdvance/btnAdvance'
import { BtnReturn } from '@/components/BtnReturn/btnReturn'
import { TitleH } from '@/components/Title/title'

import iconCop from '@/assets/icons/iconCopy.svg'

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

// interface FormData {
//   amount: number | undefined;
//   dateExpiration: string | undefined;
//   customerName: string;
//   customerDocument: string;
//   description: string;
// }

export function QRcodeCPF() {
  const navigate = useNavigate()

  return (
    <>
      <S.Container>
        <S.ContainerTitleHeader>
          <TitleH title="Confrapix" />

        </S.ContainerTitleHeader>

        <S.ContainerMain>
          <div>
            <S.ContainerTableInfo>
              <S.TableRow>
                <S.ContentCell>
                  <S.TitleCell>ID da transação:</S.TitleCell>
                  <S.InfoCell>#937428</S.InfoCell>
                </S.ContentCell>

                <S.ContentCell>
                  <S.TitleCell>Valor:</S.TitleCell>
                  <S.InfoCell>R$ 30,00</S.InfoCell>
                </S.ContentCell>

                <S.ContentCell>
                  <S.TitleCell>Nome completo:</S.TitleCell>
                  <S.InfoCell>Eduarda Bittencourt</S.InfoCell>
                </S.ContentCell>
              </S.TableRow>

              <S.TableRow>
                <S.ContentCell>
                  <S.TitleCell>Vencimento</S.TitleCell>
                  <S.InfoCell>25/06/2024</S.InfoCell>
                </S.ContentCell>
                <S.ContentCell>
                  <S.TitleCell>CPF:</S.TitleCell>
                  <S.InfoCell>384.859.938-94</S.InfoCell>
                </S.ContentCell>
              </S.TableRow>
            </S.ContainerTableInfo>

            <S.ContainerDescri>
              <S.ContentCell>
                <S.TitleCell>Descrição</S.TitleCell>
                <S.Description>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen.
                </S.Description>
              </S.ContentCell>
            </S.ContainerDescri>

            <S.ContainerDescri>
              <S.TitleCell>Código copia e cola</S.TitleCell>
              <S.CopiaECola>
                <p>
                  00020101021126580014br.gov.bcb.pix01366616d678-01a4-44c4-8e6d-04197c1132b9520400005303986540520.005802BR5923TATYANA
                  CARNEIRO MENDES6009SAO
                  PAULO622905251J0VCW5D3F4DY1MHBGBVVKYPB6304185A
                </p>

                <S.ButtonCopy>
                  <img src={iconCop} alt="icone copia e cola" />
                </S.ButtonCopy>


              </S.CopiaECola>
            </S.ContainerDescri>
          </div>

          <S.ContainerQrcode>
            <S.QRCode
              src="https://qr.appless.dev/pix/15002d888f4363b8e514ce188b13b7"
              alt=""
            />
          </S.ContainerQrcode>
        </S.ContainerMain>

        <S.ContainerButton>
          <BtnAdvance title="Criar novo Pix" onClick={() => navigate(-1)} />
          <BtnReturn title="Visão geral" onClick={() => false} />
          <S.ButtonDownloadInfo>Baixar informações</S.ButtonDownloadInfo>
        </S.ContainerButton>
      </S.Container>
    </>
  )
}
