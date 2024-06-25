
import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}

export const CustomCard = styled.div`
  width: 100%;
  background: #FDFDFD;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  display: flex;
  gap: 4px;

`

export const CustomHeader = styled.div<Color>`
  width: 100%;
  padding: 10px 16px;
  background: ${(props) => props.primary};
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
  color: #202124;
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

export const CustomTitle = styled.span<Color>`
  color: ${(props) => props.primary};
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;

  > span {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    color: #202124;

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
  background: #1786291A;

  width: 32px;

  p {
    color: #202124;
    font-size: 12px;
    font-weight: 700;
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

export const CustomViewButton = styled.button<Color>`
  border-radius: 4.286px;
  border: 0.429px solid #F5F4F4;
  background: #FFF;
  display: flex;
  padding: 12.002px 20.575px;
  justify-content: center;
  align-items: center;
  gap: 6.858px;
  color:  ${(props) => props.primary};
  font-size: 12.002px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.717px;
  letter-spacing: 0.429px;
`;
