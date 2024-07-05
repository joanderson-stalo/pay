import styled from 'styled-components';


interface Color {
  primary: string | undefined
  secundary:string | undefined
}


export const CardWrapper = styled.div`
  width: 100%;
  background: #FDFDFD;
  border: 1px solid rgb(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div<Color>`
  width: 100%;
  padding: 10px 24px;
  background: ${(props) => props.primary};
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

export const TPVLabel = styled.span<Color>`
  font-size: 11px;
  font-weight: 600;
  color: ${(props) => props.primary};
`;

export const ValueLabel = styled.span<Color>`
  font-size: 11px;
  font-weight: 600;
  color: ${(props) => props.primary};
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





export const SupplierThree = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  background: #1786291A;
  color: red;

  p {
    color: #FFF;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    color: #202124;
  }
`;

export const LicenseName = styled.p`
 font-size: 11px;
 max-width: 173px;
 color: #8A8A8A;
`;

export const OverviewButton = styled.button<Color>`
  border-radius: 4.286px;
  border: 0.429px solid #F5F4F4;
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
