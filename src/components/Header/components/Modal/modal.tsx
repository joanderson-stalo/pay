import * as S from "./styled";
import { useLogin } from "@/context/user.login";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  closeModal: () => void;
}

export function Modal({ closeModal }: ModalProps) {
  const { logout } = useLogin();
  const navigate = useNavigate();

  const handleUserListClick = () => {
    console.log("handleUserListClick chamado");
    navigate('/user-seller');
    closeModal();
    localStorage.setItem('selectedItem', '0');
console.log(localStorage.getItem('selectedItem'));

  }

  const handleLogoutClick = () => {
    logout();
    closeModal();
  }

  return(
    <S.ContainerModal>
      <S.Button onClick={closeModal}>Meus Dados</S.Button>
      <S.ContextLine>
        <S.Line />
        <S.Button onClick={handleUserListClick}>Usuários</S.Button>
        <S.Line />
      </S.ContextLine>
      <S.ButtonClose onClick={handleLogoutClick}>Sair</S.ButtonClose>
    </S.ContainerModal>
  )
}
