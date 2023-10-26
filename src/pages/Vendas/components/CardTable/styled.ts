import styled from 'styled-components';

interface StatusAndButtonProps {
  success: boolean; 
}


export const StyledCardTable = styled.div`
  border: 1px solid #e0e0e0;
  padding: 0;
  border-radius: 8px;
  width: 417px;
  margin-bottom: 20px;
  display: none;

  @media (max-width: 900px) {
    display: block
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #08BBE9;
  width: 100%;
  height: 60px; 
  border-radius: 8px 8px 0 0; 
  margin: 0;
  padding: 10px 16px; 
  color: #FFFFFF;
  box-sizing: border-box;
`;

export const Amount = styled.div`
  margin: 8px;
`;

export const PaymentType = styled.div`
  margin: 8px;
`;

export const BrandLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 8px;
  img {
    width: 30px;
    margin-right: 8px;
  }
  p {
    margin: 0;
    font-size: 16px;
    color: #555;
  }
`;

export const StatusAndButton = styled.div<StatusAndButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  div {
    font-size: 16px;
    color: ${props => (props.success ? '#48F041' : '#EC5252')};
  }
`;

export const Button = styled.button`
  color: #5A6ACF;
  font-size: 8.477px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
`;
