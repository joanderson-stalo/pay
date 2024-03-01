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
  text: string
  onClose: () => void
}

export function ModalSucesso({ onClose, visible, text }: IModalSucesso) {
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
              <Image src={ThemeImg.logo} alt="" />
              <ContainerText>
                <p>{text} <span>com sucesso!</span></p>
              </ContainerText>
            </div>
            <ButtonModal onClick={() => onClose()}>Concluir</ButtonModal>
          </ContextModal>
        </ContainerModal>
      </Overlay>
    </>
  )
}
