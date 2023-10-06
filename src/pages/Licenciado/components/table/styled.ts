import styled from "styled-components";

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
  vertical-align: middle;
`;

export const TableData = styled.td`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  vertical-align: middle;
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
