import { ThemeColor } from '@/config/color';
import styled from 'styled-components';

export const HistoricoContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

export const HistoricoHeader = styled.h1`
  background: ${ThemeColor.primaria};
  width: 382px;
  height: 35px;
  color: #FDFDFD;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const HistoricoTable = styled.table`
  width: 382px;
  border-collapse: collapse;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  th, td {
    border-bottom: 1px solid #E9ECEF;
    border-right: 1px solid #E9ECEF;
    border-left: 1px solid #E9ECEF;
    text-align: left;
    padding: 8px;
  }
`;

export const HistoricoTableCell = styled.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: left;
  padding: 8px;


  color:  #6C757D;
font-size: 9.906px;
line-height: 15.566px;
`;

export const HistoricoTableHeaderCell = styled(HistoricoTableCell).attrs({ as: 'th' })`

  color:  #343A40;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;
`;
