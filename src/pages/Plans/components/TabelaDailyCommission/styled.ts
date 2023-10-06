import styled from "styled-components";

interface PapelTextProps {
  type: 'Base' | 'Base+Base' | 'Comercial';
}

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 49px;
`;

export const TableHeader = styled.th`
  color: #343A40;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  text-align: start;
  padding: 8px 8px 8px 20px;
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
  vertical-align: middle;
`;

export const TableData = styled.td`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  padding: 8px 8px 8px 20px;
  border-bottom: 1px solid #E9ECEF;
  text-align: start;
  vertical-align: middle;
`;

export const ButtonEditar = styled.button`
  color: #08BBE9;
  font-size: 9.906px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const ButtonRemover = styled(ButtonEditar)`
  color: #E91414;
`;


export const TableRow = styled.tr`
  height: 35.377px;
  &.highlighted {
    background-color: #F5F4F4;
  }
`;


export const SortContainer = styled.div`
  display: inline-block;
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  margin-left: 8px;
`;

export const SortArrow = styled.span<{ isActive: boolean }>`
  display: block;
  color: ${props => (props.isActive ? 'black': '#08BBE9')};
  opacity: ${props => (props.isActive ? 0.5 : 1)};
  font-size: 8px;
`;


export const PapelData = styled.td`
  text-align: start;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`;

export const PapelText = styled.span<PapelTextProps>`
  color: #F2F2F2;
  font-size: 9.906px;
  line-height: 15.566px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'Base':
        return '#068CAF';
      case 'Base+Base':
        return '#0C0C3B';
      case 'Comercial':
        return '#AE39F6';
      default:
        return '#068CAF';
    }
  }};
  border-radius: 4px;
  padding: 1px 8px;
`;;
