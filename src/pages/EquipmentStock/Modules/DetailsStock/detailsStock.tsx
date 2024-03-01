import * as S from './styled'
import { useState } from 'react'
import { useLogin } from '@/context/user.login'
import { Loading } from '@/components/Loading/loading'
import { CaretLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { mockCardStock } from './components/CardStock/mockCardStock'
import { CardStock } from './components/CardStock/cardStock'
import { TableStock } from './components/TableStock/tableStock'



export function DetailsStock() {

  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleVendas = () => {
    navigate('/transaction')
  }

  return (
    <>
      {loading ? <Loading />
      :
    <>
            <S.ButtonBlack onClick={handleVendas}><CaretLeft size={18} />Voltar</S.ButtonBlack>

        <S.ContextDetalhes>
        <CardStock {...mockCardStock} />

        </S.ContextDetalhes>

       <S.ContainerWrapper>

       < TableStock  />

        <S.ContainerBtn>
        <S.EditButton type='button'>Enviar para a rede</S.EditButton>
        <S.CancelButton  type='button'>Excluir POS</S.CancelButton >
        </S.ContainerBtn>

       </S.ContainerWrapper>

    </>


      }

    </>
  )
}
