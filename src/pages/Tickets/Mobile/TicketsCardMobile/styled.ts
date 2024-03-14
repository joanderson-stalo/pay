
import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}


export const CardContainer = styled.div`
  width: 100%;
  background: #FDFDFD;
  height: 191px;
`;

export const CardHeader = styled.div<{ status: 'Em tratamento' | 'Finalizado' }>`
  width: 100%;
  padding: 10px 28px;
  background-color: ${({ status }) => (status === 'Em tratamento' ? '#FF7C33' : '#2BC6F6')};
  display: flex;
  justify-content: space-between;
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
  padding: 20px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const DetailRow = styled.div`
  gap: 7px;
  display: flex;
`;

export const EditButton = styled.button<Color>`
  display: flex;
  padding: 12px 21px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #F5F4F4;
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
  max-width: 210px;
`;
