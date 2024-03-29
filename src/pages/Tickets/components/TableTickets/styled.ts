
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
  font-size: ${({theme }) => theme.text_xs};
  font-weight: ${({theme }) => theme.font_medium};
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
`;

export const CustomTableHeader = styled.th<CustomTableHeaderProps>`
  color: ${({ tipo, primary }) => tipo === 'Crédito' ? primary : '#E91414'};
  font-size: ${({theme }) => theme.text_xs};
  font-weight: ${({theme }) => theme.font_medium};
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
`;



export const TableData = styled.td`
  color: #343A40;
  font-size: ${({theme }) => theme.text_xs};
  font-weight: ${({theme }) => theme.font_medium};
  line-height: 15.566px;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  vertical-align: middle;
`;

export const Button = styled.button`
  color: #5A6ACF;
  font-size: ${({theme }) => theme.text_xs};
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
  color: ${props => (props.isActive ? '#08BBE9' : 'black')};
  opacity: ${props => (props.isActive ? 1  :  0.5)};
  font-size: 8px;
`;


export const CommentTableData = styled(TableData)`
  word-break: break-word;
  max-width: 150px;
`;


export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;


export const StatusTableData = styled.div<{ status: 'Em tratamento' | 'Finalizado' }>`
  color: #fff;
  font-size: ${({ theme }) => theme.text_xs};
  font-weight: ${({ theme }) => theme.font_medium};
  padding: 4px 12px;
  border-radius: 16px;
  background-color: ${({ status }) => (status === 'Em tratamento' ? '#FF7C33' : '#2BC6F6')};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-width: fit-content;
`;
