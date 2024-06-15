
import styled from "styled-components";

type FuncionamentoTableDataProps = {
  funcionamento: 'quebrado' | 'estável' | 'incompleto';
};

type CustomTableHeaderProps = {
  tipo?: string;
  primary?: string;
};
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
  font-size: ${({theme }) => theme.text_sm};
  font-weight: ${({theme }) => theme.font_medium};
  line-height: 15.566px;
  text-align: start;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
`;

export const CustomTableHeader = styled.th<CustomTableHeaderProps>`
  color: ${({ tipo, primary }) => tipo === 'Crédito' ? primary : '#E91414'};
  font-size: ${({theme }) => theme.text_xs};
  font-weight: ${({theme }) => theme.font_medium};
  line-height: 15.566px;
  text-align: start;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
  font-weight: ${({theme }) => theme.font_normal};
`;



export const TableData = styled.td`
  color: #343A40;
  font-size: ${({theme }) => theme.text_xs};
  font-weight: ${({theme }) => theme.font_normal};
  line-height: 15.566px;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
  text-align: start;
  vertical-align: middle;
`;

export const Button = styled.button`
color:  #3C0A6D;
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 11.303px;
letter-spacing: 0.353px;
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
  color: ${props => (props.isActive ? '#08BBE9' : 'black')};
  opacity: ${props => (props.isActive ? 1  :  0.5)};
  font-size: 8px;
`;


export const CommentTableData = styled(TableData)`
  word-break: break-word;
  max-width: 150px;
`;



