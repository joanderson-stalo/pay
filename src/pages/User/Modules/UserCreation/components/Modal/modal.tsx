import { useEffect } from 'react'
import {
  BackgroundLogin,
  ButtonModal,
  ContainerModal,
  ContainerText,
  ContextModal,
  Image,
  Overlay
} from './styled'
import { ThemeImg } from '@/config/img'

interface IModalSucesso {
  visible: boolean
  onClose: () => void
}

export function Modal({ onClose, visible }: IModalSucesso) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!visible) {
    return null
  }

  return (
    <>
      <Overlay>
        <ContainerModal>
          <BackgroundLogin />
          <ContextModal>
            <div>
              <Image src={ThemeImg.deixaNoAzul} alt="" />
              <ContainerText>
                <p>Usuário
            cadastrado!</p>
            <span>Um e-mail de criação de
senha foi enviado para
o novo usuário.</span>
              </ContainerText>

            </div>
            <ButtonModal onClick={() => onClose()}>Concluir</ButtonModal>
          </ContextModal>
        </ContainerModal>
      </Overlay>
    </>
  )
}
