
import styled from "styled-components";

interface IHistoricoTableCellPapelText {
  label: string;
  primary?: string;
}

export const HistoricoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

interface Color {
  primary: string;
  secundary: string;
}

export const HistoricoHeader = styled.h1<Color>`
  background:  ${(props) => props.primary};
  width: 595px;
  height: 35px;
  color: #FDFDFD;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const HistoricoTable = styled.table`
  width: 595px;
  border-collapse: collapse;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const HistoricoTableCell = styled.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  padding: 8px;
  color: #6C757D;
  font-size: 12px;
  line-height: 18px;
`;

export const HistoricoTableHeaderCell = styled(HistoricoTableCell).attrs({ as: 'th' })`
  color: #343A40;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
`;

export const HistoricoTableHeaderCellTotal = styled(HistoricoTableCell).attrs({ as: 'th' })`
  color: #FDFDFD;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
`;

export const TotalRow = styled.tr<Color>`
  background:  ${(props) => props.primary};
`;

export const HistoricoTableCellPapelText = styled.span<IHistoricoTableCellPapelText>`
  background: ${props => props.label === 'ADQ' ? '#E6E6E6' : props.primary};
  border-radius: 4px;
  color: ${props => props.label === 'ADQ' ? '#4B4B4B' : '#FDFDFD'};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  padding: 2px 8px 2px 8px;
`;
