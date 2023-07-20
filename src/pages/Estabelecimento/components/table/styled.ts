import styled from "styled-components";

interface FornecedorItemProps {
  fornecedor: 'F1' | 'F2' | 'F3';
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
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
`;

export const TableData = styled.td`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
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

export const FornecedorItem = styled.p<FornecedorItemProps>`
  width: 23px;
  height: 26px;
  font-size: 10px;
  font-weight: 700;
  line-height: 24px;
  margin-right: 5px;
  border-radius: 4px;

  text-align: center;
  color: #fff;
  background-color: ${({ fornecedor }) => {
    if (fornecedor === 'F1') return '#7D7D7D';
    if (fornecedor === 'F2') return '#F9C716';
    if (fornecedor === 'F3') return '#48F041';
    return 'transparent';
  }};
`;







