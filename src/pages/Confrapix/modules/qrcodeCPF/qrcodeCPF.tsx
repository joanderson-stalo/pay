import * as S from './styled'
import { BtnAdvance } from '@/components/BtnAdvance/btnAdvance'
import { BtnReturn } from '@/components/BtnReturn/btnReturn'
import { TitleH } from '@/components/Title/title'
import iconCop from '@/assets/icons/iconCopy.svg'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import React, { useRef } from 'react'
import { jsPDF } from 'jspdf'
import pixTransaction from './json'  // Importa os dados PIX

export function QRcodeCPF() {
  const navigate = useNavigate()
  const copyTextRef = useRef<HTMLParagraphElement>(null)

  const transaction = pixTransaction.response[0]  // Acessa a primeira transação



  const handleCopy = () => {
    navigator.clipboard.writeText(transaction.pix.code).then(() => {
      toast.success('Pix copiado!', {
        position: toast.POSITION.TOP_CENTER
      })
    }).catch(err => {
      console.error('Failed to copy: ', err)
      toast.error('Falha ao copiar!', {
        position: toast.POSITION.TOP_CENTER
      })
    })
  }

  const handleDownload = () => {

  };



  function formatCPF(cpf: string) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  return (
    <>
      <S.Container>
        <S.ContainerTitleHeader>
          <TitleH title="Confrapix" />
        </S.ContainerTitleHeader>

        <S.ContainerMain>
          <S.Wrapper>
            <div>
            <S.ContainerTableInfo>
              <S.TableRow>
                <S.ContentCell>
                  <S.TitleCell>ID da transação:</S.TitleCell>
                  <S.InfoCell>{transaction.id}</S.InfoCell>
                </S.ContentCell>

                <S.ContentCell>
                  <S.TitleCell>Valor:</S.TitleCell>
                  <S.InfoCell>{transaction.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.InfoCell>

                </S.ContentCell>

                <S.ContentCell>
                  <S.TitleCell>Nome completo:</S.TitleCell>
                  <S.InfoCell>{transaction.customer_name}</S.InfoCell>
                </S.ContentCell>
              </S.TableRow>

              <S.TableRow>
                <S.ContentCell>
                  <S.TitleCell>Vencimento</S.TitleCell>
                  <S.InfoCell>{new Date(transaction.pix.dateExpiration).toLocaleDateString()}</S.InfoCell>
                </S.ContentCell>
                <S.ContentCell>
                  <S.TitleCell>CPF:</S.TitleCell>
                  <S.InfoCell>{formatCPF(transaction.customer_document)}</S.InfoCell>

                </S.ContentCell>
              </S.TableRow>
            </S.ContainerTableInfo>

            <S.ContainerDescri>
              <S.ContentCell>
                <S.TitleCell>Descrição</S.TitleCell>
                <S.Description>{transaction.description}</S.Description>
              </S.ContentCell>
            </S.ContainerDescri>
            </div>
            <S.ContainerDescri>
              <S.TitleCell>Código copia e cola</S.TitleCell>
              <S.CopiaECola>
                <p ref={copyTextRef}>{transaction.pix.code}</p>
                <S.ButtonCopy onClick={handleCopy}>
                  <img src={iconCop} alt="icone copia e cola" />
                </S.ButtonCopy>
              </S.CopiaECola>
            </S.ContainerDescri>
          </S.Wrapper>

          <S.ContainerQrcode id="qrCodeContainer">
            <S.QRCode src={transaction.pix.url} alt="QR Code" />
          </S.ContainerQrcode>

        </S.ContainerMain>

        <S.ContainerButton>
          <BtnAdvance title="Criar novo Pix" onClick={() => navigate(-1)} />
          <S.ButtonDownloadInfo onClick={handleDownload}>Baixar informações</S.ButtonDownloadInfo>
        </S.ContainerButton>
      </S.Container>
    </>
  )
}
