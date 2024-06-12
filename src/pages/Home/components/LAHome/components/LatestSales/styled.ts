

import styled from 'styled-components';

interface Color {
    primary: string;
    secundary: string;
  }


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 12px 12px 0 0px;
    width: 100%;

    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

    @media (max-width: 600px) { font-size: 12px; }
`;

export const Header = styled.div<Color>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 11px;
    border-radius: 12px 12px 0 0px;
    background: ${(props) => props.primary};

    > h2 {
        color: var(--foundation-white-light, #FDFDFD);

        font-size: 16px;
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

    justify-content: center;
    text-align: center;
    align-items: center;
    border-top: 1px solid #E0E0E0;

  margin-top: -0.5px;



    padding: 10px 16px;



    @media (max-width: 600px) {
        gap: 2px;
        padding: 4px 8px;
    }
`;

export const Context = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
`


export const CustomButtonLink = styled.button`
color: var(--color-primria, #3C0A6D);
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 15px;
text-decoration-line: underline;
cursor: pointer;
z-index: 5;
background-color: transparent;
`




