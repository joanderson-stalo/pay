import styled from 'styled-components';

interface TableProps {
    white?: boolean;
}

export const Table = styled.table`
    width: 100%;
    margin: 20px 0;
    border-collapse: collapse;
`;

export const TableRow = styled.tr<TableProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    background-color: ${({ white }) => (white ? '#fff' : '#FAFAFA')};
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`;

export const TableCell = styled.td`
    padding: 8px;
    text-align: left;
    font-size: 14px;
    color: #333;
    flex: 1;
`;

export const TableHeader = styled.th`
    padding: 8px;
    text-align: left;
    font-weight: normal;
    color: #333;
    flex: 1;
`;
