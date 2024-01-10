import pix from '@assets/bandeiras/pix.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import visa from '@assets/bandeiras/visa.svg';
import masterCard from '@assets/bandeiras/master.svg';
import * as S from './styled'
import { useNavigate } from 'react-router-dom';
import { formatCurrencyBR } from '@/utils/convertBRDinheiro';
import axios from 'axios';
import { baseURL } from '@/config/color';
import { useLogin } from '@/context/user.login';
import { useState, useEffect } from 'react'; 
import { Loading } from '@/components/Loading/loading';

interface Sale {
    captured_in: string;
    payment_type: string;
    brand: string;
    amount: string;
}

export function LatestSales() {
    const navigate = useNavigate()
    const { dataUser } = useLogin();
    const [salesData, setSalesData] = useState<Sale[]>([]);
    const [loading, setLoading] = useState<boolean>(true); 

    const fetchDataSales = async (page = 1) => {
        let url = `${baseURL}transactions?page=${page}`;

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${dataUser?.token}`,
            },
        };

        try {
            const response = await axios.get(url, config);
            const { data } = response;

            const latestSales = data.transactions.slice(-6);
            setSalesData(latestSales);
        } catch (error) {
            console.error('Erro ao buscar as vendas', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataSales();
    }, []);

    const handleButtonClick = () => {
        localStorage.setItem('selectedItem', '4');
        navigate('/vendas');
    }

    return (
        <>
            {loading && (
                <Loading />
            )}
      
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
                            {salesData.map((item, index) => (
                                <tr key={index}>
                                    <S.TableCell>{item.captured_in}</S.TableCell>
                                    <S.TableCell>{item.payment_type}</S.TableCell>
                                    <S.TableContainerImg>
                                        <img
                                            src={
                                                item.brand === 'Visa' ? visa :
                                                item.brand === 'Elo' ? elo :
                                                item.brand === 'MasterCard' ? masterCard :
                                                item.brand === 'Maestro' ? maestro :
                                                item.brand === 'Pix' ? pix : undefined
                                            }
                                            alt={item.brand}
                                        />
                                        <S.TableCellImg>{item.brand}</S.TableCellImg>
                                    </S.TableContainerImg>
                                    <S.TableCell>{formatCurrencyBR(parseFloat(item.amount))}</S.TableCell>
                                </tr>
                            ))}
                        </tbody>
                    </S.Table>
                </S.Container>
        </>
    );
}
