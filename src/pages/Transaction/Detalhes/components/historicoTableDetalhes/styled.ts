import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}


export const HistoricoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const HistoricoHeader = styled.h1<Color>`
  background: ${(props) => props.primary};
  width: 444px;
  height: 35px;
  color: #FDFDFD;
  font-size: 12px;
  font-weight: 400;
  border-radius: 12px 12px 0 0px;

  display: flex;
  align-items: center;
  padding-left: 20px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const HistoricoTable = styled.table`
  width: 444px;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    width: 100%;
  }
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
  font-size: 14px;
  font-weight: 600;
  text-align: start;
`;
