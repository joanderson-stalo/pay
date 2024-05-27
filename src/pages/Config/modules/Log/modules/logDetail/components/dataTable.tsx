import * as S from './styled';
import { DataItem } from './interface';

type TableProps = {
    item: DataItem;
};

function formatDateTime(dateTime: string): string {
    const date = new Date(dateTime);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${formattedDate} ${hours}:${minutes}:${seconds}`;
}

export function DataTable({ item }: TableProps) {
    const defaultItem: DataItem = {
        created_at: '',
        id: '',
        description: '',
        event: '',
        properties: ''
    };

    const currentItem = item || defaultItem;

    return (
        <S.Table>
            <tbody>
                <S.TableRow>
                    <S.TableHeader>Data:</S.TableHeader>
                    <S.TableCell>{formatDateTime(currentItem.created_at)}</S.TableCell>
                </S.TableRow>
                <S.TableRow white={true}>
                    <S.TableHeader>ID:</S.TableHeader>
                    <S.TableCell>{currentItem.id}</S.TableCell>
                </S.TableRow>
                <S.TableRow>
                    <S.TableHeader>Descrição:</S.TableHeader>
                    <S.TableCell>{currentItem.description}</S.TableCell>
                </S.TableRow>
                <S.TableRow white={true}>
                    <S.TableHeader>Evento:</S.TableHeader>
                    <S.TableCell>{currentItem.event}</S.TableCell>
                </S.TableRow>
                <S.TableRow>
                    <S.TableHeader>Propriedade:</S.TableHeader>
                    <S.TableCell>{currentItem.properties}</S.TableCell>
                </S.TableRow>
            </tbody>
        </S.Table>
    );
}
