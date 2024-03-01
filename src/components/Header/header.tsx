import { useState, useEffect, useRef } from 'react';
import {
  ButtonHeader,
  ButtonNotification,
  ContainerHeader,
  ContainerModal,
  ContainerPerfil,
  ImagPerfil,
  NomePerfil
} from './styled';
import { Modal } from './components/Modal/modal';
import { ThemeColor } from '@/config/color';
import { useLogin } from '@/context/user.login';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import fotoPerfil from '@assets/icons/perfil.svg';
import notif from '@assets/icons/Notif.svg';

export function Header() {
  const { dataUser } = useLogin();
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    setOpenModal(false);
  }

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (openModal) {
        closeModal();
      }
    };

    if (openModal) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [openModal]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, []);

  return (
    <ContainerHeader>
      <p></p>
      <ContainerPerfil>
        {openModal ? (
          <ButtonHeader color={ThemeColor.secundaria} onClick={closeModal}>
            <ImagPerfil color={ThemeColor.secundaria} src={dataUser?.document_id} />
            <NomePerfil>{dataUser?.name}</NomePerfil>
            <CaretUp />
          </ButtonHeader>
        ) : (
          <ButtonHeader color={ThemeColor.secundaria} onClick={() => setOpenModal(true)}>
            <ImagPerfil color={ThemeColor.secundaria} src={dataUser?.document_id} />
            <NomePerfil>{dataUser?.name}</NomePerfil>
            <CaretDown  />
          </ButtonHeader>
        )}
        <ButtonNotification> <img src={notif} alt="" /></ButtonNotification>
        <ContainerModal ref={modalRef}>{openModal && <Modal closeModal={closeModal} />}</ContainerModal>
      </ContainerPerfil>
    </ContainerHeader>
  )
}
