

import styled from 'styled-components';

type CustomTableHeaderProps = {
  tipo?: string;
  primary?: string;
  secundary?: string;
};

interface Color {
  primary: string;
  secundary: string;
}

export const TariffCardWrapper = styled.div`
  width: 100%;
  background: #FDFDFD;
  height: 191px;
  overflow: hidden;
`;

export const TariffCardHeader = styled.div<CustomTableHeaderProps>`
  width: 100%;
  padding: 10px 28px;
  background:${({ tipo, primary }) => tipo === 'Crédito' ? primary : '#C81B1B1A'};
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const IssueDate = styled.span`
  color: #FDFDFD;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
`;

export const RequestNumber = styled.span<CustomTableHeaderProps>`
  color: ${({ tipo}) => tipo === 'Crédito' ? '#FDFDFD' : '#202124'};
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 14px;
  font-weight: 600;
`;

export const Amount = styled.span<CustomTableHeaderProps>`
  color: ${({ tipo}) => tipo === 'Crédito' ? '#FDFDFD' : '#202124'};
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
`;

export const TariffCardContent = styled.div`
  width: 100%;
  padding: 20px 28px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const LicenseeInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TariffDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoBlock = styled.div`
  gap: 7px;
`;

export const DetailBlock = styled.div`
  display: flex;
  gap: 7px;
`;

export const EditButton = styled.button<Color>`
border-radius: 4.286px;

  background: #FFF;
  color: ${(props) => props.primary};
  font-size: 12.002px;
  font-style: normal;
  font-weight: 500;
  height: 30.005px;
  padding: 0 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.primary};

`;

export const TariffCardTitle = styled.span`
  color: #8A8A8A;
  font-size: 11px;
  font-weight: 600;
  line-height: 15.566px;
`;

export const TariffCardDescription = styled.p`
  color: #6C757D;
  font-size: 11px;
  line-height: 15.566px;
  padding: 0 5px;
  width: calc(100% - 10px);
  max-width: 210px;
  overflow-wrap: break-word;
`;
