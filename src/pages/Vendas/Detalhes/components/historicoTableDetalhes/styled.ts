import styled from 'styled-components';

export const HistoricoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HistoricoHeader = styled.h1`
  background: #10104F;
  width: 430px;
  height: 35px;
  color: #FDFDFD;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1200px) {
    width: 440px
  }

  @media (max-width: 1100px) {
    width: 440px
  }

  @media (max-width: 900px) {
    width: 390px;
  }

  @media (max-width: 600px) {
    width: 290px;
    height: 25px;
    font-size: 8px;
    padding-left: 8px;
  }
`;

export const HistoricoTable = styled.table`
  width: 430px;
  border-collapse: collapse;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1200px) {
    width: 440px
  }

  @media (max-width: 1100px) {
    width: 440px
  }

  @media (max-width: 900px) {
    width: 390px;
  }

  @media (max-width: 600px) {
    width:290px;
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
  color: #6C757D;
  font-size: 9.906px;
  line-height: 15.566px;

  @media (max-width: 600px) {
    font-size: 8px;
  }
`;

export const HistoricoTableHeaderCell = styled(HistoricoTableCell).attrs({ as: 'th' })`
  color: #343A40;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 8px;
  }
`;
