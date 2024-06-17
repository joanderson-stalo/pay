import styled, { css } from "styled-components";

interface PapelTextProps {
  type: string;
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
  font-size: ${({theme }) => theme.text_sm};
  font-weight: ${({theme }) => theme.font_medium};
  line-height: 18px;
  text-align: start;
  padding: 8px  16px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
  
`;

export const TableData = styled.td`
  color: #343A40;
  font-size: ${({theme }) => theme.text_xs};
  line-height: 18px;
  padding: 8px 8px 8px 20px;
  border-bottom: 1px solid #E9ECEF;
  text-align: start;
  vertical-align: middle;
  
`;

export const ButtonEditar = styled.button`
  color:  #3C0A6D;
  font-size: ${({theme }) => theme.text_xs};
color:   #3C0A6D;
font-style: normal;
font-weight: ${({theme }) => theme.font_normal};
line-height: 11.303px;
letter-spacing: 0.353px;
text-decoration-line: underline;
background-color: transparent;
`;

export const ButtonRemover = styled(ButtonEditar)`
  color: #E91414;
`;

export const PapelData = styled.td`
  text-align: start;
  padding: 8px 16px;
  border-bottom: 1px solid #E9ECEF;
`;

export const PapelText = styled.span<PapelTextProps>`
  color: #3D4449;
  font-size: ${({theme }) => theme.text_xs};
  line-height: 18px;
  border-radius: 4px;
  padding: 8px 0px;

  display: flex;
  justify-content: start;
  align-items: start;
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
  font-weight: ${({theme }) => theme.font_normal};
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
font-weight: ${({theme }) => theme.font_normal};
line-height: 14px;

  border-radius: 4px;
  background-color: #7D7D7D;
`;

