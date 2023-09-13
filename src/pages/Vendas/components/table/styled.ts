import styled from "styled-components";

interface StatusTextProps {
  status: string;
}

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

export const TableHeader = styled.th`
  color: #343A40;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
`;

export const TableData = styled.td`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`;

export const Button = styled.button`
  color: #5A6ACF;
  font-size: 8.477px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
`;

export const TableRow = styled.tr`
  height: 35.377px;
  &.highlighted {
    background-color: #F5F4F4;
  }
`;

export const FornecedorWrapper = styled.div`
  display: flex;
`;

export const FlagContainer = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;

  > p {
    color: #343A40;
    font-size: 9.906px;
    line-height: 15.566px;
    padding: 8px;
  }
`;

export const FormaPagamentoData = styled.td`
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`;

export const FormaPagamentoText = styled.span`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  background-color: #E6E6E6;
  border-radius: 4px;
  padding: 1px 8px;
`;


export const StatusData = styled.td`
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`;

export const StatusText = styled.span<StatusTextProps>`
  color: #E6F8FD;
  font-size: 9.906px;
  line-height: 15.566px;
  background-color: ${props => props.status === 'succeeded' ? '#48F041' : '#EC5252'};
  border-radius: 4px;
  padding: 1px 8px;
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
  font-size: 9px;
`;

