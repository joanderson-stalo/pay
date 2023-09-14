import { useTransactionVendas } from "@/context/useVendas";
import { CardDetalhes } from "./components/CardDetalhes/cardDetalhes";
import { CardInfo } from "./components/CardInfo/cardInfo";
import { CardInfo2 } from "./components/CardInfo2/cardInfo2";
import { ComissoesTable } from "./components/ComissoesTable/comissoesTable";
import { HistoricoTableDetalhes } from "./components/historicoTableDetalhes/historicoTableDetalhes";
import * as S from "./styled";
import { useEffect, useState } from "react";
import { useLogin } from "@/context/user.login";
import { fetchTransactionDetails } from "./getTransactionDescription";
import { TransactionDetails } from "./interface";
import { Loading } from "@/components/Loading/loading";


export function DetalheVenda(){
  const { selectedTransactionId } = useTransactionVendas();
  const [loading, setLoading] = useState<boolean>(false);
  const { dataUser } = useLogin();
  const [transactionDetails, setTransactionDetails] = useState<TransactionDetails | null>(null);


  useEffect(() => {
    async function fetchData() {
      if (selectedTransactionId) {
        try {
          setLoading(true)
          const data = await fetchTransactionDetails(selectedTransactionId, dataUser);
          if (data) {
            setTransactionDetails(data.transaction);
          }
        } catch (error) {
          console.error('Erro ao buscar os detalhes da transação:', error);
        }
        finally{
          setLoading(false)
        }
      }
    }

    fetchData();
  }, [selectedTransactionId]);

  return(
    <>
    {loading && <Loading />}
      <S.ContainerDetalhe>
      <S.ContextDetalhes>
      <CardDetalhes seller_company_name={transactionDetails?.seller_company_name} />

<S.SectionCard>
  <CardInfo />
  <CardInfo2 />
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
