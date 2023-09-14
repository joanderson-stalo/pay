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


type DateFormatOptions = {
  year: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day: 'numeric' | '2-digit';
};

export function DetalheVenda() {
  const { selectedTransactionId } = useTransactionVendas()
  const [loading, setLoading] = useState<boolean>(false)
  const { dataUser } = useLogin()
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails | null>(null)


  function formatDateBR(dateString: string | number | Date): string {
      const options: DateFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Intl.DateTimeFormat('pt-BR', options).format(new Date(dateString));
  }


  function formatTime(dateString: string | number | Date) {
      const date = new Date(dateString);
      return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
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
          console.error('Erro ao buscar os detalhes da transação:', error)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchData()
  }, [selectedTransactionId])

  return (
    <>
      {loading && <Loading />}
      <S.ContainerDetalhe>
        <S.ContextDetalhes>
          <CardDetalhes
            captured_in_date={transactionDetails ? formatDateBR(transactionDetails.captured_in) : undefined}
            captured_in_time={transactionDetails ? formatTime(transactionDetails.captured_in) : undefined}
            tax_applied={transactionDetails?.tax_applied}
            equipment_sn={transactionDetails?.equipment_sn}
            acquire={transactionDetails?.acquire}
            id_acquire={transactionDetails?.id_acquire}
            amount={transactionDetails?.amount}
            status={transactionDetails?.status}
            nsu_external={transactionDetails?.nsu_external}
            number_installments={transactionDetails?.number_installments}
            card_number={transactionDetails?.card_number}
            brand={transactionDetails?.brand}
            comment={transactionDetails?.comment}
            payment_type={transactionDetails?.payment_type}
            seller_company_name={transactionDetails?.seller_company_name}
          />

          <S.SectionCard>
            <CardInfo net_amount={transactionDetails?.net_amount} />
            <CardInfo2 spread={transactionDetails?.spread} />
          </S.SectionCard>

          <S.SectionTable>
            <ComissoesTable />
            <HistoricoTableDetalhes />
          </S.SectionTable>
        </S.ContextDetalhes>
      </S.ContainerDetalhe>
    </>
  )
}
