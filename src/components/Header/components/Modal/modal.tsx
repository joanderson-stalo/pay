import * as S from "./styled";
import { useLogin } from "@/context/user.login";

export function Modal(){
  const { logout } = useLogin();
  return(
    <S.ContainerModal>
      <S.Button>Meus Dados</S.Button>
        <S.ContextLine>
        <S.Line />
      <S.Button>Usuários</S.Button>
      <S.Line />
        </S.ContextLine>
      <S.ButtonClose onClick={logout} >Sair</S.ButtonClose>
    </S.ContainerModal>
  )
}
