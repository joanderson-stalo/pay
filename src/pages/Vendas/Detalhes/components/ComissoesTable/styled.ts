import styled from 'styled-components';

interface IHistoricoTableCellPapelText {
  label: string;
}

export const HistoricoContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

export const HistoricoHeader = styled.h1`
  background: #10104F;
  width: 595px;
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
  width: 595px;
  border-collapse: collapse;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  th, td {
    text-align: center;
    padding: 8px;
  }
`;

export const HistoricoTableCell = styled.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
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
text-align: center;
`;

export const HistoricoTableHeaderCellTotal = styled(HistoricoTableCell).attrs({ as: 'th' })`
  color:  #FDFDFD;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;
text-align: center;
`;

export const TotalRow = styled.tr`
  background: #10104F;
`;


export const HistoricoTableCellPapelText = styled.span<IHistoricoTableCellPapelText>`
  background: ${props => props.label === 'ADQ' ? '#E6E6E6' : '#10104F'};
  border-radius: 4px;
  color:${props => props.label === 'ADQ' ? '#4B4B4B' : '#FDFDFD'}  ;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 2px 8px 2px 8px;
`;
