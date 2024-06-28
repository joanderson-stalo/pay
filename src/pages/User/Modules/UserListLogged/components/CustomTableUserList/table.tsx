import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import profile from '@assets/icons/perfil.svg';
import { useTenantData } from '@/context';

interface CustomTableProps {
    data: {
        id: number;
        document_id: string
        name: string;
        profile_id: string;
        email: string;
    }[];
    handlePasswordRetrieve: (email: string) => void;
    handleRemove: (id: number) => void;
}

export function CustomTableUserList({ data, handlePasswordRetrieve, handleRemove }: CustomTableProps) {
    const navigate = useNavigate();
    const tenantData = useTenantData();

    const handleEditClick = (id: number): void => {
        navigate(`/user/edit/${id}`);
    }


    return (
        <S.Table>
            <thead>
                <tr>
                    <S.TableHeader></S.TableHeader>
                    <S.TableHeader>Name</S.TableHeader>
                    <S.TableHeader>Função</S.TableHeader>
                    <S.TableHeader>E-mail</S.TableHeader>
                    <S.TableHeader></S.TableHeader>
                    <S.TableHeader></S.TableHeader>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <S.TableRow key={index}>
                        <S.TableData><S.StyledImage src={item.document_id && item.document_id.includes('contabostorage') ? item.document_id : profile} alt="Profile" /></S.TableData>
                        <S.TableData >
    {item.name}
    {index === 0 && <> <S.TagYou  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity}>VOCÊ</S.TagYou></>}
</S.TableData>
                        <S.TableData>{item.profile_id}</S.TableData>
                        <S.TableData>{item.email}</S.TableData>
                        <S.TableData>
                            <S.ButtonRetrieve onClick={() => handleEditClick(item.id)}>Editar</S.ButtonRetrieve>
                        </S.TableData>
                       <S.TableData>
                            <S.ButtonRetrieve onClick={() => handlePasswordRetrieve(item.email)}>Recuperar senha</S.ButtonRetrieve>
                        </S.TableData>
                        <S.TableData>
                            {index !== 0 && <S.ButtonRemove onClick={() => handleRemove(item.id)}>Remove</S.ButtonRemove>}
                        </S.TableData>
                    </S.TableRow>
                ))}
            </tbody>
        </S.Table>
    );
}
