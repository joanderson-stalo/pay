import React from 'react';
import styled from 'styled-components';
import pix from '@assets/bandeiras/pix.svg';
import elo from '@assets/bandeiras/elo.svg';
import maestro from '@assets/bandeiras/maestro.svg';
import visa from '@assets/bandeiras/visa.svg';
import masterCard from '@assets/bandeiras/master.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 492px;
    max-height: 282px;
    overflow-y: auto;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 11px;
    background: var(--foundation-brand-02-normal, #08BBE9);

    > button {
        border-radius: 3.532px;
        border: 0.353px solid #F5F4F4;
        background: #FFF;
        color: var(--foundation-brand-02-normal, #08BBE9);

        font-size: 9.477px;
        padding: 5px 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 14.128px;
        letter-spacing: 0.353px;
    }

    > h2 {
        color: var(--foundation-white-light, #FDFDFD);

        font-size: 12.906px;
        font-weight: 700;
        line-height: 15.566px;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    border-left: 1px solid #E0E0E0;
    border-right: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
`;

const TableCell = styled.td`
    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    padding: 8px 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
    color: var(--light-secondary, #6C757D);

    font-size: 11px;
    line-height: 22px;
    text-align: center;
`;

const TableHeader = styled.th`
    padding: 8px 16px;
    color: var(--light-secondary, #6C757D);

    font-size: 11px;
    line-height: 22px;
    text-align: center;
`;

const TableCellImg = styled.td`


    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
    color: var(--light-secondary, #6C757D);

    font-size: 11px;
    line-height: 22px;
    text-align: center;


`

const TableContainerImg = styled.div`
    display: flex;
    gap: 2.5px;
    justify-content: center;
    align-items: center;

    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    padding: 8px 16px;
`;

export function UltimasVendas() {
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

    function handleButtonClick() {

    }

    return (
        <Container>
            <Header>
                <h2>TOP Estabelecimentos</h2>
                <button onClick={handleButtonClick}>Ver todos</button>
            </Header>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Data</TableHeader>
                        <TableHeader>Forma</TableHeader>
                        <TableHeader>Bandeira</TableHeader>
                        <TableHeader>Valor</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <TableCell>{item.data}</TableCell>
                            <TableCell>{item.form}</TableCell>
                            <TableContainerImg>
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
                                <TableCellImg>{item.bandeira}</TableCellImg>
                            </TableContainerImg>
                            <TableCell>{formatToBRL(item.valor)}</TableCell>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
