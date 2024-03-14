

import styled from 'styled-components';
interface Color {
  primary: string;
  secundary: string;
}

export const CardWrapper = styled.div`
  width: 100%;
  background: #FDFDFD;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CardHeader = styled.div<Color>`
  width: 100%;
  padding: 10px 30px;
  background:  ${(props) => props.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #E6F8FD;
`;

export const HeaderCNPJ = styled.p`
  font-size: 12px;
  color: #E6F8FD;
`;

export const F1BadgeContainer = styled.div`
  width: 100%;
  background: #B5B5C8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const F1Badge = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #383838;
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #B5B5C8;
`;

export const CardContentSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const CardContentSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const CardInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const CardInfoText = styled.span`
  font-size: 12px;
  color: #6C757D;
`;

export const CardInfoValue = styled.span`
  font-size: 12px;
  color: #6C757D;
`;

export const CardInfoValueHighlighted = styled.span<Color>`
  font-size: 12px;
  color:  ${(props) => props.primary};
  font-weight: 600;
`;

export const CardInfoLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #8A8A8A;
`;

export const CardInfoLabelHighlighted = styled.span<Color>`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.secundary};
`;
