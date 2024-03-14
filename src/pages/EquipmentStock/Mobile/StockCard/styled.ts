
import styled from 'styled-components';


export const StockCardWrapper = styled.div`
  width: 100%;
  background: #FDFDFD;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 150px;
`;

export const StockCardHeader = styled.div`
  width: 100%;
  padding: 10px 28px;
  background: #343A40;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const StockNumber = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 15.566px;
  color: #E6F8FD;
`;

export const StockReference = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 15.566px;
  color: #E6F8FD;
`;

export const StockStatus = styled.p`
  font-size: 12px;
  font-weight: 700;
  color:'#343A40';
`;

export const StockCardContent = styled.div`
  width: 100%;
  padding: 23px 28px;
  display: flex;
  justify-content: space-between;
`;

export const StockInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StockTextGroup = styled.div`
  display: flex;
  gap: 7px;
`;

export const StockTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #8A8A8A;
`;

export const StockDescription = styled.p`
  font-size: 12px;
  color: #6C757D;
`;

export const StockDescriptionActive = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #8A8A8A;
`;

export const StockButton = styled.button`
  font-size: 8.477px;
  font-weight: 500;
  color: #5A6ACF;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
  padding: 4px 12px;
`;
