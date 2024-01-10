import styled from 'styled-components';
import { ThemeColor } from '@/config/color';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 920px;
  border: 1px solid #E9ECEF;

  @media (max-width: 900px) {
    display: none;
}
`;

export const TableHeader = styled.h1`
  background: ${ThemeColor.primaria};
  width: 100%;
  max-width: 920px;
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--Foundation-White-Light, #FDFDFD);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;

export const DataTable = styled.table`
  width: 100%;
  max-width: 920px;
  border-collapse: collapse;

  > thead {
    background: ${ThemeColor.primaria};
  }

  th, td {
    text-align: center;
    padding: 8px;
  }
`;

export const TableCell = styled.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  padding: 8px;
  color: var(--Light-Secondary, #6C757D);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 15.566px;
`;

export const TableHeaderCell = styled(TableCell).attrs({ as: 'th' })`
  color: var(--Light-Dark, #ffff);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.035px;
`;
