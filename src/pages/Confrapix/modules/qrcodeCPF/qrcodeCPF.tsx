import * as S from './styled'
import { BtnAdvance } from '@/components/BtnAdvance/btnAdvance'

import { TitleH } from '@/components/Title/title'
import iconCop from '@/assets/icons/iconCopy.svg'
import { toast } from 'react-toastify'
import { useRef} from 'react'
import { NoteData } from '@/components/NoteData/noteData'

interface Pix {
  url: string
  code: string
  dateExpiration: string
}

interface Transaction {
  id: number
  status: string
  amount: string
  customer_name?: string
  customer_document?: string
  description?: string
  pix: Pix
}

interface QRcodeCPFProps {
  transaction: Transaction | null
  onClick: () => void; 
}

export function QRcodeCPF({ transaction, onClick }: QRcodeCPFProps) {
  const copyTextRef = useRef<HTMLParagraphElement>(null)

  const handleCopy = () => {
    if (transaction?.pix?.code) {
      navigator.clipboard
        .writeText(transaction.pix.code)
        .then(() => {
          toast.success('Pix copiado!', {
            position: toast.POSITION.TOP_CENTER
          })
        })
        .catch(err => {
          toast.error('Falha ao copiar!', {
            position: toast.POSITION.TOP_CENTER
          })
        })
    }
  }

  const handleDownload = () => {}

  const formatCPF = (cpf: string) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }


  if (!transaction) {
    return <NoteData />
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
                    <S.TitleCell>
                      ID da transação:
                      <S.StatusPayment>
                        {transaction.status === 'AGUARDANDO'
                          ? 'Aguardando pagamento'
                          : 'Pagamento confirmado'}
                      </S.StatusPayment>
                    </S.TitleCell>
                    <S.InfoCell>{transaction.id}</S.InfoCell>
                  </S.ContentCell>

                  <S.ContentCell>
                    <S.TitleCell>Valor:</S.TitleCell>
                    <S.InfoCell>
                      {parseFloat(transaction.amount).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </S.InfoCell>
                  </S.ContentCell>

                  {transaction.customer_name && (
                    <S.ContentCell>
                      <S.TitleCell>Nome completo:</S.TitleCell>
                      <S.InfoCell>{transaction.customer_name}</S.InfoCell>
                    </S.ContentCell>
                  )}
                </S.TableRow>

                <S.TableRow>
                  <S.ContentCell>
                    <S.TitleCell>Vencimento</S.TitleCell>
                    <S.InfoCell>
                      {new Date(
                        transaction.pix.dateExpiration
                      ).toLocaleDateString()}
                    </S.InfoCell>
                  </S.ContentCell>
                  {transaction.customer_document && (
                    <S.ContentCell>
                      <S.TitleCell>CPF:</S.TitleCell>
                      <S.InfoCell>
                        {formatCPF(transaction.customer_document)}
                      </S.InfoCell>
                    </S.ContentCell>
                  )}
                </S.TableRow>
              </S.ContainerTableInfo>

              <S.ContainerDescri>
                {transaction.description && (
                  <S.ContentCell>
                    <S.TitleCell>Descrição</S.TitleCell>
                    <S.Description>{transaction.description}</S.Description>
                  </S.ContentCell>
                )}
              </S.ContainerDescri>
            </div>
            <S.ContainerDescri>
              <S.TitleCell>Código copia e cola</S.TitleCell>

              <S.CopiaECola>
                <S.Codigo ref={copyTextRef}>{transaction.pix.code}</S.Codigo>
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
          <BtnAdvance title="Criar novo Pix" onClick={onClick} />
          <S.ButtonDownloadInfo onClick={handleDownload}>
            Baixar informações
          </S.ButtonDownloadInfo>
        </S.ContainerButton>
      </S.Container>
    </>
  )
}
