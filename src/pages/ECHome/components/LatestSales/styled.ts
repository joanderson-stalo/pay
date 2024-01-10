import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 492px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    @media (max-width: 1200px) { max-width: 450px; }
    @media (max-width: 1100px) { max-width: 400px; }
    @media (max-width: 900px) { max-width: 100%; }
    @media (max-width: 600px) { font-size: 12px; }
`;

export const Header = styled.div`
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
        font-family: Poppins;
        font-size: 12px;
        padding: 5px 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 14.128px;
        letter-spacing: 0.353px;
    }
    > h2 {
        color: var(--foundation-white-light, #FDFDFD);
        font-family: Poppins;
        font-size: 12px;
        font-weight: 700;
        line-height: 15.566px;
    }
    @media (max-width: 600px) {
        > h2 {
            font-size: 12px;
        }
        > button {
            font-size: 12px;
            padding: 5px 16px;
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    border-left: 1px solid #E0E0E0;
    border-right: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
`;

export const TableCell = styled.td`
    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    padding: 8px 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
    color: var(--light-secondary, #6C757D);
    font-family: Poppins;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    @media (max-width: 600px) {
        max-width: 80px;
        font-size: 12px;
        padding: 5px 8px;
    }
`;

export const TableHeader = styled.th`
    padding: 8px 16px;
    color: var(--light-secondary, #6C757D);
    font-family: Poppins;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 12px;
        padding: 5px 8px;
    }
`;

export const TableCellImg = styled.td`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
    color: var(--light-secondary, #6C757D);
    font-family: Poppins;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    @media (max-width: 600px) {
        max-width: 80px;
        font-size: 12px;
        padding: 5px 8px;
    }
`;

export const TableContainerImg = styled.div`
    display: flex;
    gap: 2.5px;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #E0E0E0;

    padding: 4px 16px;
    @media (max-width: 600px) {
        gap: 2px;
        padding: 4px 8px;
    }
`;
