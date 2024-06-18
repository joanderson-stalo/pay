import { CardDetalhes } from './components/CardDetalhes/cardDetalhes'
import { CardInfo } from './components/CardInfo/cardInfo'
import { CardInfo2 } from './components/CardInfo2/cardInfo2'
import { ComissoesTable, Commission } from './components/ComissoesTable/comissoesTable'
import { HistoricoTableDetalhes } from './components/historicoTableDetalhes/historicoTableDetalhes'
import * as S from './styled'
import { useEffect, useState } from 'react'
import { useLogin } from '@/context/user.login'
import { fetchTransactionDetails } from './getTransactionDescription'
import { TransactionDetails } from './interface'
import { Loading } from '@/components/Loading/loading'
import { formatCurrencyBR } from '@/utils/convertBRDinheiro'
import { formatTaxa } from '@/utils/formatTaxa'
import { toast } from 'react-toastify'
import { CaretLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { useTransactionVendas } from '@/context/useTransaction'
import { useSidebarVisibility } from '@/context/sidebarVisibilityContext'
import { TitleH } from '@/components/Title/title'
import { ExportData } from '@/components/ExportData/exportData'
import { ArrowBack } from '@/components/BtnArrowBack/btnArrowBack'
import { useTenantData } from '@/context'
import jsPDF from 'jspdf'

type DateFormatOptions = {
  year: 'numeric' | '2-digit'
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  day: 'numeric' | '2-digit'
}

export function DetalheVenda() {
  const { selectedTransactionId } = useTransactionVendas()
  const [loading, setLoading] = useState<boolean>(false)
  const [commissions, setCommissions] = useState<Commission[]>([])
  const { dataUser } = useLogin()
  const [liquidations, setLiquidations] = useState([]);
  const { isVisible } = useSidebarVisibility();
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails | null>(null)

    const tenantData = useTenantData();





  function formatDateBR(dateString: string | number | Date): string {
    const options: DateFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
    return new Intl.DateTimeFormat('pt-BR', options).format(
      new Date(dateString)
    )
  }

  function formatTime(dateString: string | number | Date) {
    const date = new Date(dateString)
    return `${String(date.getHours()).padStart(2, '0')}:${String(
      date.getMinutes()
    ).padStart(2, '0')}`
  }

  useEffect(() => {
    async function fetchData() {
      if (selectedTransactionId) {
        try {
          setLoading(true)
          const data = await fetchTransactionDetails(
            selectedTransactionId,
            dataUser
          )
          if (data) {
            setTransactionDetails(data.transaction)
            setCommissions(data.transaction.commissions)
            setLiquidations(data.transaction.liquidations);
          }
        } catch (error) {
          toast.error('Erro ao buscar os detalhes da transação')
        } finally {
          setLoading(false)
        }
      }
    }

    fetchData()
  }, [selectedTransactionId])

 



  const exportPDF = () => {
    if (!transactionDetails) {
      toast.error('Não há detalhes de transação para exportar.');
      return;
    }

    const toastId = toast.loading('Aguardando exportação do comprovante...');

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);

    doc.text('Comprovante de Transação', 105, 20, { align: 'center' });

    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);

    const imageUrl = tenantData.attachment_logo_colorful;
    if (imageUrl) {
      const imgX = 20;
      const imgY = 14;
      const imgWidth = 48;
      const imgHeight = 10;
      doc.addImage(imageUrl, 'JPEG', imgX, imgY, imgWidth, imgHeight);
    }

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    let y = 40;

    const details = [
      ['Data:', formatDateBR(transactionDetails.captured_in)],
      ['Hora:', formatTime(transactionDetails.captured_in)],
      ['Taxa Aplicada:', `${formatTaxa(parseFloat(transactionDetails.tax_applied))}%`],
      ['Equipamento SN:', transactionDetails.equipment_sn],
      ['Adquirente:', transactionDetails.acquire],
      ['Valor:', formatCurrencyBR(parseFloat(transactionDetails.amount))],
      ['Status:', transactionDetails.status === 'succeeded' ? 'Sucesso' : 'Falha'],
      ['NSU:', transactionDetails.nsu_internal],
      ['Parcelas:', transactionDetails.number_installments],
      ['Número do Cartão:', transactionDetails.card_number],
      ['Bandeira:', transactionDetails.brand],
      ['Tipo de Pagamento:', transactionDetails.payment_type === 'debit' ? 'Débito' : transactionDetails.payment_type === 'credit' ? 'Crédito' : transactionDetails.payment_type],
      ['Empresa Vendedora:', transactionDetails.seller_company_name],
      ['ID da Transação:', transactionDetails.id]
    ];

    details.forEach(detail => {
      doc.text(`${detail[0]} ${detail[1]}`, 20, y);
      y += 7;
    });

    const filename = `Comprovante_Transacao_${transactionDetails.id}.pdf`;
    doc.save(filename);
    toast.update(toastId, { render: 'Comprovante exportado com sucesso!', type: 'success', isLoading: false, autoClose: 5000 });
  };



  if (loading) {
    return <Loading />
  }



  return (



    <>

      <S.ContainerDetalhe>

      <S.ContainerTitleDetails>

        <S.WrapperTitle>

            <ArrowBack  />
            <TitleH title="Visão seral" />
        </S.WrapperTitle>


      <ExportData title="Exportar comprovante" onClick={exportPDF}  />

      </S.ContainerTitleDetails>


      <S.SectionCard>
            <CardInfo
              net_amount={formatCurrencyBR(
                transactionDetails?.spread
                  ? parseFloat(transactionDetails?.net_amount)
                  : undefined
              )}
            />
            <CardInfo2
              spread={formatCurrencyBR(
                transactionDetails?.spread
                  ? parseFloat(transactionDetails.spread)
                  : undefined
              )}
            />

          </S.SectionCard>


        <S.ContextDetalhes>
          <CardDetalhes
            captured_in_date={
              transactionDetails
                ? formatDateBR(transactionDetails.captured_in)
                : undefined
            }
            captured_in_time={
              transactionDetails
                ? formatTime(transactionDetails.captured_in)
                : undefined
            }
            tax_applied={transactionDetails ? formatTaxa(parseFloat(transactionDetails.tax_applied)) : undefined}
            equipment_sn={transactionDetails?.equipment_sn}
            acquire={transactionDetails?.acquire}
            id_acquire={transactionDetails?.id_acquire}
            amount={formatCurrencyBR(
              transactionDetails?.amount
                ? parseFloat(transactionDetails?.amount)
                : undefined
            )}
            status={transactionDetails?.status}
            nsu_internal={transactionDetails?.nsu_internal}
            number_installments={transactionDetails?.number_installments}
            card_number={transactionDetails?.card_number}
            brand={transactionDetails?.brand}
            comment={transactionDetails?.comment}
            payment_type={transactionDetails?.payment_type}
            seller_company_name={transactionDetails?.seller_company_name}
            id={transactionDetails?.id}
          />


          <S.SectionTable>

            <HistoricoTableDetalhes  liquidations={liquidations}  />
            <ComissoesTable  commissions={commissions}/>
          </S.SectionTable>

        </S.ContextDetalhes>
      </S.ContainerDetalhe>
    </>





  )
}
