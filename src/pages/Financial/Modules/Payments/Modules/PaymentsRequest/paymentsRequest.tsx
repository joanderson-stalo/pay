import { TitleH } from '@/components/Title/title'
import * as S from './styled'
import { CardInfo } from '@/components/CardInfo/cardInfo'
import { useTenantData } from '@/context';

export function PaymentsRequest(){
  const tenantData = useTenantData();

  return(
    <>
      <S.Container>
        <TitleH title='Solicitar pagamentos' />,

        <S.ContainerCard>
        <S.InfoContainer>
          <span>Licenciado ou operação que irá receber o pagamento:</span>
          <h3>    {tenantData.page_title} -  Operações</h3>
        </S.InfoContainer>

       <S.ContainerCardInfo>
       <CardInfo label='Valor nota fiscal' value={500} />
        <CardInfo label='Valor de tarifa' value={500} />
        <CardInfo label='Valor a receber' value={500} />
       </S.ContainerCardInfo>
        </S.ContainerCard>


      </S.Container>
    </>
  )
}
