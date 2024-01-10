import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  background: #FDFDFD;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 127px;
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 10px 30px;
  background: #3C0A6D;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SupplierId = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 15.566px;
  color: #E6F8FD;
`;

export const MainContent = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const TextGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const TextValue = styled.span`
  font-size: 11px;
  color: #6C757D;
`;

export const ActiveTextValue = styled.span`
  font-size: 11px;
  color: #3C0A6D;
  font-weight: 600;
`;

export const TextTitle = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #8A8A8A;
`;

export const ActiveTextTitle = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #02B1F1;
`;