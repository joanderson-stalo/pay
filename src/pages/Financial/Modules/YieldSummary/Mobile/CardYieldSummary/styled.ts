import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}

export const Card = styled.div`
  width: 100%;
  background: #FDFDFD;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 127px;

`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 10px 30px;
  background: #08BBE9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardIdentifier = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #E6F8FD;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const CardStatsDescription = styled.p`
  font-size: 12px;
  color: #E6F8FD;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardStatsNumber = styled.span`
  font-size: 12px;
  color: #E6F8FD;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
`;

export const CardContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const CardValue = styled.span`
  font-size: 12px;
  color: #6C757D;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardHighlightValue = styled.span<Color>`
  font-size: 12px;
  color:  ${(props) => props.primary};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #8A8A8A;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardHighlightLabel = styled.span<Color>`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.secundary};
  overflow: hidden;
  text-overflow: ellipsis;
`;
