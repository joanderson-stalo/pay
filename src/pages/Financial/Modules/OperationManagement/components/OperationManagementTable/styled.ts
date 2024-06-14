
import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  background: var(--Sys---Neutro-04, #FFF);
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 36px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const TableHeader = styled.th`
  color: #343A40;
  font-size: ${({ theme }) => theme.text_xs};
  font-weight: 700;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  background: var(--Sys---Neutro-04, #FFF);
`;

export const TableData = styled.td`
  color: #343A40;
  font-size: ${({ theme }) => theme.text_xs};
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`;

export const TableRow = styled.tr`
  height: 35.377px;
  &:nth-child(even) {
    background-color: #f1f8fe;
  }
  &:nth-child(odd) {
    background-color: #FFF;
  }
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
  color: ${props => (props.isActive ? '#08BBE9' : 'black')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  font-size: 9px;
`;

export const TableFooterRow = styled.tr<Color>`
  background-color: ${(props) => props.secundary};
  color: white;
  font-weight: bold;

  & > td {
    border-bottom: none;
  }
`;

export const TableDataWhite = styled.td`
  color: white;
  font-size: ${({ theme }) => theme.text_sm};
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`;
