import styled, { css } from "styled-components";

interface PapelTextProps {
  type: 'Base' | 'Comercial';
}

interface StatusProps {
  status: 'ativo' | 'inativo' | undefined;
}

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 10px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const TableHeader = styled.th`
  color: #343A40;
  font-size: ${({theme }) => theme.text_xs};
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  padding: 8px 8px 8px 20px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
`;

export const TableData = styled.td`
  color: #343A40;
  font-size: ${({theme }) => theme.text_xs};
  line-height: 18px;
  padding: 8px 8px 8px 20px;
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  vertical-align: middle;
`;

export const ButtonEditar = styled.button`
  color: #08BBE9;
  font-size: ${({theme }) => theme.text_xs};
  font-weight: 500;
  line-height: 18px;
  width: 77px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #F5F4F4;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
`;

export const ButtonRemover = styled(ButtonEditar)`
  color: #E91414;
`;

export const PapelData = styled.td`
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`;

export const PapelText = styled.span<PapelTextProps>`
  color: #F2F2F2;
  font-size: ${({theme }) => theme.text_xs};
  line-height: 18px;
  background-color: ${({ type }) => (type === 'Base' ? '#02B1F1' : '#cccc')};
  border-radius: 4px;
  padding: 4px 24px;
  display: inline-block;
`;

export const TableRow = styled.tr`
  height: 35px;
  &:hover {
    background-color: #F5F4F4;
  }
`;


export const Status = styled.span<StatusProps>`
  border-radius: 4px;
  padding: 4px 13px;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;

  background-color: ${({ status }) =>
    status === 'ativo'
      ? '#178629'
      : '#7D7D7D'
  };
`;

export const FornecedorStatus = styled.span`
  padding: 4px 8px;
  color: #FFFFFF;

color:  #FFF;
font-size: ${({theme }) => theme.text_xs};
font-weight: 500;
line-height: 14px;

  border-radius: 4px;
  background-color: #7D7D7D;
`;

