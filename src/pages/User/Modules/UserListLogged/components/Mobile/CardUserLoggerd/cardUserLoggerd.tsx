import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { useTenantData } from "@/context";

interface CardUserLoggedProps {
  data: {
    id: number;
    name: string;
    profile_id: string;
    email: string;
    document_id: string;
  }[];
  handlePasswordRetrieve: (email: string) => void;
  handleRemove: (id: number) => void;
}

export function CardUserLogged({ data, handlePasswordRetrieve, handleRemove }: CardUserLoggedProps) {
  const navigate = useNavigate()
  const tenantData = useTenantData();

  const handleEditClick = (id: number): void => {
    navigate(`/user/edit/${id}`);
}

  return (
    <>
      {data.map((user, index) => (
        <S.ContainerCardUserLogged key={user.id}>

          <S.HeaderUserLogged  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>

            <h2>{user.name}</h2>
            {index === 0 ? <h4>Você</h4> : <h5></h5>}
          </S.HeaderUserLogged>

          <S.ContainerInfo>
            <S.UserInfo>
              <h3>Função: <span>{user.profile_id}</span> </h3>
              <h3>E-mail: <span>{user.email}</span> </h3>
            </S.UserInfo>

            <S.UserBtn>
            <S.ButtonRecover primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={() => handleEditClick(user.id)}>
                Editar
              </S.ButtonRecover>
              <S.ButtonRecover primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={() => handlePasswordRetrieve(user.email)}>
                Recuperar senha
              </S.ButtonRecover>
              {index !== 0 && (
                <S.ButtonRemove primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} onClick={() => handleRemove(user.id)}>
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
