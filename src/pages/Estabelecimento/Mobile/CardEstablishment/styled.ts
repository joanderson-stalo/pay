import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  background: #FDFDFD;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 10px 24px;
  background: #08BBE9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EstablishmentId = styled.span`
  font-size: 9.906px;
  font-weight: 600;
  line-height: 15.566px;
  color: #E6F8FD;
`;

export const EstablishmentName = styled.h2`
  font-size: 12px;
  font-weight: 600;
  line-height: 15.566px;
  color: #E6F8FD;
`;

export const EstablishmentCNPJ = styled.p`
  font-size: 9.906px;
  line-height: 15.566px;
  color: #E6F8FD;
`;

export const MainContent = styled.div`
 width: 100%;
 padding: 20px 24px 20px 24px;
 display: flex;
 justify-content: space-between;
`;

export const ContentLeft = styled.div``;

export const ContentRight = styled.div``;

export const TPVWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 20px;
`;

export const TPVLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #08BBE9;
`;

export const ValueLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #10104F;
`;

export const LicenseWrapper = styled.div`
  gap: 7px;
`;

export const SupplierWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 7px;
`;

export const TitleLabel = styled.span`
 font-size: 11px;
 font-weight: 600;
 color: #8A8A8A;
`;

export const SupplierOne = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background:  #7D7D7D;

  p {
    color:  #FFF;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
  }
`;

export const SupplierTwo = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #F9C716;

  p {
    color:  #FFF;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
  }
`;

export const SupplierThree = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background:#55B938;

  p {
    color: #FFF;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
  }
`;

export const LicenseName = styled.p`
 font-size: 11px;
 max-width: 173px;
 color: #8A8A8A;
`;

export const OverviewButton = styled.button`
  border-radius: 4.286px;
  border: 0.429px solid #F5F4F4;
  background: #FFF;
  color: #3C0A6D;
  font-size: 12.002px;
  font-style: normal;
  font-weight: 500;
  height: 30.005px;
  padding: 0 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;