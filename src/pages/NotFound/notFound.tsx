import * as S from './styled'

import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import { TextNotFound } from '@/config/text'
import { ThemeColor } from '@/config/color'
import { handleLogin } from '@/utils/handleNavigate'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <S.CotainerNotFound>
        <S.Container404>
          <S.Title404>404</S.Title404>
        </S.Container404>
      <S.CotainerText>
        <p>{TextNotFound.paginaNaoEncontrada}</p>
        <span>{TextNotFound.naoExiste}</span>
      </S.CotainerText>
      <S.Back color={ThemeColor.secundaria} onClick={() => handleLogin(navigate)}>
        <S.IconWrapper color={ThemeColor.secundaria}>
          <IoIosArrowBack />
        </S.IconWrapper>
        {TextNotFound.voltar}
      </S.Back>
    </S.CotainerNotFound>
  )
}
