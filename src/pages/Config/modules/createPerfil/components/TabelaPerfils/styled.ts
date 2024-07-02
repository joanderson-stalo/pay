
import { Pencil, Trash } from "@phosphor-icons/react";
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

padding: 8px 16px;
text-align: start;
border-bottom: 1px solid #E9ECEF;
font-size: ${({ theme }) => theme.text_sm};
font-style: normal;
font-weight: ${({theme }) => theme.font_medium};
line-height: 24px;
letter-spacing: 0.5px;
`;

export const TableData = styled.td`
color: #3D4449;
text-align: start;
padding: 8px 16px;
font-size: ${({ theme }) => theme.text_xs};
font-style: normal;
font-weight: ${({theme }) => theme.font_normal};
line-height: normal;
max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 53px;


  border-bottom: 1px solid #E9ECEF;

  vertical-align: middle;
`;

export const Button = styled.button<Color>`
color:  #3C0A6D;

font-size: 12px;
font-style: normal;
font-weight: ${({theme }) => theme.font_normal};
line-height: 15.566px;
text-decoration-line: underline;
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


export const ButtonDelete = styled(Trash)`

  color: #C81B1B;
  height: 12px;
  width: 12px;

`

export const ButtonEdit = styled(Pencil)`

  color:#10104F;
  height: 12px;
  width: 12px;

`

export const IconButton= styled.button`
background-color: transparent;


`

export const ContentBtns = styled.div`

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 24px;

`


