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
import { useTenantData } from '@/context'

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
  const tenantData = useTenantData();
  return (
    <>
      <Overlay>
        <ContainerModal>
          <BackgroundLogin  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}/>
          <ContextModal>
            <div>
              <Image src={tenantData.attachment_logo_colorful} alt="" />
              <ContainerText  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>
                <p>{text} <span>com sucesso!</span></p>
              </ContainerText>
            </div>
            <ButtonModal  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={() => onClose()}>Concluir</ButtonModal>
          </ContextModal>
        </ContainerModal>
      </Overlay>
    </>
  )
}
