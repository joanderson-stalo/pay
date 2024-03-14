import * as S from './styled'
import { useState } from 'react'
import { useLogin } from '@/context/user.login'
import { Loading } from '@/components/Loading/loading'
import { CaretLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { mockCardStock } from './components/CardStock/mockCardStock'
import { CardStock } from './components/CardStock/cardStock'
import { TableStock } from './components/TableStock/tableStock'
import { useTenantData } from '@/context'



export function DetailsStock() {

  const [loading, setLoading] = useState<boolean>(false)
  const tenantData = useTenantData();
  const navigate = useNavigate()

  const handleVendas = () => {
    navigate('/transaction')
  }

  return (
    <>
      {loading ? <Loading />
      :
    <>
            <S.ButtonBlack  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}  onClick={handleVendas}><CaretLeft size={18} />Voltar</S.ButtonBlack>

        <S.ContextDetalhes>
        <CardStock {...mockCardStock} />

        </S.ContextDetalhes>

       <S.ContainerWrapper>

       < TableStock  />

        <S.ContainerBtn>
        <S.EditButton  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}  type='button'>Enviar para a rede</S.EditButton>
        <S.CancelButton  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}  type='button'>Excluir POS</S.CancelButton >
        </S.ContainerBtn>

       </S.ContainerWrapper>

    </>


      }

    </>
  )
}
