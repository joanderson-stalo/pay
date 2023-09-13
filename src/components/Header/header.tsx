import { useContext, useState } from 'react'
import {
  ButtonHeader,
  ButtonNotification,
  ContainerHeader,
  ContainerModal,
  ContainerPerfil,
  ImagPerfil,
  NomePerfil
} from './styled'
import { Modal } from './components/Modal/modal'
import { ThemeColor } from '@/config/color'
import { useLogin } from '@/context/user.login';
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import fotoPerfil from '@assets/icons/perfil.svg'
import notif from '@assets/icons/Notif.svg'

export function Header() {
  const { dataUser } = useLogin();
  const [openModal, setOpenModal] = useState(false)

  return (
    <ContainerHeader>
      <p></p>
      <ContainerPerfil>
        {openModal ? (
          <ButtonHeader color={ThemeColor.secundaria} onClick={() => setOpenModal(false)}>
            <ImagPerfil color={ThemeColor.secundaria} src={fotoPerfil} />
             <NomePerfil>{dataUser?.name}</NomePerfil>
            <CaretUp />
          </ButtonHeader>
        ) : (
          <ButtonHeader color={ThemeColor.secundaria} onClick={() => setOpenModal(true)}>
            <ImagPerfil color={ThemeColor.secundaria} src={fotoPerfil} />
                     <NomePerfil>{dataUser?.name}</NomePerfil>
            <CaretDown  />
          </ButtonHeader>
        )}
        <ButtonNotification> <img src={notif} alt="" /></ButtonNotification>
        <ContainerModal>{openModal && <Modal />}</ContainerModal>
      </ContainerPerfil>

    </ContainerHeader>
  )
}
