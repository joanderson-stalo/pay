import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  background: #FDFDFD;
`;

export const StyledHeader = styled.div`
  width: 100%;
  padding: 13px 24px;
  background: #08BBE9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledId = styled.span`
  font-size: 9.906px;
  font-weight: 600;
  line-height: 15.566px;
  color: #E6F8FD;
`;

export const StyledCNPJ = styled.p`
  font-size: 9.906px;
  line-height: 15.566px;
  color: #E6F8FD;
`;

export const StyledContentMain = styled.div`
  width: 100%;
  padding: 20px 24px 20px 24px;
  display: flex;
  justify-content: space-between;
`;

export const StyledContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const StyledContentRight = styled.div``;

export const StyledTPVContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 20px;
`;

export const StyledTPVLabel = styled.span`
  color: #08BBE9;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 15.566px;
`;

export const StyledTPVValue = styled.span`
  color: #10104F;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 15.566px;
`;

export const StyledTitle = styled.h3`
  color: #8A8A8A;
  font-size: 11px;
  font-weight: 600;
  line-height: 15.566px;

  > span {
    color: #7D7D7D;
    font-weight: 400;
  }
`;

export const StyledGeneralButton = styled.button`
  display: flex;
  padding: 12.002px 20.575px;
  justify-content: center;
  align-items: center;
  gap: 6.858px;
  border-radius: 4.286px;
  border: 0.429px solid #F5F4F4;
  background: #FFF;
  color: #3C0A6D;
  font-size: 12.002px;
  font-weight: 500;
  line-height: 13.717px;
  letter-spacing: 0.429px;
`;

export const StyledEstablishmentName = styled.h2`
  color: #FDFDFD;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
`;
