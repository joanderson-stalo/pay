import pix from '@assets/bandeiras/pix.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import visa from '@assets/bandeiras/visa.svg';
import masterCard from '@assets/bandeiras/master.svg';
import * as S from './styled'
import { useNavigate } from 'react-router-dom';


export function UltimasVendas() {
    const navigate = useNavigate()


    const data = [
        {
            data: '25/10/2023 08:45',
            form: 'Crédito',
            bandeira: 'Visa',
            valor: 320.00
        },
        {
            data: '24/10/2023 14:30',
            form: 'Débito',
            bandeira: 'Mastercard',
            valor: 150.50
        },
        {
            data: '24/10/2023 14:30',
            form: 'Débito',
            bandeira: 'Mastercard',
            valor: 150.50
        },
       
    ];

    function formatToBRL(value: number | bigint) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    async function handleButtonClick() {
    await    localStorage.setItem('selectedItem', '4');
       navigate('/vendas')
    }

    return (
        <S.Container>
            <S.Header>
                <h2>Últimas vendas</h2>
                <button onClick={handleButtonClick}>Ver todos</button>
            </S.Header>
            <S.Table>
                <thead>
                    <tr>
                        <S.TableHeader>Data</S.TableHeader>
                        <S.TableHeader>Forma</S.TableHeader>
                        <S.TableHeader>Bandeira</S.TableHeader>
                        <S.TableHeader>Valor</S.TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <S.TableCell>{item.data}</S.TableCell>
                            <S.TableCell>{item.form}</S.TableCell>
                            <S.TableContainerImg>
                                <img
                                    src={
                                        item.bandeira === 'Visa' ? visa :
                                        item.bandeira === 'Elo' ? elo :
                                        item.bandeira === 'Mastercard' ? masterCard :
                                        item.bandeira === 'Maestro' ? maestro :
                                        item.bandeira === 'Pix' ? pix : undefined
                                    }
                                    alt={item.bandeira}
                                />
                                <S.TableCellImg>{item.bandeira}</S.TableCellImg>
                            </S.TableContainerImg>
                            <S.TableCell>{formatToBRL(item.valor)}</S.TableCell>
                        </tr>
                    ))}
                </tbody>
            </S.Table>
        </S.Container>
    );
}
