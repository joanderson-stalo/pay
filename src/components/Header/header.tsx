import { useContext, useState } from 'react'
import {
  ButtonHeader,
  ContainerHeader,
  ContainerModal,
  ContainerPerfil,
  ImagPerfil,
  NomePerfil
} from './styled'
import { Modal } from './components/Modal/modal'
import { RxTriangleDown, RxTriangleUp } from 'react-icons/Rx'
import { ThemeColor } from '@/config/color'
import { useLogin } from '@/context/user.login';

export function Header() {
  const { dataUser } = useLogin();
  const [openModal, setOpenModal] = useState(false)

  return (
    <ContainerHeader>
      <p></p>
      <ContainerPerfil>
        <NomePerfil>{dataUser?.name}</NomePerfil>
        {openModal ? (
          <ButtonHeader color={ThemeColor.secundaria} onClick={() => setOpenModal(false)}>
            <ImagPerfil color={ThemeColor.secundaria} src='https://github.com/Joanderson337.png' />
            <RxTriangleUp />
          </ButtonHeader>
        ) : (
          <ButtonHeader color={ThemeColor.secundaria} onClick={() => setOpenModal(true)}>
            <ImagPerfil color={ThemeColor.secundaria} src='https://github.com/Joanderson337.png' />
            <RxTriangleDown />
          </ButtonHeader>
        )}
        <ContainerModal>{openModal && <Modal />}</ContainerModal>
      </ContainerPerfil>
    </ContainerHeader>
  )
}
