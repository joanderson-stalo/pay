
import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}


export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;


`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 10px 28px;
  background-color: #2BC6F6;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const TicketNumber = styled.p`
  color: #FDFDFD;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
`;

export const RequestLabel = styled.span`
  color: #FDFDFD;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0px;
`;

export const RequestStatus = styled.p`
  color: #FDFDFD;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 16px 8px;
  width: 100%;


  border-radius: 4px;
  background:  #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px){
    width: 100%;
    margin: 0 auto;
  }
`;

export const DetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

`;

export const DetailColumnBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const DetailRow = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  height: 30px;
  border-bottom: 0.5px solid #D1D1D1;

`;

export const EditButton = styled.button<Color>`
  display: flex;
  padding: 8px 21px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${(props) => props.primary};
  background: #FFF;
  color: ${(props) => props.primary};

  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.429px;
`;

export const SectionTitle = styled.span`
  color: #8A8A8A;
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
`;

export const SectionDescription = styled.p`
  color: #6C757D;
  font-size: 11px;
  line-height: 16px;
  width: 100%;
  max-width: 160px;
`;
