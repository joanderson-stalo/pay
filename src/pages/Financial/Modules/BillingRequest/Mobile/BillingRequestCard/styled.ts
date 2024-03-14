import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}


export const Card = styled.div`
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

export const DateLabel = styled.span`
  color: #FDFDFD;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
`;

export const RequestID = styled.span`
  color: #FDFDFD;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 14px;
`;

export const Price = styled.span`
  color: #FDFDFD;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
`;

export const CardBody = styled.div`
  width: 100%;
  padding: 20px 28px;
  display: flex;
  justify-content: space-between;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoBlock = styled.div`
  gap: 7px;
`;

export const LeftInfoBlock = styled.div`
  display: flex;
  gap: 7px;
`;

export const EditButton = styled.button<Color>`
  display: flex;
  padding: 12.002px 20.575px;
  justify-content: center;
  align-items: center;
  border-radius: 4.286px;
  border: 0.429px solid #F5F4F4;
  background: #FFF;
  color:  ${(props) => props.primary};
  font-size: 12.002px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.717px;
  letter-spacing: 0.429px;
`;

export const InfoTitle = styled.span`
  color: #8A8A8A;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 15.566px;
`;

export const InfoDescription = styled.p`
  color: #6C757D;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 11px;
  line-height: 15.566px;
  width: 100%;
  max-width: 210px;
`;
