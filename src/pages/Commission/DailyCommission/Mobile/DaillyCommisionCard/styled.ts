import styled from 'styled-components';

export const CustomCard = styled.div`
  width: 100%;
  background: #FDFDFD;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CustomHeader = styled.div`
  width: 100%;
  padding: 10px 16px;
  background: #08BBE9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomMainContent = styled.div`
  width: 100%;
  padding: 20px 16px 20px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CustomId = styled.span`
  color: #FDFDFD;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;

export const CustomName = styled.h2`
  color: #FDFDFD;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
`;

export const CustomValue = styled.p`
  color: #FDFDFD;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
`;

export const CustomLeftContent = styled.div``;

export const CustomRightContent = styled.div``;

export const CustomSaleInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 13px;
`;

export const CustomSaleValue = styled.span`
  color: #8A8A8A;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
`;

export const CustomDateInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  gap: 13px;
`;

export const CustomTitle = styled.span`
  color: #8A8A8A;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;

  > span {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }
`;

export const CustomTags = styled.div`
  display: flex;
  gap: 4px;
`;

export const CustomTagOne = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: #E6E6E6;
  color: #4B4B4B;
  width: 32px;

  p {
    font-size: 12px;
  }
`;

export const CustomTagTwo = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: #7D7D7D;
  color: #4B4B4B;
  width: 32px;

  p {
    font-size: 12px;
  }
`;

export const CustomViewButton = styled.button`
  border-radius: 4.286px;
  border: 0.429px solid #F5F4F4;
  background: #FFF;
  display: flex;
  padding: 12.002px 20.575px;
  justify-content: center;
  align-items: center;
  gap: 6.858px;
  color: #3C0A6D;
  font-size: 12.002px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.717px;
  letter-spacing: 0.429px;
`;
