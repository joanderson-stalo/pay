import styled from 'styled-components';
import { ThemeColor } from '@/config/color';

export const HistoricoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HistoricoHeader = styled.h1`
  background: ${ThemeColor.primaria};
  width: 675px;
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

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const HistoricoTable = styled.table`
 width: 674px;
  border-collapse: collapse;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 900px) {
    width: 100%;
  }
  th, td {
    text-align: center;
    padding: 8px;
  }
`;

export const HistoricoTableCell = styled.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  padding: 8px;
  color: var(--Light-Secondary, #6C757D);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 15.566px;
`;

export const HistoricoTableHeaderCell = styled(HistoricoTableCell).attrs({ as: 'th' })`
  color: var(--Light-Dark, #343A40);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.035px;
`;
