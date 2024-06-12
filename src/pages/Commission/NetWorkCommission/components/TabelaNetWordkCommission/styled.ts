import styled from "styled-components";

interface FornecedorItemProps {
  fornecedor: 'F1' | 'F2' | 'F3';
}

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  @media (max-width: 900px) {
    display: none;
  }

`;

export const TableHeader = styled.th`
  color: #343A40;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
  vertical-align: middle;
`;

export const TableData = styled.td`
  color: #343A40;
  font-size: 12px;
  line-height: 18px;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  vertical-align: middle;
`;

export const Button = styled.button`
  color: #5A6ACF;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.353px;
 padding: 12px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const TableRow = styled.tr`
  height: 35.377px;
  &.highlighted {
    background-color: #F5F4F4;
  }
`;

export const FornecedorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FornecedorItem = styled.p`
  width: 23px;
  height: 26px;
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  margin-right: 5px;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  background-color: #178629;
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
  color: ${props => (props.isActive ? '#08BBE9': 'black')};
  opacity: ${props => (props.isActive ?1  : 0.5)};
  font-size: 8px;
`;

export const PapelData = styled.td`
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`;

export const PapelText = styled.span`
  color: #343A40;
  font-size: 12px;
  line-height: 18px;
  background-color: #E6E6E6;
  border-radius: 4px;
  padding: 1px 8px;
`;

