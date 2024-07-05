
import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const TableHeader = styled.th`
  color: #343A40;
  font-size: ${({theme }) => theme.text_sm};
  font-weight: ${({theme }) => theme.font_medium};
  line-height: 18px;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
  text-align: start;

`;

export const TableData = styled.td`
  color: #343A40;
  font-size: ${({theme }) => theme.text_xs};
  font-weight: ${({theme }) => theme.font_normal};
  line-height: 18px;
  padding: 8px 16px;
  height: 53px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
  text-align: start;
   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button<Color>`
color:  ${(props) => props.primary};
  font-size: ${({theme }) => theme.text_xs};
color:   ${(props) => props.primary};
font-weight: ${({theme }) => theme.font_normal};
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

export const FornecedorWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const FornecedorItem = styled.p<{ status: string }>`

  font-size: 12px;
  width: 30px;
  height: 22px;
  line-height: 26px;
  margin-right: 5px;
  border-radius: 4px;
  text-align: center;
  color: #202124;

    font-weight: ${({theme }) => theme.font_bold};

  background-color: ${({ status }) => (status === 'enable' ? '#7D7D7D' : '#1786291A')};










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
