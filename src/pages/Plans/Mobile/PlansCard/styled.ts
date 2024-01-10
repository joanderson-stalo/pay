import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  background: #FDFDFD;
  height: 191px;
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 10px 28px;
  background: #08BBE9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLabel = styled.span`
  color:  #FDFDFD;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 14px;
`;

export const ActiveStatusButton = styled.button<{ isActive: boolean }>`
  color: #FFF;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${props => props.isActive ? '#55B938' : '#7D7D7D'};
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 20px 28px;
  display: flex;
  justify-content: space-between;
`;

export const RightInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LeftActionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-width: 200px;
`;

export const InfoTitle = styled.h3`
  color:  #8A8A8A;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 15.566px;
  > span {
    color:  #6C757D;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }
`;

export const InfoDescription = styled.p`
  color:  #6C757D;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;

export const EditButton = styled.button`
  display: flex;
  padding: 12.002px 20.575px;
  justify-content: center;
  align-items: center;
  border-radius: 4.286px;
  border: 0.429px solid #F5F4F4;
  background: #FFF;
  color:  #02B1F1;
  font-size: 12.002px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.717px;
  letter-spacing: 0.429px;
`;

export const RemoveButton = styled.button`
  display: flex;
  padding: 12.002px 20.575px;
  justify-content: center;
  align-items: center;
  border-radius: 4.286px;
  border: 0.429px solid #F5F4F4;
  background: #FFF;
  color: #E91414;
  font-size: 12.002px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.717px;
  letter-spacing: 0.429px;
`;
