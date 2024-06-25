import styled from 'styled-components';

interface Color {
  primary: string | undefined
  secundary:string | undefined
}

export const CardWrapper = styled.div`
  width: 100%;
  background: #FDFDFD;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div<Color>`
  width: 100%;
  padding: 10px 28px;
  background: ${(props) => props.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 15.566px;
  color: #E6F8FD;
`;

export const EstablishmentName = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 15.566px;
  color: #E6F8FD;
`;

export const CommissionAmount = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 15.566px;
  color: #E6F8FD;
`;

export const ContentMain = styled.div`
  width: 100%;
  padding: 24px 25px 24px 25px;
  display: flex;
  justify-content: space-between;
`;

export const TransactionInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

export const DivText = styled.div`
  display: flex;
  gap: 7px;
`;

export const Title = styled.span<Color>`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.primary};
`;

export const Subvalue = styled.p`
  font-size: 12px;
  color: #202124;

`;

export const WrapperTag = styled.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background: #1786291A;
`;

export const Tag = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-align: left;
  color: #202124;
`;
