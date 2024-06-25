import styled from 'styled-components';


interface Color {
  primary: string | undefined
  secundary:string | undefined
}


export const StyledWrapper = styled.div`
  width: 100%;
  background: #FDFDFD;
  border: 1px solid rgb(0, 0, 0, 0.1);
`;

export const StyledHeader = styled.div<Color>`
  width: 100%;
  padding: 13px 24px;
  background: ${(props) => props.primary};
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

export const StyledTPVLabel = styled.span<Color>`
  color: ${(props) => props.primary};
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 15.566px;
`;

export const StyledTPVValue = styled.span`
  color: #202124;
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

export const StyledGeneralButton = styled.button<Color>`
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

export const StyledEstablishmentName = styled.h2`
  color: #FDFDFD;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
`;
