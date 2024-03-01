import { ThemeColor } from '@/config/color';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 12px 12px 0 0px;


    @media (max-width: 1100px) {
        max-width: 100%;
    }

    @media (max-width: 600px) {
        max-width: 100%;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 11px;
    background: ${ThemeColor.primaria};
    border-radius: 12px 12px 0 0px;


    > h2 {
        color: var(--foundation-white-light, #FDFDFD);
        font-size: 16px;
        font-weight: 700;
        line-height: 15.566px;
    }

    @media (max-width: 600px) {
        gap: 5px;

        > h2 {
            font-size: 12px;
        }

        > button {
            font-size: 12px;
            padding: 4px 12px;
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

    @media (max-width: 600px) {
        font-size: 12px;
    }
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
    font-size: 12px;
    line-height: 22px;
    text-align: center;

    @media (max-width: 1200px) {
        max-width: 140px;
        font-size: 12px;
    }

    @media (max-width: 1100px) {
        max-width: 130px;
        font-size: 12px;
    }

    @media (max-width: 600px) {
        max-width: 80px;
        font-size: 12px;
        padding: 5px 8px;
    }
`;

export const TableHeader = styled.th`
    padding: 8px 16px;
    color: var(--light-secondary, #6C757D);
    font-size: 12px;
    line-height: 22px;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 12px;
        padding: 5px 8px;
    }
`;
