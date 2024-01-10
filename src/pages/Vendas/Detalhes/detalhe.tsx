import { useTransactionVendas } from '@/context/useVendas'
import { CardDetalhes } from './components/CardDetalhes/cardDetalhes'
import { CardInfo } from './components/CardInfo/cardInfo'
import { CardInfo2 } from './components/CardInfo2/cardInfo2'
import { ComissoesTable } from './components/ComissoesTable/comissoesTable'
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

type DateFormatOptions = {
  year: 'numeric' | '2-digit'
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  day: 'numeric' | '2-digit'
}

export function DetalheVenda() {
  const { selectedTransactionId } = useTransactionVendas()
  const [loading, setLoading] = useState<boolean>(false)
  const { dataUser } = useLogin()
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails | null>(null)

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

  const navigate = useNavigate()

  const handleVendas = () => {
    navigate('/vendas')
  }

  return (
    <>
      {loading ? <Loading />
      :
    <>
            <S.ButtonBlack onClick={handleVendas}><CaretLeft size={18} />Voltar</S.ButtonBlack>
      <S.ContainerDetalhe>
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
            nsu_external={transactionDetails?.nsu_external}
            number_installments={transactionDetails?.number_installments}
            card_number={transactionDetails?.card_number}
            brand={transactionDetails?.brand}
            comment={transactionDetails?.comment}
            payment_type={transactionDetails?.payment_type}
            seller_company_name={transactionDetails?.seller_company_name}
          />

 
      
          <S.SectionTable>
            <S.ContextContainer>
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
          <HistoricoTableDetalhes />
            </S.ContextContainer>
            <ComissoesTable />
            
          </S.SectionTable>
        </S.ContextDetalhes>
      </S.ContainerDetalhe>
    </>


      }

    </>
  )
}
