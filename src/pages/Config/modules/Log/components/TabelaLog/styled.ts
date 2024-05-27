
import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
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
color:#3D4449;

padding: 8px;

border-bottom: 1px solid #E9ECEF;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
`;

export const TableData = styled.td`
color: #3D4449;
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  padding: 24px;
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  vertical-align: middle;
`;

export const Button = styled.button<Color>`
color:  #3C0A6D;

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;
text-decoration-line: underline;
text-transform: uppercase;
background-color: transparent;
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
  color: ${props => (props.isActive ? '#08BBE9': 'black')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  font-size: 8px;
`;
