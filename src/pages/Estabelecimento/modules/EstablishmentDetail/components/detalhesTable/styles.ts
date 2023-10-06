import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Table = styled.table`
  width: 515px; // 615
  height: 212px;
    border-right:1px solid #E9ECEF ;
    border-collapse: collapse;
  th, td {
    border-bottom: 1px solid #E9ECEF;
    text-align: left;
    padding: 8px;
  }

`;

export const Header = styled.h1`
  background: #08BBE9;
  width: 515px; // 615
height: 35px;

color:#FDFDFD;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

display: flex;
  align-items: center;
  padding-left: 12px;
`;

export const TableCell = styled.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: left;
  padding: 8px;

  color:  #6C757D;
font-size: 14px;
line-height: 22px;
`;

export const TableCellTotal = styled.td`
  text-align: left;
  padding: 8px;

  color:  #FDFDFD;
font-size: 9.906px;
font-weight: 700;
line-height: 15.566px;

`

export const TableHeaderCell = styled(TableCell).attrs({ as: 'th' })`
  color: #343A40;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

`;
export const TotalRow = styled.tr`
  background: #08BBE9;
`;
