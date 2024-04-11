
import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-left: 1px solid #E9ECEF;
  border-right: 1px solid #E9ECEF;
  th, td {
    border-bottom: 1px solid #E9ECEF;
    text-align: center;
    padding: 8px 16px;
  }
`;

export const Header = styled.h1<Color>`
  background:  ${(props) => props.primary};
  width: 100%;
  padding: 12px 11px;
  border-radius: 12px 12px 0 0px;
  color: #FDFDFD;
  font-size: 16px;
  font-weight: 700;
  line-height: 15.566px;
  display: flex;
  align-items: center;
  padding-left: 12px;
`;

export const TableCell = styled.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  padding: 8px 16px;
  color: #6C757D;
  font-size: 14px;
  line-height: 22px;
`;

export const TableCellTotal = styled.td`
  text-align: center;
  padding: 8px;
  color: #FDFDFD;
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
`;

export const TableHeaderCell = styled(TableCell).attrs({ as: 'th' })`
  color: #343A40;

  font-weight: 500;
  font-size: 12px;
    line-height: 22px;
`;

export const TotalRow = styled.tr<Color>`
  background: ${(props) => props.primary};
`;
