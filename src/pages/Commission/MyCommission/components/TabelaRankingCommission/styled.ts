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
  font-weight: ${({theme }) => theme.font_medium};
  line-height: 15.566px;
  text-align: start;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
  vertical-align: middle;
  font-size: ${({ theme }) => theme.text_sm};
`;

export const TableData = styled.td`
  color: #343A40;
  font-size: 12px;
  line-height: 15.566px;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
  text-align: start;
  vertical-align: middle;
  font-size: ${({ theme }) => theme.text_xs};
  font-weight: ${({theme }) => theme.font_normal};

`;

export const Button = styled.button`
  color: #5A6ACF;
  font-size: 12px;
  font-style: normal;
  font-weight: ${({theme }) => theme.font_normal};
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

export const FornecedorWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const FornecedorItem = styled.p`
  width: 30px;
  height: 22px;
  font-size: 12px;

  font-weight: ${({theme }) => theme.font_bold};
  line-height: 24px;
  margin-right: 5px;
  border-radius: 4px;
  text-align: center;
color: #202124;
  background-color: #1786291A;
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
  opacity: ${props => (props.isActive ? 1 : 0.5 )};
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
  line-height: 15.566px;
  background-color: #E6E6E6;
  border-radius: 4px;
  padding: 1px 8px;
`;
