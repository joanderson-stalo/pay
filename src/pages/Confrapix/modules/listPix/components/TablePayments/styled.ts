import styled from 'styled-components';

interface ButtonProps {
  status?: string;
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
  position: relative;
  color: #343A40;
  font-size: ${({ theme }) => theme.text_sm};
  font-weight: ${({ theme }) => theme.font_medium};
  line-height: 15.566px;
  text-align: start;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
`;

export const TooltipIcon = styled.span`
  margin-left: 4px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  top: 4px;

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -35px;
    left: 100%;
    transform: translateX(-30%);
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 9999;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const TableData = styled.td`
  color: #343A40;
  font-size: ${({ theme }) => theme.text_xs};
  font-weight: ${({theme }) => theme.font_normal};
  line-height: 18px;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
  text-align: start;
  vertical-align: middle;
  height: 36px;




`;

export const StatusTableData = styled(TableData)<{ status: string }>`


  padding: 3px 5.5px;
  border-radius: 4px;
  color: #343A40;



  background-color: ${props => {
    switch (props.status) {
      case 'Pagamento recusado':
        return '#C81B1B1A';
      case 'Pagamento efetuado':
        return '#1786291A';
      case 'Pagamento em análise':
        return '#CD7B001A';
      default:
        return 'transparent';
    }
  }};
  margin: 0 auto;
`;

export const Button = styled.button<ButtonProps>`
  color: ${props => props.status === 'returned' ? '#3C0A6D' : 'black'};
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: ${({theme }) => theme.font_normal};

  letter-spacing: 0.353px;
  text-decoration-line: underline;
  background-color: transparent;
  cursor: pointer;
`;
