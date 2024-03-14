import * as S from './styled'

import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import { TextNotFound } from '@/config/text'
import { handleLogin } from '@/utils/handleNavigate'
import { useTenantData } from '@/context'

export function NotFound() {
  const navigate = useNavigate()
  const tenantData = useTenantData();

  return (
    <S.CotainerNotFound>
        <S.Container404>
          <S.Title404  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>404</S.Title404>
        </S.Container404>
      <S.CotainerText>
        <p>{TextNotFound.paginaNaoEncontrada}</p>
        <span>{TextNotFound.naoExiste}</span>
      </S.CotainerText>
      <S.Back color={tenantData.secondary_color_identity} onClick={() => handleLogin(navigate)}>
        <S.IconWrapper color={tenantData.secondary_color_identity}>
          <IoIosArrowBack />
        </S.IconWrapper>
        {TextNotFound.voltar}
      </S.Back>
    </S.CotainerNotFound>
  )
}
