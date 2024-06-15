
import styled from "styled-components";

interface StatusTextProps {
  status: string;
}

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
  color: #343A40;
  font-size: ${({theme }) => theme.text_sm};
  font-weight: ${({theme }) => theme.font_medium};
  line-height: 15.566px;
  text-align: start;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
  font-size: 14px;
`;


export const TableData = styled.td`
  color: #343A40;
  font-size: ${({theme }) => theme.text_xs};
  font-weight: ${({theme }) => theme.font_normal};
  line-height: 15.566px;
  text-align: start;
 padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
  font-size: 12px;
`;

export const Button = styled.button<Color>`
  color:  ${(props) => props.primary};
  font-size: ${({theme }) => theme.text_xs};
color:   ${(props) => props.primary};
font-style: normal;
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
`;

export const FlagContainer = styled.div`
 display: flex;
  align-items: center;
  justify-content: start;
  

  > p {
    color: #343A40;
    font-size: ${({theme }) => theme.text_xs};
    line-height: 15.566px;
    padding: 8px;
    font-weight: ${({theme }) => theme.font_normal};
  }

  > img {
    width: 30px;
    height: 30px;
  }
`;

export const FormaPagamentoData = styled.td`
  text-align: start;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
`;

export const FormaPagamentoText = styled.span`
  color: #343A40;
  font-size: ${({theme }) => theme.text_xs};
  line-height: 15.566px;
  background-color: #E6E6E6;
  border-radius: 4px;
  padding: 4px 16.5px;
  font-weight: ${({theme }) => theme.font_normal};
  
`;


export const StatusData = styled.td`
  text-align: start;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
`;

export const StatusText = styled.span<StatusTextProps>`
  color: #E6F8FD;
  font-size: ${({theme }) => theme.text_xss};
  font-weight: ${({theme }) => theme.font_normal};
  line-height: 15.566px;
  background-color: ${props => props.status === 'succeeded' ? '#178629' : '#EC5252'};
  border-radius: 4px;
  padding: 4px 16.5px;
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

