
import styled from "styled-components";

interface IHistoricoTableCellPapelText {
  label: string;
  primary?: string;
}

export const HistoricoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  border-radius: 12px 12px 0 0px;

  color: #FDFDFD;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  align-items: center;
  padding-left: 20px;

  width: 100%;

`;

export const HistoricoTable = styled.table`
  width: 595px;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;

`;

export const HistoricoTableCell = styled.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: start;
  padding: 8px;
  color: #202124;
  font-size: 12px;
  font-weight: 400;
`;

export const HistoricoTableHeaderCell = styled(HistoricoTableCell).attrs({ as: 'th' })`
  color: #343A40;
  text-align: start;
  font-size: 14px;
  font-weight: 600;

`;

export const HistoricoTableHeaderCellTotal = styled(HistoricoTableCell).attrs({ as: 'th' })`
  color: #FDFDFD;
  font-size: 12px;
  font-weight: 600;
  text-align: start;

`;

export const TotalRow = styled.tr<Color>`
  background:  ${(props) => props.primary};

`;

export const HistoricoTableCellPapelText = styled.span<IHistoricoTableCellPapelText>`
  background: ${props => props.label === 'ADQ' ? '#E6E6E6' : '#3C0A6D'};
  border-radius: 4px;
  color: ${props => props.label === 'ADQ' ? '#4B4B4B' : '#FDFDFD'};
  font-size: 12px;
  font-weight: 500;
  width: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px 2px 8px;
`;
