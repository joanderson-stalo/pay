import styled from "styled-components";

interface StatusTextProps {
  status: string;
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
  font-size: ${({theme }) => theme.text_xs};
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`;

export const TableData = styled.td`
  color: #343A40;
  font-size: ${({theme }) => theme.text_xs};
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;


  
`;


export const FornecedorItem = styled.p`
  width: 23px;
  height: 26px;
  font-size: 10px;
  font-weight: 700;
  line-height: 24px;
  margin-right: 5px;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  background-color: #7D7D7D;


`;

export const TableDataLucro = styled(TableData)`
  color: #02B1F1;
`;

export const Button = styled.button`
  color: #5A6ACF;
  font-size: ${({theme }) => theme.text_xss};
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
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FlagContainer = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;

  > p {
    color: #343A40;
    font-size: ${({theme }) => theme.text_xs};
    line-height: 15.566px;
    padding: 8px;
  }
`;

export const FormaPagamentoData = styled.td`
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`;

export const FormaPagamentoText = styled.span`
  color: #343A40;
  font-size: ${({theme }) => theme.text_xs};
  line-height: 15.566px;
  background-color: #E6E6E6;
  border-radius: 4px;
  padding: 1px 8px;
  font-weight:  ${({theme }) => theme.font_medium};
`;


export const StatusData = styled.td`
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`;

export const StatusText = styled.span<StatusTextProps>`
  color: #E6F8FD;
  font-size: 9.906px;
  line-height: 15.566px;
  background-color: ${props => props.status === 'succeeded' ? '#48F041' : '#EC5252'};
  border-radius: 4px;
  padding: 1px 8px;
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

