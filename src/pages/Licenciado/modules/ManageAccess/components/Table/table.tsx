import * as S from './styled';
import profile from '@assets/icons/perfil.svg';

interface CustomTableProps {
    data: {
        id: number;
        name: string;
        profile_id: string;
        email: string;
    }[];
}

export function CustomTable({ data }: CustomTableProps) {
    return (
        <S.Table>
            <thead>
                <tr>
                    <S.TableHeader></S.TableHeader>
                    <S.TableHeader>Name</S.TableHeader>
                    <S.TableHeader>Função</S.TableHeader>
                    <S.TableHeader>E-mail</S.TableHeader>
                    <S.TableHeader></S.TableHeader>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <S.TableRow key={index}>
                        <S.TableData><S.StyledImage src={profile} alt="Profile" /></S.TableData>
                        <S.TableData>
                            {item.name}
                        </S.TableData>
                        <S.TableData>{item.profile_id}</S.TableData>
                        <S.TableData>{item.email}</S.TableData>
                        <S.TableData></S.TableData>
                    </S.TableRow>
                ))}
            </tbody>
        </S.Table>
    );
}
