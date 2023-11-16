import * as S from "./styled";

interface CardUserLoggedProps {
  data: {
    id: number;
    name: string;
    profile_id: string;
    email: string;
  }[];
  handlePasswordRetrieve: (email: string) => void;
  handleRemove: (id: number) => void;
}

export function CardUserLogged({ data, handlePasswordRetrieve, handleRemove }: CardUserLoggedProps) {
  return (
    <>
      {data.map((user, index) => (
        <S.ContainerCardUserLogged key={user.id}>

          <S.HeaderUserLogged>
            <S.UserAvatar />
            <h2>{user.name}</h2>
            {index === 0 ? <h4>Você</h4> : <h5></h5>} 
          </S.HeaderUserLogged>

          <S.ContainerInfo>
            <S.UserInfo>
              <h3>Função: <span>{user.profile_id}</span> </h3>
              <h3>E-mail: <span>{user.email}</span> </h3>
            </S.UserInfo>

            <S.UserBtn>
              <S.ButtonRecover onClick={() => handlePasswordRetrieve(user.email)}>
                Recuperar senha
              </S.ButtonRecover>
              {index !== 0 && (
                <S.ButtonRemove onClick={() => handleRemove(user.id)}>
                  Remover
                </S.ButtonRemove>
              )}
            </S.UserBtn>
          </S.ContainerInfo>

        </S.ContainerCardUserLogged>
      ))}
    </>
  );
}
